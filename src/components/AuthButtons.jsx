import { Link } from 'react-router';

function AuthButtons() {
  return (
    <div className="flex items-center gap-2">
      <Link to="/auth/login">
        <button
          className="
          cursor-pointer
            rounded-xl
            px-4
            py-2.5
            font-medium
            text-slate-600
            transition-all
            hover:bg-slate-100
            hover:text-slate-900
          "
        >
          Login
        </button>
      </Link>

      <Link to="/auth/register">
        <button
          className="
            cursor-pointer
            rounded-xl
            bg-blue-600
            px-5
            py-2.5
            font-semibold
            text-white
            transition-all
            hover:-translate-y-0.5
            hover:bg-blue-700
            hover:shadow-lg
            hover:shadow-blue-200
          "
        >
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default AuthButtons;
