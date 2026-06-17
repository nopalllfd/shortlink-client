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
        <button onClick={() => setOpenLogoutModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Logout
        </button>

        <Link to="/profile">
          <div className="flex items-center gap-2">
            <img src="/assets/profile.webp" className="w-8 h-8 rounded-full" />
            <span>{user?.email}</span>
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
