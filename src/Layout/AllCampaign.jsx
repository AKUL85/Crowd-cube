import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CampaignFilters from '../Component/CampaignFilter';
import CampaignList from '../Component/CampaignList';
import LoadingSpinner from '../Component/LoadingSpinner';

const AllCampaign= () => {
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchCampaigns = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://myapp-seven-livid.vercel.app/Campaign');
        const data = await response.json();
        setCampaigns(data);
        setFilteredCampaigns(data);
      } catch (error) {
        console.error('Failed to fetch campaigns:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  useEffect(() => {
    let filtered = campaigns;

    if (searchQuery) {
      filtered = filtered.filter(campaign =>
        campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campaign.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campaign.userName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(campaign => campaign.type === selectedType);
    }

    filtered = [...filtered].sort((a, b) => {
      return sortOrder === 'asc'
        ? a.minimumDonation - b.minimumDonation
        : b.minimumDonation - a.minimumDonation;
    });

    setFilteredCampaigns(filtered);
  }, [campaigns, searchQuery, selectedType, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedType('all');
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            All Campaigns
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Discover and support amazing campaigns from our community
          </p>
        </motion.div>

        <CampaignFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          sortOrder={sortOrder}
          toggleSortOrder={toggleSortOrder}
          total={campaigns.length}
          filtered={filteredCampaigns.length}
          clearFilters={clearFilters}
        />

        <CampaignList campaigns={filteredCampaigns} />
      </div>
    </div>
  );
};

export default AllCampaign;
