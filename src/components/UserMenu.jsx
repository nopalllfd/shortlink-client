import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { logoutUser } from '../redux/slice/authSlice';
import toast from 'react-hot-toast';
import { useState } from 'react';
import ConfirmModal from './ConfirmDeleteModal';

function UserMenu() {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);

      await dispatch(logoutUser());

      navigate('/auth/login');
    } catch (error) {
      toast.error(error?.message || 'Logout failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <Link to="/profile">
          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-3
              py-2
              transition-all
              hover:border-slate-300
              hover:shadow-md
            "
          >
            <img
              src="/assets/profile.webp"
              alt="Profile"
              className="
                h-9
                w-9
                rounded-full
                object-cover
              "
            />

            <div className="hidden sm:flex flex-col">
              <span className="text-xs text-slate-400">Signed in as</span>

              <span className="max-w-[180px] truncate text-sm font-medium text-slate-700">{user?.email}</span>
            </div>
          </div>
        </Link>
      </div>

      <ConfirmModal
        isOpen={openLogoutModal}
        loading={loading}
        onClose={() => setOpenLogoutModal(false)}
        onConfirm={handleLogout}
        title="Logout"
        description="Are you sure you want to logout?"
        confirmText="Yes, Logout"
      />
    </>
  );
}

export default UserMenu;
