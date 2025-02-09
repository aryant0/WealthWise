import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#2C5F2D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Wallet className="h-8 w-8 text-[#97BC62]" />
              <span className="text-xl font-bold text-white">WealthWise</span>
            </Link>
            <p className="text-[#97BC62]">
              Your personal finance companion for smarter money management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#97BC62] hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#97BC62] hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#97BC62] hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#97BC62] hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-[#97BC62] hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-[#97BC62] hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/security" className="text-[#97BC62] hover:text-white transition-colors">Security</Link></li>
              <li><Link to="/roadmap" className="text-[#97BC62] hover:text-white transition-colors">Roadmap</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[#97BC62] hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-[#97BC62] hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-[#97BC62] hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-[#97BC62] hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-[#97BC62] hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-[#97BC62] hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-[#97BC62] hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="text-[#97BC62] hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#97BC62] mt-12 pt-8">
          <p className="text-center text-[#97BC62]">
            © {new Date().getFullYear()} WealthWise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
