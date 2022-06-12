import { Outlet, Route, Routes } from 'react-router-dom';
import { Container } from './styles';
import Registration from './components/Registration';
// import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';

const AuthLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      {/*<Route path="forgot-password" element={<ForgotPassword />} /> */}
      <Route index element={<Login />} />
    </Route>
  </Routes>
);

export { AuthPage };
