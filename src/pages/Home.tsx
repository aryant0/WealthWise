import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  PieChart, 
  Wallet, 
  TrendingUp, 
  Shield, 
  Target,
  ArrowRight,
  PlayCircle
} from 'lucide-react';
import { useDemo } from '../hooks/useDemo';

export const Home = () => {
  const navigate = useNavigate();
  const { startDemoSession } = useDemo();

  const handleDemoClick = async () => {
    await startDemoSession();
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#DDE4DE]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#DDE4DE] to-white overflow-hidden">
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ backgroundImage: 'url(/assets/bg-pattern.svg)', backgroundSize: 'cover' }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 mb-12 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-extrabold text-[#2C5F2D] mb-6 leading-tight">
                Smart Finance <span className="text-[#97BC62]">Management</span> for a Better Future
              </h1>
              <p className="text-lg text-[#2C5F2D] mb-8 leading-relaxed">
                Take control of your finances with WealthWise. Track expenses, manage investments, and achieve your financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  className="bg-[#2C5F2D] text-white px-8 py-3 rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button
                  onClick={handleDemoClick}
                  className="bg-white text-[#2C5F2D] border-2 border-[#2C5F2D] px-8 py-3 rounded-full shadow-md hover:bg-[#97BC62] hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                >
                  <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Try Demo
                </button>
              </div>
            </motion.div>
            
            {/* Image Section */}
            <motion.div 
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://plus.unsplash.com/premium_vector-1728405835283-2abb045e45cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYWx0aHdpc2V8ZW58MHx8MHx8fDA%3D"
                alt="Financial Dashboard"
                className="rounded-lg shadow-2xl border-4 border-[#2C5F2D] hover:shadow-green-500 transition-shadow"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#2C5F2D] mb-4">
              Everything you need to manage your <span className="text-[#97BC62]">finances</span>
            </h2>
            <p className="text-lg text-gray-700">
              Powerful features to help you track, manage, and grow your wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <PieChart className="h-10 w-10 text-[#2C5F2D]" />,
                title: "Expense Tracking",
                description: "Track your spending patterns and categorize expenses automatically."
              },
              {
                icon: <Wallet className="h-10 w-10 text-[#2C5F2D]" />,
                title: "Budget Planning",
                description: "Set and manage budgets with real-time alerts and insights."
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-[#2C5F2D]" />,
                title: "Investment Portfolio",
                description: "Monitor and analyze your investments in real-time."
              },
              {
                icon: <Target className="h-10 w-10 text-[#2C5F2D]" />,
                title: "Financial Goals",
                description: "Set and track your financial goals with milestone tracking."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#DDE4DE] p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#2C5F2D] mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2C5F2D] relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10 bg-no-repeat bg-center"
          style={{ backgroundImage: "url(/assets/cta-bg.svg)" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Ready to take control of your <span className="text-[#DDE4DE]">finances</span>?
            </h2>
            <p className="text-lg text-[#97BC62] mb-8">
              Join thousands of users already managing their money smarter with WealthWise.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center bg-white text-[#2C5F2D] px-8 py-3 rounded-full hover:bg-[#97BC62] hover:text-white transform hover:scale-105 transition-all duration-300"
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
