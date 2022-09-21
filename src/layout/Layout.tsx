import { Outlet } from 'react-router-dom';
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
    </div>
  );
};

export default Layout;
