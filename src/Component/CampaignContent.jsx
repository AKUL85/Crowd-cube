import React from 'react';
import { User, Calendar } from 'lucide-react';

const CampaignContent = ({ campaign, donations }) => {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {campaign.title}
        </h1>
        
        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-6">
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5" />
            <span>by {campaign.userName}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Created {new Date(campaign.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {campaign.description}
          </p>
        </div>
      </div>

      {donations.length > 0 && (
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Recent Donations
          </h3>
          <div className="space-y-4">
            {donations.slice(0, 5).map((donation) => (
              <div
                key={donation.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {donation.donorName}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(donation.donatedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-lg font-bold text-green-600 dark:text-green-400">
                  ${donation.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignContent;