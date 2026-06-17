import NavLinks from './NavLinks';
import AuthButtons from './AuthButtons';
import UserMenu from './UserMenu';
import CreateLinkButton from './CreateLinkButton';

import { useSelector } from 'react-redux';

function Navbar() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <nav className="w-full bg-gray-100 border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      {/* LEFT */}
      <div className="flex items-center gap-10">
        <h1 className="text-xl font-bold text-gray-800">ShortLink</h1>
        {!isAuthenticated ? '' : <NavLinks />}
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {!isAuthenticated ? (
          <AuthButtons />
        ) : (
          <>
            <CreateLinkButton />
            <UserMenu />
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
