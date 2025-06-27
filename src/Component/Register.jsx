import { useState } from "react";
import { useAuth } from "../Auth/AuthProvider";
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Mail, Image } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createAccountWithEmailPassword, signInWithPopUp } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value.trim();

    if (!name || !email || !password || !photoURL) {
      toast.error("All fields are required!");
      setLoading(false);
      return;
    }

    // Password validation
    const errors = [];
    if (!/(?=.*[a-z])/.test(password)) {
      errors.push('Password must contain at least one lowercase letter.');
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push('Password must contain at least one uppercase letter.');
    }
    if (password.length < 6) {
      errors.push('Password must be at least 6 characters long.');
    }

    if (errors.length > 0) {
      toast.error(errors[0]);
      setLoading(false);
      return;
    }

    createAccountWithEmailPassword(email, password)
      .then(res => {
        return updateProfile(res.user, {
          displayName: name,
          photoURL: photoURL,
        });
      })
      .then(() => {
        toast.success("Account created successfully!");
        navigate('/');
      })
      .catch(error => {
        console.error(error);
        switch (error.code) {
          case 'auth/email-already-in-use':
            toast.error('This email is already registered.');
            break;
          case 'auth/invalid-email':
            toast.error('Please enter a valid email address.');
            break;
          case 'auth/weak-password':
            toast.error('Password should be at least 6 characters.');
            break;
          case 'auth/operation-not-allowed':
            toast.error('Email/password accounts are not enabled.');
            break;
          default:
            toast.error(error.message);
        }
      })
      .finally(() => setLoading(false));
  };

  const handleLoginWithGoogle = () => {
    setLoading(true);
    signInWithPopUp()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate('/');
      })
      .catch(error => {
        console.error(error);
        switch (error.code) {
          case 'auth/popup-closed-by-user':
            toast.error('Login popup was closed before completing.');
            break;
          case 'auth/cancelled-popup-request':
            toast.error('Popup request was cancelled.');
            break;
          default:
            toast.error(error.message);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full space-y-8"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2"
            >
              Join Crowdcube
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400">
              Create your account to start or support campaigns
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleRegister}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                  <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Photo URL
                </label>
                <div className="relative">
                  <input
                    id="photoURL"
                    name="photoURL"
                    type="url"
                    required
                    className="w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your photo URL"
                  />
                  <Image className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                <div className="mt-2 space-y-1">
                  <p className="text-xs text-gray-600 dark:text-gray-400">Password must contain:</p>
                  <ul className="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                    <li>• At least one uppercase letter</li>
                    <li>• At least one lowercase letter</li>
                    <li>• At least 6 characters long</li>
                  </ul>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLoginWithGoogle}
              className="w-full mt-4 flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all"
            >
              Continue with Google
            </motion.button>

            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
