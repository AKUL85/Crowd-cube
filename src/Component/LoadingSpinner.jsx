import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="inline-block p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4"
        >
          <FaHeart className="h-8 w-8 text-white" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Loading...
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Please wait while we prepare your content
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
