import { NavLink } from 'react-router';

function NavLinks() {
  const navItems = [
    {
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      label: 'Analytics',
      path: '/analytics',
    },
    {
      label: 'Links',
      path: '/links',
    },
  ];

  return (
    <div className="flex gap-6 text-gray-600 font-medium">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => (isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 pb-1')}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

export default NavLinks;
