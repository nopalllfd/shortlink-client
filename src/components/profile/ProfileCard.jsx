import { Calendar, Link2, Mail, ArrowRight, LogOut } from 'lucide-react';
import { FourSquare } from 'react-loading-indicators';
import { Link } from 'react-router';

function ProfileCard({ profile, loading, onLogout }) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-[0_20px_60px_-20px_rgba(15,23,42,0.08)]
      "
    >
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <FourSquare color="#809ccc" size="medium" />
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              border
              border-slate-200
              bg-slate-50
            "
          >
            <img src="/assets/profile.webp" alt={profile?.email} className="h-16 w-16 rounded-2xl object-cover" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Account</p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900 break-all">{profile?.email}</h1>

            <p className="mt-1 text-slate-500">Manage your BlinkURL account and assets.</p>
          </div>
        </div>

        <Link
          to="/dashboard"
          className="
            inline-flex
            items-center
            gap-2
            rounded-2xl
            bg-blue-600
            px-5
            py-3
            font-semibold
            text-white
            transition-all
            hover:bg-blue-700
            hover:shadow-lg
          "
        >
          View Links
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Stats */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-5
          "
        >
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-blue-600" />

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Email</p>
          </div>

          <p className="mt-4 break-all text-sm font-medium text-slate-700">{profile?.email}</p>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-5
          "
        >
          <div className="flex items-center gap-3">
            <Calendar size={18} className="text-blue-600" />

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Member Since</p>
          </div>

          <p className="mt-4 text-sm font-medium text-slate-700">
            {profile?.created_at
              ? new Date(profile.created_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              : '-'}
          </p>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-blue-100
            bg-blue-50
            p-5
          "
        >
          <div className="flex items-center gap-3">
            <Link2 size={18} className="text-blue-600" />

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-500">Active Links</p>
          </div>

          <p className="mt-4 text-4xl font-bold text-blue-600">{profile?.links_total || 0}</p>
        </div>
      </div>

      {/* Account Overview */}
      <div
        className="
          mt-10
          rounded-3xl
          border
          border-slate-200
          bg-slate-50
          p-6
        "
      >
        <h3 className="text-lg font-semibold text-slate-900">Account Overview</h3>

        <p className="mt-3 leading-7 text-slate-500">
          Your BlinkURL account is active and ready to manage shortened links, track performance analytics, and organize your digital assets from a
          single dashboard.
        </p>
      </div>

      {/* Logout Section */}
      <div
        className="
          mt-8
          rounded-3xl
          border
          border-red-100
          bg-red-50
          p-6
        "
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-semibold text-slate-900">Logout Session</h3>

            <p className="mt-1 text-sm text-slate-500">Sign out from your BlinkURL account on this device.</p>
          </div>

          <button
            onClick={onLogout}
            className="
              inline-flex
              cursor-pointer
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-red-200
              bg-white
              px-5
              py-3
              font-medium
              text-red-600
              transition-all
              hover:bg-red-100
              hover:border-red-300
            "
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
