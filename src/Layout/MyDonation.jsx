import React, { useState, useEffect } from 'react';


import LoadingSpinner from '../Component/LoadingSpinner';
import DonationsStats from '../Component/DonationsStats';
import DonationsList from '../Component/DonationsList';
import EmptyDonations from '../Component/EmptyDonations';
import { useAuth } from '../Auth/AuthProvider';




const MyDonations = () => {
    const { user } = useAuth();
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    if (!user) return;

    setLoading(true);

    fetch('https://myapp-seven-livid.vercel.app/Donation') 
        .then(res => res.json())
        .then(allDonations => {
            
            const userDonations = allDonations.filter(donation => donation.donorEmail === user.email);

            const enrichedPromises = userDonations.map(donation =>
                fetch(`https://myapp-seven-livid.vercel.app/Campaign/${donation.campaignId}`)
                    .then(res => res.json())
                    .then(campaign => ({ ...donation, campaign }))
                    .catch(() => ({ ...donation, campaign: null }))
            );

            Promise.all(enrichedPromises).then(enriched => {
                setDonations(enriched);
                setLoading(false);
            });
        })
        .catch(err => {
            console.error('Failed to fetch donations:', err);
            setLoading(false);
        });
}, [user]);

    const totalDonated = donations.reduce((sum, d) => sum + d.amount, 0);
    const campaignsSupported = new Set(donations.map(d => d.campaignId)).size;

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">My Donations</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                    Track your contributions and see the impact you've made
                </p>

                <DonationsStats
                    totalDonated={totalDonated}
                    campaignsSupported={campaignsSupported}
                    totalDonations={donations.length}
                />

                {donations.length > 0 ? (
                    <DonationsList donations={donations} />
                ) : (
                    <EmptyDonations />
                )}
            </div>
        </div>
    );
};

export default MyDonations;
