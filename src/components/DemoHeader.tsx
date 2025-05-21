import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDemo } from "../hooks/useDemo";
import { X } from "lucide-react";

export const DemoHeader = () => {
  const navigate = useNavigate();
  const { endDemoSession } = useDemo();

  const handleExitDemo = () => {
    endDemoSession();
    navigate("/");
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can add API call logic here
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      {/* Header Section */}
      <div className="w-full max-w-2xl bg-gray-900 text-white py-4 px-6 shadow-lg rounded-b-lg flex justify-between items-center">
        <p className="text-sm font-medium text-gray-300">
          You're viewing a demo version. Any changes will be reset when you exit.
        </p>
        <button
          onClick={handleExitDemo}
          className="flex items-center text-sm font-medium text-purple-500 hover:text-purple-400 transition-colors"
        >
          <X className="h-4 w-4 mr-1" />
          Exit Demo
        </button>
      </div>

      {/* Form Section */}
      <div className="bg-gray-800 text-white p-8 mt-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
          Demo Input Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-3 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-3 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-3 w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              placeholder="Write your message"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};