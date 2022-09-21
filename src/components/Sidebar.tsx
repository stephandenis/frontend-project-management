import { useState } from 'react';
import SidebarLogo from './SidebarLogo';
import SidebarRoute from './SidebarRoute';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='flex flex-col md:flex-row flex-no-wrap md:h-full'>
      <div className='sidebar hidden md:flex'>
        <div className='w-3/4 mr-10'>
          <div className='mt-5'>
            <SidebarLogo />
          </div>
          <ul className='mt-12'>
            <SidebarRoute to='/home' title='Home' icon='fas fa-home' />
            <SidebarRoute to='/users' title='Users' icon='fas fa-person' />
          </ul>
        </div>
      </div>
      <div className='flex md:hidden w-full justify-between bg-indigo-700/80 p-2 text-white'>
        <i
          className={`fas fa-${open ? 'times' : 'bars'}`}
          onClick={() => setOpen(!open)}
        />
      </div>

      {open && (
        <div>
          <div className='sidebar h-full z-40 absolute md:h-full md:hidden transition duration-150 ease-in-out'>
            <div className='w-3/4'>
              <div className='mt-5'>
                <SidebarLogo />
              </div>
              <ul className='mt-12'>
                <SidebarRoute to='/home' title='Home' icon='fas fa-home' />
                <SidebarRoute to='/users' title='Users' icon='fas fa-person' />
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
