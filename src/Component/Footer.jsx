import React from 'react';
import { FaHeart, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <FaHeart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Crowdcube
              </span>
            </div>
            <p className="text-gray-300 max-w-md">
              Empowering dreams through collective support. Join our community of innovators, 
              creators, and supporters making positive change happen.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/campaigns" className="text-gray-300 hover:text-white transition-colors">All Campaigns</Link>
              </li>
              <li>
                <Link to="/add-campaign" className="text-gray-300 hover:text-white transition-colors">Start Campaign</Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Personal Issues</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Startups</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Business</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Creative Ideas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Healthcare</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <HiOutlineMail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">support@crowdcube.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Crowdcube. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
