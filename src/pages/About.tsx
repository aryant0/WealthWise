import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Award } from 'lucide-react';

export const About = () => {
  const stats = [
    { icon: <Users className="h-10 w-10 text-[#97BC62]" />, value: "100,000+", label: "Active Users" },
    { icon: <Target className="h-10 w-10 text-[#97BC62]" />, value: "$500M+", label: "Tracked Assets" },
    { icon: <Heart className="h-10 w-10 text-[#97BC62]" />, value: "98%", label: "Customer Satisfaction" },
    { icon: <Award className="h-10 w-10 text-[#97BC62]" />, value: "15+", label: "Industry Awards" }
  ];

  const team = [
    {
      name: "Aryan Thakur",
      role: "CEO & Founder",
      image: "logos/aryan.jpg"
    },
    {
      name: "Arya Thakur",
      role: "CTO",
      image: "https://plus.unsplash.com/premium_photo-1738449261730-2bc6a8ab40b5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Shristy Thakur",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Trilochana Ahuja",
      role: "Head of Design",
      image: "logos/ishh.jpg"
      
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#DDE4DE]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C5F2D] mb-6">
            Our Mission is Your Financial Success
          </h1>
          <p className="text-xl text-[#2C5F2D] max-w-3xl mx-auto">
            Founded in 2023, WealthWise is on a mission to make personal finance management accessible, intuitive, and effective for everyone.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-[#2C5F2D] mb-2">{stat.value}</div>
              <div className="text-[#2C5F2D]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-[#2C5F2D] mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-[#97BC62]"
                />
                <h3 className="text-xl font-semibold text-[#2C5F2D]">{member.name}</h3>
                <p className="text-[#97BC62]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-[#2C5F2D] text-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#97BC62]">Trust & Security</h3>
              <p className="text-[#DDE4DE]">Your financial data security is our top priority. We use bank-level encryption to keep your information safe.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#97BC62]">Innovation</h3>
              <p className="text-[#DDE4DE]">We continuously evolve our platform with cutting-edge technology to provide the best financial tools.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#97BC62]">Customer First</h3>
              <p className="text-[#DDE4DE]">Every feature we build starts with our users' needs. Your success is our success.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
