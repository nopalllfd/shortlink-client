import { Link } from 'react-router';

function CreateLinkButton() {
  return (
    <Link to="/dashboard/create">
      <button
        className="
          rounded-xl
          bg-blue-600
          px-4
          py-2.5
          text-sm
          font-semibold
          text-white
          transition-all
          hover:-translate-y-0.5
          hover:bg-blue-700
          hover:shadow-lg
          hover:shadow-blue-200
        "
      >
        + Create Link
      </button>
    </Link>
  );
}

export default CreateLinkButton;
