import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Wallet className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold text-white">WealthWise</span>
            </Link>
            <p className="text-gray-300">
              Your personal finance companion for smarter money management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-300 hover:text-purple-500 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-purple-500 transition-colors">Pricing</Link></li>
              <li><Link to="/security" className="text-gray-300 hover:text-purple-500 transition-colors">Security</Link></li>
              <li><Link to="/roadmap" className="text-gray-300 hover:text-purple-500 transition-colors">Roadmap</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-purple-500 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-purple-500 transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-purple-500 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-purple-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-purple-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-purple-500 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-purple-500 transition-colors">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="text-gray-300 hover:text-purple-500 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} WealthWise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};