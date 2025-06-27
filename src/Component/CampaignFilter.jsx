import React from 'react';
import { Search, ArrowUpDown } from 'lucide-react';
import { motion } from 'framer-motion';

const CampaignFilters = ({
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
  sortOrder,
  toggleSortOrder,
  total,
  filtered,
  clearFilters
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8"
    >
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search campaigns, creators, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="lg:w-48">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            <option value="all">All Categories</option>
            <option value="personal">Personal Issues</option>
            <option value="startup">Startups</option>
            <option value="business">Business</option>
            <option value="creative">Creative Ideas</option>
          </select>
        </div>

        {/* Sort Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleSortOrder}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowUpDown className="h-5 w-5" />
          <span>Sort by Amount ({sortOrder === 'asc' ? 'Low to High' : 'High to Low'})</span>
        </motion.button>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <span>
          Showing {filtered} of {total} campaigns
        </span>
        {(searchQuery || selectedType !== 'all') && (
          <button
            onClick={clearFilters}
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Clear filters
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default CampaignFilters;
