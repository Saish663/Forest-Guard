import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, LogIn, UserPlus, LogOut, Home, MapPin, AlertTriangle } from 'lucide-react';
import Login from './Auth/Login';
import Signup from './Auth/Signup';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const switchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const switchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const closeModals = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'text-orange-500' : 'text-gray-300 hover:text-white';
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.332-.441-.616-.952-.86-1.444a9.963 9.963 0 00-.41-.57c-.254-.31-.51-.58-.776-.818z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
              ForestGuard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/') ? 'text-orange-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Home className="mr-2" size={18} /> Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/dashboard') ? 'text-orange-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              <MapPin className="mr-2" size={18} /> Dashboard
            </Link>
            <Link 
              to="/alerts" 
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/alerts') ? 'text-orange-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              <AlertTriangle className="mr-2" size={18} /> Alerts
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {currentUser ? (
              <>
                <span className="text-sm text-gray-300">Welcome, {currentUser.email}</span>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-colors flex items-center"
                >
                  <LogOut className="mr-2" size={18} /> Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => setShowLogin(true)}
                  className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-600 rounded-md hover:bg-gray-800 transition-colors flex items-center"
                >
                  <LogIn className="mr-2" size={18} /> Login
                </button>
                <button 
                  onClick={() => setShowSignup(true)}
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-md hover:from-orange-600 hover:to-red-700 transition-colors flex items-center"
                >
                  <UserPlus className="mr-2" size={18} /> Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg py-4 px-6 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`flex items-center px-3 py-2 text-base font-medium rounded-md ${
                  isActive('/') ? 'text-orange-500' : 'text-gray-300 hover:text-white'
                }`}
                onClick={closeMobileMenu}
              >
                <Home className="mr-3" size={20} /> Home
              </Link>
              <Link 
                to="/dashboard" 
                className={`flex items-center px-3 py-2 text-base font-medium rounded-md ${
                  isActive('/dashboard') ? 'text-orange-500' : 'text-gray-300 hover:text-white'
                }`}
                onClick={closeMobileMenu}
              >
                <MapPin className="mr-3" size={20} /> Dashboard
              </Link>
              <Link 
                to="/alerts" 
                className={`flex items-center px-3 py-2 text-base font-medium rounded-md ${
                  isActive('/alerts') ? 'text-orange-500' : 'text-gray-300 hover:text-white'
                }`}
                onClick={closeMobileMenu}
              >
                <AlertTriangle className="mr-3" size={20} /> Alerts
              </Link>

              {currentUser ? (
                <button 
                  onClick={() => {
                    handleLogout();
                    closeMobileMenu();
                  }}
                  className="w-full mt-4 px-4 py-2 text-base font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <LogOut className="mr-2" size={20} /> Logout
                </button>
              ) : (
                <div className="flex flex-col space-y-3 mt-4">
                  <button 
                    onClick={() => {
                      setShowLogin(true);
                      closeMobileMenu();
                    }}
                    className="w-full px-4 py-2 text-base font-medium text-white bg-transparent border border-gray-600 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center"
                  >
                    <LogIn className="mr-2" size={20} /> Login
                  </button>
                  <button 
                    onClick={() => {
                      setShowSignup(true);
                      closeMobileMenu();
                    }}
                    className="w-full px-4 py-2 text-base font-medium text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-md hover:from-orange-600 hover:to-red-700 transition-colors flex items-center justify-center"
                  >
                    <UserPlus className="mr-2" size={20} /> Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="h-16 md:h-20"></div>

      {/* Auth Modals */}
      {showLogin && (
        <Login 
          onClose={closeModals} 
          onSwitchToSignup={switchToSignup} 
        />
      )}
      
      {showSignup && (
        <Signup 
          onClose={closeModals} 
          onSwitchToLogin={switchToLogin} 
        />
      )}
    </>
  );
};

export default Navigation;
