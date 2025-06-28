import React from 'react';
import { motion } from 'framer-motion';

const EmptyDonations = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-center py-16"
    >
      <div className="text-6xl mb-4">💝</div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">No donations yet</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Start supporting amazing campaigns and make a difference today
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = '/campaigns'}
        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
      >
        Explore Campaigns
      </motion.button>
    </motion.div>
  );
};

export default EmptyDonations;
