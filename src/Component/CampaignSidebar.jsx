import React from 'react';
import { motion } from 'framer-motion';
import { Heart, DollarSign, Clock, Target } from 'lucide-react';

const CampaignSidebar = ({ 
  campaign, 
  daysLeft, 
  isExpired, 
  goalAmount, 
  progressPercentage, 
  setShowDonationModal 
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">Raised</span>
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              ${campaign.totalRaised || 0}
            </span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Goal: ${goalAmount}</span>
              <span className="text-gray-600 dark:text-gray-400">{progressPercentage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, progressPercentage)}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {campaign.donorsCount || 0}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Donors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {daysLeft}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {isExpired ? 'Ended' : 'Days Left'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
          Campaign Details
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Min. Donation</span>
            </div>
            <span className="font-medium text-gray-900 dark:text-gray-100">
              ${campaign.minimumDonation}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Deadline</span>
            </div>
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {new Date(campaign.deadline).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Category</span>
            </div>
            <span className="font-medium text-gray-900 dark:text-gray-100 capitalize">
              {campaign.type}
            </span>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowDonationModal(true)}
        disabled={isExpired}
        className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
          isExpired
            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
        }`}
      >
        <Heart className="h-6 w-6" />
        <span>{isExpired ? 'Campaign Ended' : 'Donate Now'}</span>
      </motion.button>
    </div>
  );
};

export default CampaignSidebar;