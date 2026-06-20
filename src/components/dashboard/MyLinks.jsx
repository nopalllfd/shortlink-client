import { Search, Link2, Copy, Trash2, Calendar, ChevronLeft, ChevronRight, Filter, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLink, getLinks } from '../../redux/slice/linkSlice';
import { Link } from 'react-router';
import ConfirmDeleteModal from '../ConfirmDeleteModal';
import { FourSquare } from 'react-loading-indicators';
import toast from 'react-hot-toast';

function MyLinks() {
  const { links: data, loading } = useSelector((state) => state.link);
  const links = data?.links || [];
  const meta = data?.meta;
  const dispatch = useDispatch();
  const [copiedId, setCopiedId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCopy = async (id, shortLink) => {
    try {
      await navigator.clipboard.writeText(shortLink);

      setCopiedId(id);

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteLink(deleteId)).unwrap();

      setShowDeleteModal(false);
      setDeleteId(null);

      dispatch(getLinks());
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    dispatch(getLinks());
  }, [dispatch]);

  return (
    <>
      <ConfirmDeleteModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setDeleteId(null);
        }}
        onConfirm={handleDelete}
      />
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-12">
        {' '}
        {loading && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-50">
            <FourSquare color="#809ccc" size="medium" />
          </div>
        )}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
          {' '}
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">My links</h2>
            <p className="text-slate-500 mt-1">Manage and track your shortened digital assets.</p>
          </div>
          <div className="text-right">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-slate-400">Total Active</p>
            <p className="text-4xl font-bold text-blue-600">{meta?.total}</p>
          </div>
        </div>
        {/* Search */}
        <div
          className="
    relative
    mb-8
    overflow-hidden
    rounded-2xl
    border
    border-slate-200
    bg-white
    shadow-sm
  "
        >
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search by name or URL..."
            className="
      w-full
      py-4
      pl-12
      pr-12
      outline-none
      text-slate-700
    "
          />

          <Filter size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" />
        </div>
        <Link
          to="/dashboard/deleted"
          className="
    inline-flex
    items-center
    rounded-xl
    border
    border-red-200
    bg-red-50
    px-4
    py-2.5
    mb-4
    text-sm
    font-medium
    text-red-600
    transition-all
    hover:bg-red-100
  "
        >
          Deleted Links
        </Link>
        {/* links */}
        <div className="space-y-4">
          {links?.length > 0 ? (
            links.map((link) => (
              <div
                key={link.id}
                className="
    group
    flex
    justify-between
    items-center
    rounded-3xl
    border
    border-slate-200
    bg-white
    p-6
    transition-all
    duration-300
    hover:border-blue-100
    hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.12)]
  "
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
                    <Link2 size={14} />
                    <Link to={link.short_link}>{link.short_link}</Link>
                  </div>

                  <Link to={link.original_url}>
                    <p className="mt-1 text-slate-500 truncate">{link.original_url}</p>
                  </Link>
                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm font-medium text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {link.created_at
                        ? new Date(link.created_at).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })
                        : '-'}
                    </span>
                    <span>clicks count : {link.clicks}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <button
                    onClick={() => handleCopy(link.id, link.short_link)}
                    className="
    flex
    h-11
    w-11
    items-center
    justify-center
    rounded-2xl
    border
    border-slate-200
    bg-white
    transition-all
    hover:bg-slate-50
    hover:shadow-md
  "
                  >
                    {copiedId === link.id ? <Check size={18} className="text-green-600" /> : <Copy size={18} className="text-slate-600" />}{' '}
                  </button>

                  <button
                    onClick={() => {
                      setDeleteId(link.id);
                      setShowDeleteModal(true);
                    }}
                    className="
    flex
    h-11
    w-11
    items-center
    justify-center
    rounded-2xl
    border
    border-slate-200
    text-slate-400
    transition-all
    hover:border-red-200
    hover:text-red-500
  "
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div
              className="
      rounded-3xl
      border
      border-dashed
      border-slate-300
      py-20
      text-center
      flex flex-col justify-center items-center gap-4
    "
            >
              <img src="/assets/dashboard/no-data.svg" className="w-1/5" alt="no data icon" />
              <p className="text-slate-500">No links found.</p>
            </div>
          )}
        </div>
        {/* Pagination */}
        <div
          className="
    mt-10
    flex
    items-center
    justify-between
    rounded-2xl
    border
    border-slate-200
    bg-white
    px-6
    py-4
  "
        >
          <button
            className="
  flex
  items-center
  gap-2
  rounded-xl
  px-3
  py-2
  text-slate-500
  transition
  hover:bg-slate-100
"
          >
            <ChevronLeft size={16} />
            Prev Page
          </button>

          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">{meta?.page}</span>

            <span className="text-slate-500">of</span>

            <span className="font-medium">{meta?.total_pages}</span>
          </div>

          <button
            className="
  flex
  items-center
  gap-2
  rounded-xl
  px-3
  py-2
  text-slate-500
  transition
  hover:bg-slate-100
"
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
}

export default MyLinks;
