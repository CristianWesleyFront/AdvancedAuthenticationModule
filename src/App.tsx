import { Outlet } from 'react-router-dom';
import { AuthInit } from './components/Auth';

function App() {
  return (
    <AuthInit>
      <Outlet />
    </AuthInit>
  );
}

export default App;
