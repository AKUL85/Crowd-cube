import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import {
  FaHome,
  FaBullhorn,
  FaPlusCircle,
  FaHandsHelping,
  FaDonate,
  FaSignInAlt,
  FaUserPlus,
} from 'react-icons/fa';

const Navbar = () => {
  const user = null;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          DonateWise
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex justify-between md:space-x-4'>
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
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className='md:hidden'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-gray-600 text-2xl hover:text-gray-950'
          >
            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <NavLink to="/" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
              <FaHome /><span>Home</span>
            </NavLink>
            <NavLink to="/campaigns" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
              <FaBullhorn /><span>All Campaigns</span>
            </NavLink>
            <NavLink to="/add-campaign" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
              <FaPlusCircle /><span>Add Campaign</span>
            </NavLink>
            <NavLink to="/my-campaigns" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
              <FaHandsHelping /><span>My Campaigns</span>
            </NavLink>
            <NavLink to="/my-donations" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
              <FaDonate /><span>My Donations</span>
            </NavLink>
            <Link to="/login" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
              <FaSignInAlt /><span>Login</span>
            </Link>
            <Link to="/register" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
              <FaUserPlus /><span>Register</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
