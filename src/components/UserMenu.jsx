import { useSelector } from 'react-redux';
import { Link } from 'react-router';

function UserMenu() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="flex items-center gap-3">
      {/* Profile */}
      <Link to={'/profile'}>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/assets/profile.webp" alt="profile" className="w-8 h-8 rounded-full" />
          <span className="text-gray-700 font-medium">{user.email}</span>
        </div>
      </Link>

      {/* Logout */}
      <Link>
        <button className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Logout</button>
      </Link>
    </div>
  );
}

export default UserMenu;
