import React from 'react';
import { motion } from 'framer-motion';
import { 
  PieChart, 
  Wallet, 
  TrendingUp, 
  Target, 
  Bell, 
  Shield, 
  Smartphone,
  Cloud
} from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <PieChart className="h-12 w-12 text-purple-500" />,
      title: "Smart Expense Tracking",
      description: "Automatically categorize your transactions and get insights into your spending patterns with AI-powered analysis."
    },
    {
      icon: <Wallet className="h-12 w-12 text-purple-500" />,
      title: "Intelligent Budgeting",
      description: "Set flexible budgets that adapt to your spending habits and receive real-time notifications when you're approaching limits."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-purple-500" />,
      title: "Investment Portfolio",
      description: "Track all your investments in one place with real-time market data and performance analytics."
    },
    {
      icon: <Target className="h-12 w-12 text-purple-500" />,
      title: "Goal Planning",
      description: "Set and track financial goals with smart milestone tracking and automated savings recommendations."
    },
    {
      icon: <Bell className="h-12 w-12 text-purple-500" />,
      title: "Smart Alerts",
      description: "Get personalized notifications about unusual spending, bill payments, and investment opportunities."
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-500" />,
      title: "Bank-Level Security",
      description: "Your data is protected with enterprise-grade encryption and secure authentication protocols."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-purple-500" />,
      title: "Mobile Access",
      description: "Manage your finances on the go with our powerful mobile app for iOS and Android."
    },
    {
      icon: <Cloud className="h-12 w-12 text-purple-500" />,
      title: "Cloud Sync",
      description: "Your financial data is automatically synced across all your devices in real-time."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            Powerful Features for Your <span className="text-white">Financial Success</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            WealthWise combines cutting-edge technology with intuitive design to give you complete control over your financial life.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};