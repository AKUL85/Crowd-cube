import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { step: "1", title: "Create Your Campaign", icon: "🚀", description: "Share your story, set your goal, and launch your campaign." },
  { step: "2", title: "Share & Promote", icon: "📢", description: "Spread the word through social media and networks." },
  { step: "3", title: "Receive Support", icon: "💰", description: "Reach your funding goals with community support." }
];

const HowItWorks = () => (
  <section className="py-16 bg-white dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">How Crowdcube Works</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Simple steps to launch your campaign or support others
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((item, index) => (
          <motion.div key={item.step} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.2, duration: 0.6 }} viewport={{ once: true }} className="text-center p-8 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <div className="text-6xl mb-4">{item.icon}</div>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">{item.step}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
