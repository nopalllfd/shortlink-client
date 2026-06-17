import { Link } from 'react-router';

function AuthButtons() {
  return (
    <div className="flex items-center gap-3">
      <Link to="/auth/login">
        <button className="text-gray-600 cursor-pointer hover:text-blue-600 font-medium">Login</button>
      </Link>
      <Link to="/auth/register">
        <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-700">Register</button>
      </Link>
    </div>
  );
}

export default AuthButtons;
