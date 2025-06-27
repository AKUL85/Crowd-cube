import React from 'react';
import { motion } from 'framer-motion';
import CampaignCard from './CampaignCard';

const CampaignList = ({ campaigns }) => {
  if (campaigns.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center py-16"
      >
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          No campaigns found
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Try adjusting your search or filter criteria
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/add-campaign'}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
        >
          Create Your First Campaign
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {campaigns.map((campaign, index) => (
        <motion.div
          key={campaign.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <CampaignCard campaign={campaign} />
        </motion.div>
      ))}
    </div>
  );
};

export default CampaignList;
