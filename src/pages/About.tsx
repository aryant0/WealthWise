import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Award } from 'lucide-react';

export const About = () => {
  const stats = [
    { icon: <Users className="h-10 w-10 text-purple-500" />, value: "100,000+", label: "Active Users" },
    { icon: <Target className="h-10 w-10 text-purple-500" />, value: "$500M+", label: "Tracked Assets" },
    { icon: <Heart className="h-10 w-10 text-purple-500" />, value: "98%", label: "Customer Satisfaction" },
    { icon: <Award className="h-10 w-10 text-purple-500" />, value: "15+", label: "Industry Awards" }
  ];

  const team = [
    {
      name: "Aryan Thakur",
      role: "CEO & Founder",
      image: "https://img.freepik.com/free-photo/painting-man-s-portrait_23-2151155335.jpg?ga=GA1.1.2057182087.1747745052&semt=ais_hybrid&w=740"
    },
    {
      name: "Tanishq",
      role: "CTO",
      image: "https://img.freepik.com/free-photo/painting-man-s-portrait_23-2151155335.jpg?ga=GA1.1.2057182087.1747745052&semt=ais_hybrid&w=740"
    },
    {
      name: "Manvendra",
      role: "Head of Product",
      image: "https://img.freepik.com/free-photo/painting-man-s-portrait_23-2151155335.jpg?ga=GA1.1.2057182087.1747745052&semt=ais_hybrid&w=740"
    },
    
  ];

  return (
    <div className="pt-24 pb-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            Our Mission is Your Financial Success
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded in 2023, WealthWise is on a mission to make personal finance management accessible, intuitive, and effective for everyone.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-purple-500"
                />
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-purple-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-purple-900 to-pink-900 text-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Trust & Security</h3>
              <p className="text-gray-300">Your financial data security is our top priority. We use bank-level encryption to keep your information safe.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Innovation</h3>
              <p className="text-gray-300">We continuously evolve our platform with cutting-edge technology to provide the best financial tools.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Customer First</h3>
              <p className="text-gray-300">Every feature we build starts with our users' needs. Your success is our success.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};