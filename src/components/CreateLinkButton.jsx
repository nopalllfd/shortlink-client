import { Link } from 'react-router';

function CreateLinkButton() {
  return (
    <Link to="/dashboard/create">
      <button className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-green-700">+ Create New Link</button>
    </Link>
  );
}

export default CreateLinkButton;
