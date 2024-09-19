import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar defaultcolor="#008000"/>
      <Outlet />
      <ToastContainer />
    </>
  );
};
export default MainLayout;
