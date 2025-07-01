import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../Component/LoadingSpinner';
import toast from 'react-hot-toast';

import CampaignContent from '../Component/CampaignContent';
import CampaignSidebar from '../Component/CampaignSidebar';
import DonationModal from '../Component/DonationModal';
import { useAuth } from '../Auth/AuthProvider';
import CampaignHeader from '../Component/CampaignHeader';

const CampaignDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [campaign, setCampaign] = useState(null);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [donationAmount, setDonationAmount] = useState('');
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [donating, setDonating] = useState(false);

  useEffect(() => {
    if (!id) {
      navigate('/campaigns');
      return;
    }

    const fetchCampaign = async () => {
      try {
        const res = await fetch(`https://crowd-cube-server-2.onrender.com/Campaign/${id}`);
        const data = await res.json();
        if (!data) {
          toast.error('Campaign not found');
          navigate('/campaigns');
          return;
        }
        setCampaign(data);

        const donationRes = await fetch(`https://crowd-cube-server-2.onrender.com/Donation/${id}`);
        const donationsData = await donationRes.json();
        setDonations(donationsData);

        setLoading(false);
      } catch (error) {
        toast.error('Failed to load campaign');
        navigate('/campaigns');
      }
    };

    fetchCampaign();
  }, [id, navigate]);

  const daysLeft = campaign ? Math.max(0, Math.ceil(
    (new Date(campaign.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  )) : 0;

  const isExpired = daysLeft === 0;
  const goalAmount = campaign ? campaign.minimumDonation * 20 : 0;
  const progressPercentage = campaign ? Math.min(100, ((campaign.totalRaised || 0) / goalAmount) * 100) : 0;

  const handleDonate = async () => {
    if (!user) {
      toast.error('Please login to donate');
      navigate('/login');
      return;
    }

    if (isExpired) {
      toast.error('This campaign has ended. You can no longer donate.');
      return;
    }

    const amount = parseFloat(donationAmount);
    if (isNaN(amount) || amount < campaign.minimumDonation) {
      toast.error(`Minimum donation amount is $${campaign.minimumDonation}`);
      return;
    }

    setDonating(true);
    try {
      const newDonation = {
        campaignId: campaign._id, // MongoDB _id
        campaignTitle: campaign.title,
        amount,
        donorEmail: user.email,
        donorName: user.name,
        donatedAt: new Date().toISOString(),
      };

      const res = await fetch('https://crowd-cube-server-2.onrender.com/Donation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newDonation),
      });

      const data = await res.json();
      if (data.success) {
        // Refresh campaign
        const updatedCampaignRes = await fetch(`https://crowd-cube-server-2.onrender.com/Campaign/${campaign._id}`);
        const updatedCampaign = await updatedCampaignRes.json();
        setCampaign(updatedCampaign);

        // Refresh donations
        const donationRes = await fetch(`https://crowd-cube-server-2.onrender.com/Donation/${campaign._id}`);
        const donationsList = await donationRes.json();
        setDonations(donationsList);

        setShowDonationModal(false);
        setDonationAmount('');
        toast.success('Thank you for your donation!');
      } else {
        toast.error('Donation failed. Please try again.');
      }
    } catch (error) {
      toast.error('Donation failed. Please try again.');
    } finally {
      setDonating(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: campaign?.title,
        text: campaign?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  if (loading) return <LoadingSpinner />;

  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Campaign not found
          </h2>
          <button
            onClick={() => navigate('/campaigns')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Campaigns
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <CampaignHeader   campaign={campaign} 
            isExpired={isExpired} 
            handleShare={handleShare}></CampaignHeader>
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <CampaignContent 
                campaign={campaign} 
                donations={donations} 
              />
              <CampaignSidebar 
                campaign={campaign}
                daysLeft={daysLeft}
                isExpired={isExpired}
                goalAmount={goalAmount}
                progressPercentage={progressPercentage}
                setShowDonationModal={setShowDonationModal}
              />
            </div>
          </div>
        </div>
      </div>

      {showDonationModal && (
        <DonationModal
          campaign={campaign}
          donationAmount={donationAmount}
          setDonationAmount={setDonationAmount}
          handleDonate={handleDonate}
          setShowDonationModal={setShowDonationModal}
          donating={donating}
        />
      )}
    </div>
  );
};

export default CampaignDetails;
