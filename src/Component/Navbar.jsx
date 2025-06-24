import { Link, NavLink } from 'react-router-dom';
import {
  FaHome,
  FaBullhorn,
  FaPlusCircle,
  FaHandsHelping,
  FaDonate,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt
} from 'react-icons/fa';

const Navbar = () => {
  const user = null; 

  const handleLogout = () => {
    console.log("Logout clicked");
    
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
      
        <Link to="/" className="text-xl font-bold text-blue-600">
          DonateWise
        </Link>

      
        <div className="flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-1 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`
            }
          >
            <FaHome />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/campaigns"
            className={({ isActive }) =>
              `flex items-center space-x-1 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`
            }
          >
            <FaBullhorn />
            <span>All Campaigns</span>
          </NavLink>

          <NavLink
            to="/add-campaign"
            className={({ isActive }) =>
              `flex items-center space-x-1 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`
            }
          >
            <FaPlusCircle />
            <span>Add Campaign</span>
          </NavLink>

          <NavLink
            to="/my-campaigns"
            className={({ isActive }) =>
              `flex items-center space-x-1 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`
            }
          >
            <FaHandsHelping />
            <span>My Campaigns</span>
          </NavLink>

          <NavLink
            to="/my-donations"
            className={({ isActive }) =>
              `flex items-center space-x-1 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`
            }
          >
            <FaDonate />
            <span>My Donations</span>
          </NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/login" className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600">
            <FaSignInAlt />
            <span>Login</span>
          </Link>
          <Link to="/register" className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600">
            <FaUserPlus />
            <span>Register</span>
          </Link>

          <div className="relative group">
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover border-2 border-blue-500"
            />
            <div className="absolute bottom-0 left-0 transform translate-y-full bg-white border text-sm px-3 py-1 rounded shadow-md hidden group-hover:block">
              User
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center space-x-1 text-sm text-gray-600 hover:text-red-600"
          >
            <FaSignOutAlt />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
