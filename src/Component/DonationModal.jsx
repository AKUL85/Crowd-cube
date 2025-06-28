import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';

const DonationModal = ({ 
  campaign, 
  donationAmount, 
  setDonationAmount, 
  handleDonate, 
  setShowDonationModal, 
  donating 
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Make a Donation
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Support "{campaign.title}" with your contribution
        </p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Donation Amount (Min: ${campaign.minimumDonation})
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="number"
                min={campaign.minimumDonation}
                step="0.01"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                placeholder="Enter amount"
              />
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowDonationModal(false)}
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDonate}
              disabled={donating}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {donating ? 'Processing...' : 'Donate'}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DonationModal;