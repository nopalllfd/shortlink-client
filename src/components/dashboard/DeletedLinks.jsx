import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDeletedLinks } from '../../redux/slice/linkSlice';
import { Link2 } from 'lucide-react';

function DeletedLinks() {
  const dispatch = useDispatch();

  const { deletedLinks, loading } = useSelector((state) => state.link);
  const links = deletedLinks?.links;

  useEffect(() => {
    dispatch(getDeletedLinks());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold mb-6">Deleted Links</h1>

        {loading ? (
          <p>Loading...</p>
        ) : links?.length > 0 ? (
          <div className="space-y-4">
            {links.map((link) => (
              <div key={link.id} className="bg-white border border-slate-200 rounded-2xl p-5 flex justify-between items-center">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-red-500 font-semibold">
                    <Link2 size={14} />
                    {link.short_link}
                  </div>

                  <p className="mt-1 text-slate-500 truncate">{link.original_url}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-500">No deleted links</p>
        )}
      </div>
    </div>
  );
}

export default DeletedLinks;
