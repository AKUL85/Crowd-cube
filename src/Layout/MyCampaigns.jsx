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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-4">
                My Campaigns
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-gray-600 dark:text-gray-400">
                Manage your campaigns and track their progress
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/add-campaign')}
              className="flex items-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors shadow-lg w-full sm:w-auto justify-center"
            >
              <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">New Campaign</span>
            </motion.button>
          </div>
        </motion.div>

        {campaigns.length > 0 ? (
          <CampaignTable campaigns={campaigns} onView={handleView} onUpdate={handleUpdate} onDelete={handleDelete} />
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }} 
            className="text-center py-8 sm:py-16"
          >
            <div className="text-4xl sm:text-6xl mb-4">📋</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              No campaigns yet
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
              Create your first campaign to start raising funds for your cause
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/add-campaign')}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors text-sm sm:text-base"
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