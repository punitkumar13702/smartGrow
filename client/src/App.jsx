// src/App.jsx - Fixed version without missing imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, useUser } from './context/UserContext';
import { AppProvider } from './context/AppContext';

// Auth Components
import AuthPage from './pages/AuthPage';

// Layout Components
import Layout from './components/layout/Layout';
import FarmerSidebar from './components/layout/FarmerSidebar';

// Shared Pages
import Dashboard from './pages/Dashboard';
import Garden from './pages/Garden';
import PlantoAI from './pages/PlantoAI';
import GrowwMart from './pages/GrowwMart';
import Settings from './pages/Settings';

// Farmer-only Pages
import Marketplace from './pages/Marketplace';
import Analytics from './pages/Analytics';

// Loading Component
const LoadingScreen = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 mx-auto animate-pulse">
        <span className="text-2xl">🌱</span>
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Smart Grow</h2>
      <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
    </div>
  </div>
);

// Farmer Layout Component (using FarmerSidebar with existing Layout structure)
const FarmerLayout = ({ children }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  React.useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/Background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="customPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="#065f46" opacity="0.3"/>
              <path d="M15 30 Q30 15, 45 30 Q30 45, 15 30" stroke="#064e3b" strokeWidth="1" fill="none" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#customPattern)" />
        </svg>
      </div>

      <div className="relative z-10 flex h-full">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <FarmerSidebar />
        </div>

        {/* Mobile Sidebar Overlay */}
        {isMobile && (
          <>
            <div 
              className={`fixed inset-0 bg-black transition-opacity duration-300 ease-out z-40 ${
                sidebarOpen ? 'opacity-60' : 'opacity-0 pointer-events-none'
              }`}
              onClick={() => setSidebarOpen(false)}
            />
            
            <div className={`fixed inset-x-0 top-0 z-50 transform transition-transform duration-400 ease-out ${
              sidebarOpen ? 'translate-y-0' : '-translate-y-full'
            }`}>
              <div 
                className="shadow-2xl backdrop-blur-md"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(6, 77, 32, 0.7) 0%,
                    rgba(3, 45, 18, 0.6) 50%,
                    rgba(4, 45, 19, 0.5) 100%)`,
                  transition: 'background 0.3s ease'
                }}
              >
                <FarmerSidebar 
                  isMobile={true} 
                  onClose={() => setSidebarOpen(false)} 
                />
              </div>
            </div>
          </>
        )}

        {/* Main Content */}
        <div 
          className="flex-1 flex flex-col overflow-hidden"
          style={{
            backgroundColor: 'rgba(230, 245, 203, 0.7)',
          }}
        >
          {/* Mobile Header Bar */}
          {isMobile && (
            <div 
              className={`flex-shrink-0 flex items-center justify-between m-4 mb-0 rounded-2xl p-4 shadow-xl backdrop-blur-md border border-white border-opacity-40 transition-all duration-300 ${
                sidebarOpen ? 'opacity-90' : 'opacity-100'
              }`}
              style={{
                background: `linear-gradient(135deg, 
                  rgba(34, 197, 94, ${sidebarOpen ? '0.65' : '0.3'}) 0%,
                  rgba(22, 163, 74, ${sidebarOpen ? '0.70' : '0.2'}) 100%)`,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                transition: 'background 0.3s ease, opacity 0.3s ease'
              }}
            >
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-3 rounded-2xl bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-300 shadow-lg border border-white border-opacity-30 hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-400 rounded-full flex items-center justify-center shadow-xl border-2 border-white ring-2 ring-white ring-opacity-20">
                <span className="text-white font-bold text-lg">🌾</span>
              </div>
            </div>
          )}

          <div className={`flex-1 overflow-y-auto ${isMobile ? 'p-4 pt-4' : 'p-6'}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Content Component
const AppContent = () => {
  const { isAuthenticated, loading, user } = useUser();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    return <AuthPage />;
  }

  // Choose layout based on user type
  const LayoutComponent = user?.userType === 'farmer' ? FarmerLayout : Layout;

  return (
    <AppProvider>
      <LayoutComponent>
        <Routes>
          {/* Shared Routes */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/planto-ai" element={<PlantoAI />} />
          <Route path="/growwmart" element={<GrowwMart />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Farmer-only Routes */}
          {user?.userType === 'farmer' && (
            <>
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/analytics" element={<Analytics />} />
            </>
          )}
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </LayoutComponent>
    </AppProvider>
  );
};

// Root App Component
function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <AppContent />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;