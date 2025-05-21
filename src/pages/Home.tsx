import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PieChart, Wallet, TrendingUp, Target, ArrowRight, PlayCircle, Shield } from 'lucide-react';
import { useDemo } from '../hooks/useDemo';

export const Home = () => {
  const navigate = useNavigate();
  const { startDemoSession } = useDemo();

  const handleDemoClick = async () => {
    await startDemoSession();
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center">
        {/* Background Video */}
        <motion.video
          src="https://videos.pexels.com/video-files/3752545/3752545-hd_1920_1080_24fps.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content on top of the video */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6 leading-tight">
            Smart Finance <span className="text-white">Management</span> for the Future
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Take control of your finances with WealthWise. Track expenses, manage investments, and achieve your financial goals effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button
              onClick={handleDemoClick}
              className="bg-transparent border-2 border-purple-500 text-purple-500 px-8 py-3 rounded-full shadow-lg hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
            >
              <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Try Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10 bg-no-repeat bg-center"
          style={{ backgroundImage: "url(/assets/cta-bg.svg)" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Everything you need to manage your <span className="text-purple-400">finances</span>
            </h2>
            <p className="text-lg text-gray-300">
              Powerful features to help you track, manage, and grow your wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <PieChart className="h-10 w-10 text-purple-400" />,
                title: "Expense Tracking",
                description: "Track your spending patterns and categorize expenses automatically."
              },
              {
                icon: <Wallet className="h-10 w-10 text-purple-400" />,
                title: "Budget Planning",
                description: "Set and manage budgets with real-time alerts and insights."
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-purple-400" />,
                title: "Investment Portfolio",
                description: "Monitor and analyze your investments in real-time."
              },
              {
                icon: <Target className="h-10 w-10 text-purple-400" />,
                title: "Financial Goals",
                description: "Set and track your financial goals with milestone tracking."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Expense Tracker */}
      <section className="py-20 bg-black relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10 bg-no-repeat bg-center"
          style={{ backgroundImage: "url(/assets/cta-bg.svg)" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Introducing Our New <span className="text-purple-400">Expense Tracker</span>!
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Track your spending in real-time, set budgets, and take control of your finances effortlessly.
            </p>
            <Link
              to="/ET"
              className="inline-flex items-center bg-white text-black px-8 py-3 rounded-full hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Check It Out
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10 bg-no-repeat bg-center"
          style={{ backgroundImage: "url(/assets/cta-bg.svg)" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Ready to take control of your <span className="text-purple-400">finances</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of users already managing their money smarter with WealthWise.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center bg-white text-black px-8 py-3 rounded-full hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
