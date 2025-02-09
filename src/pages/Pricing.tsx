import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for getting started",
      features: [
        "Basic expense tracking",
        "Monthly budgeting",
        "Up to 2 financial goals",
        "Basic reports",
        "Mobile app access"
      ]
    },
    {
      name: "Pro",
      price: "9.99",
      description: "For serious personal finance",
      features: [
        "Everything in Free",
        "Unlimited goals",
        "Investment tracking",
        "Advanced analytics",
        "Bill reminders",
        "CSV exports",
        "Priority support"
      ]
    },
    {
      name: "Business",
      price: "24.99",
      description: "For small businesses",
      features: [
        "Everything in Pro",
        "Multiple users",
        "Team collaboration",
        "Custom categories",
        "API access",
        "Dedicated support",
        "Custom reports",
        "White-label options"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#DDE4DE]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C5F2D] mb-6">
            Simple, Transparent <span className="text-[#97BC62]">Pricing</span>
          </h1>
          <p className="text-xl text-[#2C5F2D] max-w-3xl mx-auto">
            Choose the plan that best fits your needs. All plans include our core features with no hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-8 border border-[#97BC62] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                plan.name === "Pro" ? "bg-[#2C5F2D] text-white" : "bg-white text-[#2C5F2D]"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={`text-lg ${plan.name === "Pro" ? "text-[#DDE4DE]" : "text-[#97BC62]"}`}>/month</span>
              </div>
              <p className="mb-6">{plan.description}</p>
              
              {/* CTA Button */}
              <button className={`w-full py-2 px-4 rounded-full transition-colors ${
                plan.name === "Pro" 
                  ? "bg-[#97BC62] text-[#2C5F2D] hover:bg-[#DDE4DE]" 
                  : "bg-[#2C5F2D] text-white hover:bg-[#244822]"
              }`}>
                Get Started
              </button>

              {/* Features List */}
              <ul className="space-y-3 mt-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`flex items-center ${
                    plan.name === "Pro" ? "text-[#DDE4DE]" : "text-[#2C5F2D]"
                  }`}>
                    <Check className={`h-5 w-5 ${
                      plan.name === "Pro" ? "text-[#DDE4DE]" : "text-[#97BC62]"
                    } mr-2`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
