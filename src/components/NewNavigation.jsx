import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, LogIn, UserPlus, LogOut, Home, MapPin, AlertTriangle, Flame } from 'lucide-react';
import Login from './Auth/Login';
import Signup from './Auth/Signup';

const NewNavigation = () => {
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
    return location.pathname === path ? 'current' : '';
  };

  return (
    <>
      <nav className={`navbar-top ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Flame className="text-orange-500" size={28} />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
              ForestGuard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              <Home className="mr-2" size={18} /> Home
            </Link>
            <Link to="/dashboard" className={`nav-link ${isActive('/dashboard')}`}>
              <MapPin className="mr-2" size={18} /> Dashboard
            </Link>
            <Link to="/alerts" className={`nav-link ${isActive('/alerts')}`}>
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
                  className="btn btn-outline flex items-center"
                >
                  <LogOut className="mr-2" size={18} /> Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => setShowLogin(true)}
                  className="btn btn-outline flex items-center"
                >
                  <LogIn className="mr-2" size={18} /> Login
                </button>
                <button 
                  onClick={() => setShowSignup(true)}
                  className="btn btn-primary flex items-center"
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
          <div className="md:hidden bg-dark-800/95 backdrop-blur-lg py-4 px-6 absolute top-full left-0 right-0 z-50 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`nav-link-mobile ${isActive('/')}`}
                onClick={closeMobileMenu}
              >
                <Home className="mr-3" size={20} /> Home
              </Link>
              <Link 
                to="/dashboard" 
                className={`nav-link-mobile ${isActive('/dashboard')}`}
                onClick={closeMobileMenu}
              >
                <MapPin className="mr-3" size={20} /> Dashboard
              </Link>
              <Link 
                to="/alerts" 
                className={`nav-link-mobile ${isActive('/alerts')}`}
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
                  className="btn btn-outline w-full justify-center mt-4"
                >
                  <LogOut className="mr-2" size={18} /> Logout
                </button>
              ) : (
                <div className="flex flex-col space-y-3 mt-4">
                  <button 
                    onClick={() => {
                      setShowLogin(true);
                      closeMobileMenu();
                    }}
                    className="btn btn-outline w-full justify-center"
                  >
                    <LogIn className="mr-2" size={18} /> Login
                  </button>
                  <button 
                    onClick={() => {
                      setShowSignup(true);
                      closeMobileMenu();
                    }}
                    className="btn btn-primary w-full justify-center"
                  >
                    <UserPlus className="mr-2" size={18} /> Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

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

export default NewNavigation;
