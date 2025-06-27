import React from 'react';
import { Link } from 'react-router-dom';

const ShowCampaign = ({ campaign }) => {
    const { _id, title, description, goal, image, category } = campaign;

    const categoryColors = {
        disaster: 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200',
        education: 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200',
        health: 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200',
        default: 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200',
    };

    const badgeColor = categoryColors[category?.toLowerCase()] || categoryColors.default;

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <div className="h-48 bg-gray-100 dark:bg-gray-800">
                <img
                    src={image || 'https://via.placeholder.com/400x200?text=No+Image'}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6 space-y-4">
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${badgeColor}`}>
                    {category || 'General'}
                </span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {description?.length > 90 ? description.slice(0, 90) + '...' : description}
                </p>
                <div className="flex justify-between items-center pt-2">
                    <span className="text-md font-semibold text-indigo-600 dark:text-indigo-400">
                        🎯 Goal: <span className="font-bold">${goal}</span>
                    </span>
                    <Link
                        to={`/campaign/${_id}`}
                        className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 transition"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShowCampaign;
