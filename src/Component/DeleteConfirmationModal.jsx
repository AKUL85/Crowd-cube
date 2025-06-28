import React from 'react';
import { motion } from 'framer-motion';

const DeleteConfirmationModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Confirm Delete</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Are you sure you want to delete this campaign? This action cannot be undone.</p>
        <div className="flex space-x-3">
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onClose} className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Cancel</motion.button>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onConfirm} className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Delete</motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default DeleteConfirmationModal;
