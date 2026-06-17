import ProfileCard from '../components/profile/ProfileCard';

const profileDummy = {
  name: 'Alex Thompson',
  role: 'Product Architect at Digital Flow',
  email: 'user@example.com',
  memberSince: 'January 1, 2026',
  activeAssets: 12,
  emailNotifications: true,
  twoFactorEnabled: false,
  isPro: true,
  avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Alex',
};

// import { useSelector } from "react-redux";

function ProfilePage() {
  /**
   * Jika Redux sudah ada:
   *
   * const user = useSelector(
   *   (state) => state.auth.user
   * );
   */

  // fallback ke dummy
  // const profile = user || profileDummy;

  const profile = profileDummy;

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Account Management</p>

        <ProfileCard profile={profile} />

        <p className="mt-8 text-center text-xs text-slate-400">
          Your data is encrypted using AES-256 standards.
          <button className="ml-1 text-blue-600 hover:underline">Privacy Policy</button>
        </p>
      </div>
    </div>
  );
}

export default ProfilePage;
