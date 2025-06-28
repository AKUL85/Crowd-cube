import React from 'react';
import { DollarSign, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const DonationsStats = ({ totalDonated, campaignsSupported, totalDonations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
      >
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
            <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Donated</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">${totalDonated.toFixed(2)}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
      >
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
            <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Campaigns Supported</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{campaignsSupported}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
      >
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
            <ExternalLink className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Donations</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalDonations}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DonationsStats;
