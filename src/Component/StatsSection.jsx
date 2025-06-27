import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

const stats = [
  { icon: TrendingUp, label: "Campaigns Funded", value: "15,000+", color: "text-blue-600" },
  { icon: Users, label: "Active Supporters", value: "250,000+", color: "text-green-600" },
  { icon: Award, label: "Success Rate", value: "78%", color: "text-purple-600" },
  { icon: Target, label: "Funds Raised", value: "$50M+", color: "text-orange-600" }
];

const StatsSection = () => (
  <section className="py-16 bg-white dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-gray-100 dark:bg-gray-700 rounded-full mb-4`}>
            <stat.icon className="h-8 w-8" />
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{stat.value}</div>
          <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsSection;
