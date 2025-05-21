import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, PieChart } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 bg-black shadow-lg z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with navigation to home */}
          <button 
            onClick={() => navigate('/Home')} 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 focus:outline-none"
          >
            WealthWise
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/Home" className="text-gray-300 hover:text-purple-500 transition-colors">Home</Link>
            <Link to="/features" className="text-gray-300 hover:text-purple-500 transition-colors">Features</Link>
            <Link to="/pricing" className="text-gray-300 hover:text-purple-500 transition-colors">Pricing</Link>
            <Link to="/about" className="text-gray-300 hover:text-purple-500 transition-colors">About</Link>
            <Link to="/login" className="text-gray-300 hover:text-purple-500 transition-colors">Login</Link>

            <Link
              to="/signup"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-purple-500" />
            ) : (
              <Menu className="h-6 w-6 text-purple-500" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => { 
                  setIsMenuOpen(false);
                  navigate('/expense-tracker'); 
                }}
                className="text-gray-300 hover:text-purple-500 transition-colors flex items-center gap-2"
              >
                <PieChart className="h-4 w-4" />
                Expense Tracker
              </button>
              <Link to="/features" className="text-gray-300 hover:text-purple-500 transition-colors">Features</Link>
              <Link to="/pricing" className="text-gray-300 hover:text-purple-500 transition-colors">Pricing</Link>
              <Link to="/about" className="text-gray-300 hover:text-purple-500 transition-colors">About</Link>
              <Link to="/login" className="text-gray-300 hover:text-purple-500 transition-colors">Login</Link>
              <Link
                to="/signup"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
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
