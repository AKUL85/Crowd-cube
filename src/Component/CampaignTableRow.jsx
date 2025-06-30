import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Edit, Trash2 } from 'lucide-react';

const CampaignTableRow = ({ campaign, index, onView, onUpdate, onDelete }) => {
  const getCategoryColor = (type) => {
    switch (type) {
      case 'personal': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      case 'startup': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'business': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'creative': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  const getStatusColor = (deadline) => {
    const isExpired = new Date(deadline) <= new Date();
    return isExpired 
      ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
      : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
  };

  const getStatus = (deadline) => {
    const isExpired = new Date(deadline) <= new Date();
    return isExpired ? 'Ended' : 'Active';
  };

  return (
    <>
      {/* For large screens */}
      <motion.tr
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        className="hidden sm:table-row hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <td className="px-6 py-4">
          <div className="flex items-center space-x-4">
            <img src={campaign.image} alt={campaign.title} className="w-16 h-16 object-cover rounded-lg" />
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 line-clamp-1">{campaign.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{campaign.description}</p>
            </div>
          </div>
        </td>
        <td className="px-6 py-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(campaign.type)}`}>
            {campaign.type.charAt(0).toUpperCase() + campaign.type.slice(1)}
          </span>
        </td>
        <td className="px-6 py-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.deadline)}`}>
            {getStatus(campaign.deadline)}
          </span>
        </td>
        <td className="px-6 py-4">
          <div>
            <div className="text-lg font-bold text-gray-900 dark:text-gray-100">${campaign.totalRaised || 0}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{campaign.donorsCount || 0} donors</div>
          </div>
        </td>
        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{new Date(campaign.deadline).toLocaleDateString()}</td>
        <td className="px-6 py-4">
          <div className="flex space-x-2">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onView(campaign._id)} className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="View Campaign"><Eye className="h-4 w-4" /></motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onUpdate(campaign._id)} className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg transition-colors" title="Update Campaign"><Edit className="h-4 w-4" /></motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onDelete(campaign._id)} className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Delete Campaign"><Trash2 className="h-4 w-4" /></motion.button>
          </div>
        </td>
      </motion.tr>

      {/* For small screens */}
      <motion.tr
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        className="sm:hidden bg-gray-50 dark:bg-gray-800 transition-colors"
      >
        <td className="p-4" colSpan="6">
          <div className="flex flex-col space-y-2">
            <img src={campaign.image} alt={campaign.title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{campaign.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{campaign.description}</p>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(campaign.type)}`}>
                {campaign.type.charAt(0).toUpperCase() + campaign.type.slice(1)}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.deadline)}`}>
                {getStatus(campaign.deadline)}
              </span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300">
                {new Date(campaign.deadline).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div>
                <div className="text-lg font-bold text-gray-900 dark:text-gray-100">${campaign.totalRaised || 0}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{campaign.donorsCount || 0} donors</div>
              </div>
              <div className="flex space-x-2">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onView(campaign._id)} className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="View Campaign"><Eye className="h-4 w-4" /></motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onUpdate(campaign._id)} className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg transition-colors" title="Update Campaign"><Edit className="h-4 w-4" /></motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onDelete(campaign._id)} className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Delete Campaign"><Trash2 className="h-4 w-4" /></motion.button>
              </div>
            </div>
          </div>
        </td>
      </motion.tr>
    </>
  );
};

export default CampaignTableRow;
