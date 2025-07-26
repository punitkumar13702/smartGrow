import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Initialize user from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('smartGrowUser');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('smartGrowUser');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password, userType = 'user') => {
    try {
      // Simulate API call
      const userData = {
        id: Date.now(),
        email,
        name: email.split('@')[0], // Extract name from email for demo
        userType, // 'user' or 'farmer'
        avatar: email.charAt(0).toUpperCase(),
        createdAt: new Date().toISOString()
      };

      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('smartGrowUser', JSON.stringify(userData));
      
      return { success: true, user: userData };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signup = async (name, email, password, userType = 'user') => {
    try {
      // Simulate API call
      const userData = {
        id: Date.now(),
        name,
        email,
        userType, // 'user' or 'farmer'
        avatar: name.charAt(0).toUpperCase(),
        createdAt: new Date().toISOString()
      };

      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('smartGrowUser', JSON.stringify(userData));
      
      return { success: true, user: userData };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('smartGrowUser');
  };

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('smartGrowUser', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    signup,
    logout,
    updateUser,
    isFarmer: user?.userType === 'farmer',
    isUser: user?.userType === 'user'
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};