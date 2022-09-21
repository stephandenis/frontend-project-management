import { NavLink } from 'react-router-dom';

const SidebarRoute = ({ to, title, icon }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'sidebar-route text-white bg-indigo-600/80 shadow-indigo-300 shadow-md'
            : 'sidebar-route text-gray-900 hover:text-white hover:bg-indigo-400'
        }
      >
        <div className='flex items-center space-x-2'>
          <i className={icon} />
          <span className='text-sm'>{title}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default SidebarRoute;
