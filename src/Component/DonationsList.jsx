import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const DonationsList = ({ donations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {donations.map((donation, index) => (
        <motion.div
          key={donation.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          {donation.campaign && (
            <div className="relative h-48">
              <img
                src={donation.campaign.image}
                alt={donation.campaignTitle}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg line-clamp-2">{donation.campaignTitle}</h3>
              </div>
            </div>
          )}

          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Donation Amount</span>
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">${donation.amount}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Date</span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{new Date(donation.donatedAt).toLocaleDateString()}</span>
            </div>

            {donation.campaign && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Status</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    new Date(donation.campaign.deadline) > new Date()
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
                  }`}
                >
                  {new Date(donation.campaign.deadline) > new Date() ? 'Active' : 'Ended'}
                </span>
              </div>
            )}

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link
                to={`/campaign/${donation.campaignId}`}
                className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>View Campaign</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DonationsList;
