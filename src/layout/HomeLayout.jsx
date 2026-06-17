import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

function HomeLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default HomeLayout;
