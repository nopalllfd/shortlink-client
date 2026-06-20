import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';

import NavLinks from './NavLinks';
import AuthButtons from './AuthButtons';
import UserMenu from './UserMenu';
import CreateLinkButton from './CreateLinkButton';

function Navbar() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        flex
        justify-center
        transition-all
        duration-300
        ${isScrolled ? 'pt-4' : 'pt-0'}
      `}
    >
      <nav
        className={`
          w-full
          max-w-7xl
          h-20
          flex
          items-center
          justify-between
          px-6
          transition-all
          duration-300

          ${
            isScrolled
              ? `
                rounded-2xl
                border
                border-slate-200/70
                bg-white/75
                backdrop-blur-xl
                shadow-[0_8px_40px_rgba(15,23,42,0.08)]
              `
              : `
                bg-transparent
                border border-transparent
              `
          }
        `}
      >
        {/* LEFT */}
        <div className="flex items-center gap-10">
          <Link to="/" className="transition-opacity hover:opacity-80">
            <img src="/logo.webp" alt="BlinkURL" className="w-40" />
          </Link>

          {isAuthenticated && (
            <div className="hidden md:block">
              <NavLinks />
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
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
    </header>
  );
}

export default Navbar;
