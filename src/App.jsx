import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import NewNavigation from './components/NewNavigation';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Alerts from './components/Alerts';
import RiskMaps from './components/RiskMaps';

// Layout component for dashboard routes
const DashboardLayout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-b from-[#121014] to-[#1A1A1A] pt-20">
    <div className="container mx-auto px-4 py-8">
      {children}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <NewNavigation />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/dashboard" 
              element={
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              } 
            />
            <Route 
              path="/alerts" 
              element={
                <DashboardLayout>
                  <Alerts />
                </DashboardLayout>
              } 
            />
            <Route 
              path="/risk-maps" 
              element={
                <DashboardLayout>
                  <RiskMaps />
                </DashboardLayout>
              } 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
