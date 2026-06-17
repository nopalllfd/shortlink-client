import { Bell, Shield, Link2, Pencil, LogOut } from 'lucide-react';

function ProfileCard({ profile }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex items-start justify-between">
        <h1 className="text-3xl font-bold">Profile</h1>

        {profile.isPro && <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">PRO MEMBER</span>}
      </div>

      <div className="mt-10 flex items-center gap-5">
        <div className="relative">
          <img src={profile.avatar} alt={profile.name} className="h-20 w-20 rounded-2xl object-cover" />

          <button className="absolute -bottom-1 -right-1 rounded-lg border bg-white p-1.5 shadow">
            <Pencil size={14} />
          </button>
        </div>

        <div>
          <h2 className="text-xl font-semibold">{profile.name}</h2>

          <p className="text-slate-500">{profile.role}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-slate-100 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</p>

          <p className="mt-3 text-sm">{profile.email}</p>
        </div>

        <div className="rounded-xl bg-slate-100 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Account Tenure</p>

          <p className="mt-3 text-sm">Member since: {profile.memberSince}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-xl bg-blue-700 p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-white/10 p-3">
            <Link2 size={18} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-blue-100">Active Assets</p>

            <p className="text-3xl font-bold">{profile.activeAssets}</p>
          </div>
        </div>

        <button className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm">View Links</button>
      </div>

      <div className="mt-8 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell size={18} className="text-slate-400" />
            <span>Email Notifications</span>
          </div>

          <div className={`relative h-6 w-11 rounded-full ${profile.emailNotifications ? 'bg-blue-600' : 'bg-slate-300'}`}>
            <span className={`absolute top-1 h-4 w-4 rounded-full bg-white ${profile.emailNotifications ? 'left-6' : 'left-1'}`} />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield size={18} className="text-slate-400" />
            <span>Two-Factor Authentication</span>
          </div>

          <span className="text-xs font-bold uppercase text-red-500">{profile.twoFactorEnabled ? 'Enabled' : 'Disabled'}</span>
        </div>
      </div>

      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100">
        <LogOut size={16} />
        Logout Session
      </button>
    </div>
  );
}

export default ProfileCard;
