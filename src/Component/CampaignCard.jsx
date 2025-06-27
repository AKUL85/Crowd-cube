import React from 'react';
import { Link } from 'react-router-dom';
import { Users, DollarSign, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const CampaignCard = ({ campaign }) => {
  const {
    _id: id,
    title,
    description,
    image,
    minimumDonation,
    userName = 'Anonymous',
    type,
    deadline,
    totalRaised = 0,
    donorsCount = 0
  } = campaign;

  const daysLeft = Math.max(
    0,
    Math.ceil((new Date(deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
  );

  const isExpired = daysLeft === 0;
  const progressPercentage = Math.min(
    100,
    (parseFloat(totalRaised) / (parseFloat(minimumDonation) * 10)) * 100
  );

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
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(type)}`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </div>
        {isExpired && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Expired
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {description}
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <DollarSign className="h-4 w-4" />
              <span>Min: ${minimumDonation}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Users className="h-4 w-4" />
              <span>{donorsCount} donors</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Raised</span>
              <span className="font-medium text-gray-900 dark:text-gray-100">
                ${totalRaised}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Clock className="h-4 w-4" />
            <span className="text-sm">
              {isExpired ? 'Campaign ended' : `${daysLeft} days left`}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            by {userName}
          </div>

          <Link to={`/campaign/${id}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors text-sm font-medium"
            >
              See More
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CampaignCard;
