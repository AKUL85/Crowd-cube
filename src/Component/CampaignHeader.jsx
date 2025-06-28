import React from 'react';
import { Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const CampaignHeader = ({ campaign, isExpired, handleShare }) => {
  const getCategoryColor = (type) => {
    switch (type) {
      case 'personal': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      case 'startup': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'business': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'creative': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  return (
    <div className="relative h-96">
      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute top-6 left-6">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(campaign.type)}`}>
          {campaign.type.charAt(0).toUpperCase() + campaign.type.slice(1)}
        </span>
      </div>
      {isExpired && (
        <div className="absolute top-6 right-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Campaign Ended
        </div>
      )}
      <div className="absolute bottom-6 right-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShare}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
        >
          <Share2 className="h-5 w-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default CampaignHeader;