function UserMenu() {
  return (
    <div className="flex items-center gap-3">
      {/* Profile */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img src="https://i.pravatar.cc/40" alt="profile" className="w-8 h-8 rounded-full" />
        <span className="text-gray-700 font-medium">Naufal</span>
      </div>

      {/* Logout */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Logout</button>
    </div>
  );
}

export default UserMenu;
