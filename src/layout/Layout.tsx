import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  return (
    <div className='flex flex-col md:flex-row flex-nowrap h-screen'>
      <Sidebar />
      <div className='flex w-full h-full'>
        <div className='w-full h-full overflow-y-scroll'>
          <Outlet />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Layout;
