import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#2C5F2D] shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://freesvg.org/img/loup_2012.png" alt="WealthWise Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-white">WealthWise</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-[#97BC62] hover:text-white transition-colors">Features</Link>
            <Link to="/pricing" className="text-[#97BC62] hover:text-white transition-colors">Pricing</Link>
            <Link to="/about" className="text-[#97BC62] hover:text-white transition-colors">About</Link>
            <Link to="/login" className="text-[#97BC62] hover:text-white transition-colors">Login</Link>
            <Link
              to="/signup"
              className="bg-[#97BC62] text-[#2C5F2D] px-6 py-2 rounded-full hover:bg-white transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#97BC62]" />
            ) : (
              <Menu className="h-6 w-6 text-[#97BC62]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-3">
              <Link to="/features" className="text-[#97BC62] hover:text-white transition-colors">Features</Link>
              <Link to="/pricing" className="text-[#97BC62] hover:text-white transition-colors">Pricing</Link>
              <Link to="/about" className="text-[#97BC62] hover:text-white transition-colors">About</Link>
              <Link to="/login" className="text-[#97BC62] hover:text-white transition-colors">Login</Link>
              <Link
                to="/signup"
                className="bg-[#97BC62] text-[#2C5F2D] px-6 py-2 rounded-full hover:bg-white transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

