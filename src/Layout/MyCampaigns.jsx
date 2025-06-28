import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

import toast from 'react-hot-toast';
import CampaignTable from '../Component/CampaignTable';
import LoadingSpinner from '../Component/LoadingSpinner';
import DeleteConfirmationModal from '../Component/DeleteConfirmationModal';
import { useAuth } from '../Auth/AuthProvider';

const MyCampaigns = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    if (!user) return;

    setLoading(true);
    fetch(`http://localhost:5000/Campaign?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setCampaigns(data);
      })
      .catch(err => {
        console.error('Error fetching campaigns:', err);
        toast.error('Failed to load campaigns');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user]);

  const handleUpdate = (id) => {
    navigate(`/update-campaign/${id}`);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (!deleteId) return;

    fetch(`http://localhost:5000/Campaign/${deleteId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setCampaigns(campaigns.filter(c => c._id !== deleteId));
          toast.success('Campaign deleted successfully');
        } else {
          toast.error('Failed to delete campaign');
        }
      })
      .catch((error) => {
        console.error('Delete error:', error);
        toast.error('Failed to delete campaign');
      })
      .finally(() => {
        setDeleteId(null);
      });
  };

  const handleView = (id) => {
    navigate(`/campaign/${id}`);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">My Campaigns</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">Manage your campaigns and track their progress</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/add-campaign')}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors shadow-lg"
            >
              <Plus className="h-5 w-5" />
              <span>New Campaign</span>
            </motion.button>
          </div>
        </motion.div>

        {campaigns.length > 0 ? (
          <CampaignTable campaigns={campaigns} onView={handleView} onUpdate={handleUpdate} onDelete={handleDelete} />
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-center py-16">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">No campaigns yet</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Create your first campaign to start raising funds for your cause</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/add-campaign')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              Create Your First Campaign
            </motion.button>
          </motion.div>
        )}
      </div>

      <DeleteConfirmationModal show={!!deleteId} onClose={() => setDeleteId(null)} onConfirm={confirmDelete} />
    </div>
  );
};

export default MyCampaigns;
