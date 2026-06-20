import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import LoginPage from './page/auth/LoginPage';
import HomePage from './page/HomePage';
import HomeLayout from './layout/HomeLayout';
import RegisterPage from './page/auth/RegisterPage';
import DashboardPage from './page/DashboardPage';
import CreateLinkPage from './page/CreateLinkPage';
import NotFoundPage from './page/NotFoundPage';
import ProfilePage from './page/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import RedirectPage from './page/RedirectPage';
import DeletedLinks from './components/dashboard/DeletedLinks';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/auth">
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="/home" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard">
          <Route index element={<DashboardPage />} />
          <Route path="create" element={<CreateLinkPage />} />
          <Route path="deleted" element={<DeletedLinks />} />
        </Route>
        <Route path="/analitycs"></Route>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="/notfound" element={<NotFoundPage />} />
      <Route path="/:slug" element={<RedirectPage />} />
    </Routes>
  );
}

export default AppRouter;
