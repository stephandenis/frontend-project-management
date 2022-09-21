import { NavLink } from 'react-router-dom';

const SidebarLogo = () => {
  return (
    <NavLink to='/home' className='flex items-center justify-center  space-x-2'>
      <img src='/vite.svg' alt='logo' />
      <span className='text-xl font-extralight'>Dashboard</span>
    </NavLink>
  );
};

export default SidebarLogo;
