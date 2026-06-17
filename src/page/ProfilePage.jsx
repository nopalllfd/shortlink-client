import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/profile/ProfileCard';

import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/slice/profileSlice';
import { useEffect } from 'react';

function ProfilePage() {
  const { profile, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  console.log(loading);
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Account Management</p>

          <ProfileCard profile={profile} loading={loading} />

          <p className="mt-8 text-center text-xs text-slate-400">
            Your data is encrypted using AES-256 standards.
            <button className="ml-1 text-blue-600 hover:underline">Privacy Policy</button>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
