import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/profile/ProfileCard';

import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/slice/profileSlice';
import { useEffect } from 'react';
import { logoutUser } from '../redux/slice/authSlice';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import ConfirmModal from '../components/ConfirmDeleteModal';

function ProfilePage() {
  const { profile, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLogoutLoading(true);

      await dispatch(logoutUser()).unwrap();

      navigate('/auth/login');
    } finally {
      setLogoutLoading(false);
      setShowLogoutModal(false);
    }
  };

  console.log(loading);
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 px-6 pt-32 pb-10">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Account Management</p>
          <ProfileCard profile={profile} loading={loading} onLogout={() => setShowLogoutModal(true)} />{' '}
          <p className="mt-8 text-center text-xs text-slate-400">
            Your data is encrypted using AES-256 standards.
            <button className="ml-1 text-blue-600 hover:underline">Privacy Policy</button>
          </p>
        </div>
      </div>
      <Footer />
      <ConfirmModal
        isOpen={showLogoutModal}
        loading={logoutLoading}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
        title="Logout Session"
        description="Are you sure you want to logout from your BlinkURL account?"
        confirmText="Logout"
      />
    </>
  );
}

export default ProfilePage;
