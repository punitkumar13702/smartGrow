import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Leaf } from 'lucide-react';
import { useUser } from '../context/UserContext';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    userType: 'user'
  });
  const [isLoading, setIsLoading] = useState(false);
  const { login, signup } = useUser();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      let result;
      if (isLogin) {
        result = await login(formData.email, formData.password, formData.userType);
      } else {
        result = await signup(formData.name, formData.email, formData.password, formData.userType);
      }
      
      if (result.success) {
        console.log('Authentication successful:', result.user);
        // Navigation will happen automatically via App.jsx
      } else {
        console.error('Authentication failed:', result.error);
      }
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Demo login functions
  const handleDemoLogin = async (userType) => {
    setIsLoading(true);
    const demoData = {
      user: {
        email: 'homeuser@smartgrow.com',
        name: 'Demo User',
        userType: 'user'
      },
      farmer: {
        email: 'farmer@smartgrow.com', 
        name: 'Demo Farmer',
        userType: 'farmer'
      }
    };

    try {
      const userData = demoData[userType];
      const result = await login(userData.email, 'demo123', userData.userType);
      if (result.success) {
        console.log(`Demo ${userType} login successful`);
      }
    } catch (error) {
      console.error('Demo login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Animated floating elements
  const FloatingLeaf = ({ delay, duration, x, y, rotation }) => (
    <div 
      className="absolute opacity-20"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        transform: `rotate(${rotation}deg)`
      }}
    >
      <Leaf className="w-6 h-6 text-green-400" />
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Custom CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }
          
          @keyframes stem-grow {
            0% { height: 0; }
            100% { height: 200px; }
          }
          
          @keyframes leaf-grow {
            0% { opacity: 0; transform: scale(0); }
            100% { opacity: 1; transform: scale(1); }
          }
          
          @keyframes logo-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes slide-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          .stem-grow {
            animation: stem-grow 3s ease-out forwards;
            height: 200px;
          }
          
          .leaf-grow-1 {
            animation: leaf-grow 1s ease-out 1s forwards;
            opacity: 0;
          }
          
          .leaf-grow-2 {
            animation: leaf-grow 1s ease-out 1.5s forwards;
            opacity: 0;
          }
          
          .leaf-grow-3 {
            animation: leaf-grow 1s ease-out 2s forwards;
            opacity: 0;
          }
          
          .logo-pulse {
            animation: logo-pulse 3s ease-in-out infinite;
          }
          
          .form-field-slide-in {
            animation: slide-in 0.5s ease-out forwards;
          }
        `
      }} />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Growing Plant Animation */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            {/* Stem */}
            <div className="w-2 bg-gradient-to-t from-green-600 to-green-400 rounded-t-full stem-grow"></div>
            
            {/* Leaves */}
            <div className="absolute -top-4 -left-6 leaf-grow-1">
              <Leaf className="w-8 h-8 text-green-500 transform -rotate-45" />
            </div>
            <div className="absolute -top-8 -right-6 leaf-grow-2">
              <Leaf className="w-6 h-6 text-green-400 transform rotate-45" />
            </div>
            <div className="absolute -top-12 -left-4 leaf-grow-3">
              <Leaf className="w-10 h-10 text-green-600 transform -rotate-12" />
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <FloatingLeaf delay={0} duration={6} x={10} y={20} rotation={15} />
        <FloatingLeaf delay={2} duration={8} x={85} y={30} rotation={-25} />
        <FloatingLeaf delay={4} duration={7} x={15} y={70} rotation={45} />
        <FloatingLeaf delay={1} duration={9} x={90} y={15} rotation={-15} />
        <FloatingLeaf delay={3} duration={5} x={75} y={80} rotation={30} />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="#059669" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-2xl mb-4 logo-pulse">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Smart Grow</h1>
            <p className="text-gray-600">Growing Smart, Growing Green</p>
          </div>

          {/* Demo Login Buttons */}
          <div className="mb-6 space-y-3">
            <div className="text-center text-sm text-gray-600 mb-3">Quick Demo Access:</div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleDemoLogin('user')}
                disabled={isLoading}
                className="flex items-center justify-center space-x-2 py-3 px-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all duration-300 disabled:opacity-50"
              >
                <User className="w-4 h-4" />
                <span className="text-sm">Demo User</span>
              </button>
              <button
                onClick={() => handleDemoLogin('farmer')}
                disabled={isLoading}
                className="flex items-center justify-center space-x-2 py-3 px-4 bg-amber-500 text-white rounded-xl font-medium hover:bg-amber-600 transition-all duration-300 disabled:opacity-50"
              >
                <span className="text-sm">🌾</span>
                <span className="text-sm">Demo Farmer</span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-4 text-sm text-gray-500">or continue with</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Auth Form */}
          <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white border-opacity-50">
            {/* Form Toggle */}
            <div className="flex mb-8 bg-gray-100 rounded-2xl p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                  isLogin 
                    ? 'bg-green-500 text-white shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                  !isLogin 
                    ? 'bg-green-500 text-white shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Sign Up
              </button>
            </div>

            <div className="space-y-6">
              {/* Name Field (Sign Up Only) */}
              {!isLogin && (
                <div className="form-field-slide-in">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white bg-opacity-80"
                      placeholder="Enter your full name"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white bg-opacity-80"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white bg-opacity-80"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* User Type (Sign Up Only) */}
              {!isLogin && (
                <div className="form-field-slide-in">
                  <label className="block text-sm font-medium text-gray-700 mb-3">I am a:</label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`relative flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                      formData.userType === 'user' 
                        ? 'border-green-500 bg-green-50 text-green-700' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <input
                        type="radio"
                        name="userType"
                        value="user"
                        checked={formData.userType === 'user'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <User className="w-6 h-6 mx-auto mb-2" />
                        <span className="font-medium">Home User</span>
                      </div>
                    </label>
                    <label className={`relative flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                      formData.userType === 'farmer' 
                        ? 'border-green-500 bg-green-50 text-green-700' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <input
                        type="radio"
                        name="userType"
                        value="farmer"
                        checked={formData.userType === 'farmer'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <Leaf className="w-6 h-6 mx-auto mb-2" />
                        <span className="font-medium">Farmer</span>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105 ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            {/* Additional Links */}
            <div className="mt-6 text-center">
              {isLogin ? (
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-green-600 font-medium hover:text-green-700 transition-colors"
                  >
                    Sign up here
                  </button>
                </p>
              ) : (
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-green-600 font-medium hover:text-green-700 transition-colors"
                  >
                    Sign in here
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;