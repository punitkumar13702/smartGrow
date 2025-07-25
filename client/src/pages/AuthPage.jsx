import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

// --- ICONS DEFINED OUTSIDE COMPONENT ---
// This prevents recreation on every render and improves performance
const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EyeOffIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

// --- SCREEN COMPONENTS DEFINED OUTSIDE MAIN COMPONENT ---
// This is the KEY FIX for the input focus bug!

const WelcomeScreen = ({ setCurrentStep, handleDemoLogin, isLoading }) => (
  <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 shadow-2xl">
    <div className="text-center space-y-6">
      <div className="space-y-4">
        <div className="inline-flex items-center justify-center">
          <div className="bg-white rounded-full p-3 shadow-2xl w-20 h-20 flex items-center justify-center">
            <img 
              src="/images/LogoSG.png"
              alt="Smart Grow Logo"
              className="object-contain transform hover:scale-105 transition-transform duration-300"
              style={{ 
                width: '60px',         
                height: '36px',        
                objectFit: 'contain'   
              }}
              onError={(e) => {
                console.log('Logo failed to load');
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-16 h-10 items-center justify-center">
              <span className="text-green-600 text-2xl">🌱</span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome to</h1>
          <h2 className="text-2xl font-light text-white opacity-90">SmartGrow</h2>
          <p className="text-white opacity-75 text-base mt-1">Growing Smart, Growing Green</p>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => setCurrentStep('signup')}
          className="w-full bg-white text-green-600 py-3 rounded-2xl font-semibold text-base hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all duration-300 shadow-lg border-2 border-transparent"
        >
          Register
        </button>
        <button
          onClick={() => setCurrentStep('login')}
          className="w-full bg-transparent border-2 border-white text-white py-3 rounded-2xl font-semibold text-base hover:bg-white hover:text-green-600 transition-all duration-300"
        >
          Login
        </button>
      </div>

      <div className="space-y-2">
        <p className="text-white opacity-60 text-sm">Quick Demo Access:</p>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => handleDemoLogin('user')}
            disabled={isLoading}
            className="flex items-center justify-center space-x-1 py-2 px-3 bg-blue-500 bg-opacity-20 border border-blue-300 text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-300 disabled:opacity-50"
          >
            <UserIcon />
            <span className="text-xs">Demo User</span>
          </button>
          <button
            onClick={() => handleDemoLogin('farmer')}
            disabled={isLoading}
            className="flex items-center justify-center space-x-1 py-2 px-3 bg-amber-500 bg-opacity-20 border border-amber-300 text-white rounded-lg font-medium hover:bg-white hover:text-amber-600 transition-all duration-300 disabled:opacity-50"
          >
            <span className="text-xs">🌾</span>
            <span className="text-xs">Demo Farmer</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const LoginScreen = ({ formData, handleInputChange, handleSubmit, setCurrentStep, showPassword, setShowPassword, isLoading }) => (
  <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-5 border border-white border-opacity-20 shadow-2xl">
    <div className="space-y-4">
      {/* Header - More compact */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center">
          <div className="bg-white rounded-full p-2 shadow-xl w-14 h-14 flex items-center justify-center">
            <img 
              src="/images/LogoSG.png"
              alt="Smart Grow Logo"
              className="object-contain"
              style={{ 
                width: '42px',         
                height: '24px',        
                objectFit: 'contain'   
              }}
              onError={(e) => {
                console.log('Logo failed to load');
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-10 h-6 items-center justify-center">
              <span className="text-green-600 text-sm">🌱</span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">Welcome back</h1>
          <p className="text-white opacity-75 text-xs">Let's get back to growing your SmartGrow plants</p>
        </div>
      </div>

      {/* Form - More compact */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Email */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-60">
            <MailIcon />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-10 pr-3 py-2.5 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm"
            placeholder="Email Address"
            required
          />
        </div>

        {/* Password */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-60">
            <LockIcon />
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full pl-10 pr-10 py-2.5 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm"
            placeholder="Password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white opacity-60 hover:opacity-80 transition-opacity"
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>

        {/* Social Login - More compact */}
        <div className="space-y-2">
          <div className="text-center text-white opacity-60 text-xs">Or login using</div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className="flex items-center justify-center space-x-1 py-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white hover:bg-white hover:text-gray-800 transition-all duration-300 text-xs"
            >
              <GithubIcon />
              <span>GitHub</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center space-x-1 py-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white hover:bg-white hover:text-gray-800 transition-all duration-300 text-xs"
            >
              <GoogleIcon />
              <span>Google</span>
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-white text-green-600 py-2.5 rounded-xl font-semibold text-sm hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all duration-300 shadow-lg border-2 border-transparent disabled:opacity-70"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          ) : (
            'Login'
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="text-center">
        <p className="text-white opacity-60 text-xs">
          New here?{' '}
          <button
            onClick={() => setCurrentStep('signup')}
            className="text-white font-semibold hover:opacity-80 transition-opacity underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  </div>
);

const SignupScreen = ({ formData, handleInputChange, setCurrentStep, showPassword, setShowPassword }) => (
  <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-5 border border-white border-opacity-20 shadow-2xl">
    <div className="space-y-4">
      {/* Header - More compact */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center">
          <div className="bg-white rounded-full p-2 shadow-xl w-14 h-14 flex items-center justify-center">
            <img 
              src="/images/LogoSG.png"
              alt="Smart Grow Logo"
              className="object-contain"
              style={{ 
                width: '42px',         
                height: '24px',        
                objectFit: 'contain'   
              }}
              onError={(e) => {
                console.log('Logo failed to load');
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-10 h-6 items-center justify-center">
              <span className="text-green-600 text-sm">🌱</span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">Register on</h1>
          <h2 className="text-lg font-light text-white opacity-90">SmartGrow</h2>
          <p className="text-white opacity-75 text-xs mt-1">Create an SmartGrow account. We can't wait to have you.</p>
        </div>
      </div>

      {/* Form - More compact */}
      <form onSubmit={(e) => { e.preventDefault(); setCurrentStep('usertype'); }} className="space-y-3">
        {/* Name */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-60">
            <UserIcon />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full pl-10 pr-3 py-2.5 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm"
            placeholder="Name"
            required
          />
        </div>

        {/* Email */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-60">
            <MailIcon />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-10 pr-3 py-2.5 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm"
            placeholder="Email Address"
            required
          />
        </div>

        {/* Password */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-60">
            <LockIcon />
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full pl-10 pr-10 py-2.5 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm"
            placeholder="Password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white opacity-60 hover:opacity-80 transition-opacity"
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>

        {/* Social Signup - More compact */}
        <div className="space-y-2">
          <div className="text-center text-white opacity-60 text-xs">Or Register using</div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className="flex items-center justify-center space-x-1 py-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white hover:bg-white hover:text-gray-800 transition-all duration-300 text-xs"
            >
              <GithubIcon />
              <span>GitHub</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center space-x-1 py-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white hover:bg-white hover:text-gray-800 transition-all duration-300 text-xs"
            >
              <GoogleIcon />
              <span>Google</span>
            </button>
          </div>
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="w-full bg-white text-green-600 py-2.5 rounded-xl font-semibold text-sm hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all duration-300 shadow-lg border-2 border-transparent flex items-center justify-center space-x-2"
        >
          <span>Continue</span>
          <ArrowRightIcon />
        </button>
      </form>

      {/* Footer */}
      <div className="text-center">
        <p className="text-white opacity-60 text-xs">
          Already have an account?{' '}
          <button
            onClick={() => setCurrentStep('login')}
            className="text-white font-semibold hover:opacity-80 transition-opacity underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  </div>
);

const UserTypeScreen = ({ formData, handleInputChange, handleSubmit, isLoading }) => (
  <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-5 border border-white border-opacity-20 shadow-2xl">
    <div className="space-y-4 animate-slide-in">
      {/* Header - More compact */}
      <div className="text-center space-y-2">
        <div>
          <h1 className="text-xl font-bold text-white">Let's personalize your</h1>
          <h2 className="text-lg font-light text-white opacity-90">experience</h2>
          <p className="text-white opacity-75 text-xs mt-1">What should we call you?</p>
        </div>
      </div>

      {/* User Type Selection */}
      <div className="space-y-3">
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-60">
            <UserIcon />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full pl-10 pr-3 py-2.5 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm"
            placeholder="Name"
            required
          />
        </div>

        <div className="space-y-2">
          <label className={`relative flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
            formData.userType === 'user' 
              ? 'border-white bg-white bg-opacity-20 backdrop-blur-sm' 
              : 'border-white border-opacity-30 hover:border-opacity-50'
          }`}>
            <input
              type="radio"
              name="userType"
              value="user"
              checked={formData.userType === 'user'}
              onChange={handleInputChange}
              className="sr-only"
            />
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <UserIcon />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Home User</div>
                <div className="text-white opacity-60 text-xs">Perfect for home gardening enthusiasts</div>
              </div>
            </div>
            {formData.userType === 'user' && (
              <div className="absolute right-3 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
            )}
          </label>

          <label className={`relative flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
            formData.userType === 'farmer' 
              ? 'border-white bg-white bg-opacity-20 backdrop-blur-sm' 
              : 'border-white border-opacity-30 hover:border-opacity-50'
          }`}>
            <input
              type="radio"
              name="userType"
              value="farmer"
              checked={formData.userType === 'farmer'}
              onChange={handleInputChange}
              className="sr-only"
            />
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-sm">🌾</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Farmer</div>
                <div className="text-white opacity-60 text-xs">Professional farming and marketplace access</div>
              </div>
            </div>
            {formData.userType === 'farmer' && (
              <div className="absolute right-3 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
            )}
          </label>
        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-white text-green-600 py-2.5 rounded-xl font-semibold text-sm hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all duration-300 shadow-lg border-2 border-transparent disabled:opacity-70"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          ) : (
            'Continue'
          )}
        </button>
      </div>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
const AuthPage = () => {
  const [currentStep, setCurrentStep] = useState('welcome');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    userType: 'user'
  });
  const [isLoading, setIsLoading] = useState(false);
  const { login, signup } = useUser();

  // Simple input handler - no useCallback needed since components are outside
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      let result;
      if (currentStep === 'login') {
        result = await login(formData.email, formData.password, formData.userType);
      } else {
        result = await signup(formData.name, formData.email, formData.password, formData.userType);
      }
      
      if (result.success) {
        console.log('Authentication successful:', result.user);
      } else {
        console.error('Authentication failed:', result.error);
      }
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setIsLoading(false);
    }
  };

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

  return (
    <div className="h-screen overflow-hidden relative">
      {/* Custom CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slide-in {
            0% { opacity: 0; transform: translateX(30px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          
          .animate-slide-in {
            animation: slide-in 0.6s ease-out;
          }
        `
      }} />

      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/Background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay Pattern for extra texture */}
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

      {/* Adjustable Green overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, rgba(34, 197, 94, 0.7) 0%, rgba(22, 163, 74, 0.65) 35%, rgba(21, 128, 61, 0.6) 70%, rgba(22, 101, 52, 0.7) 100%)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          
          {/* Back Button */}
          {currentStep !== 'welcome' && (
            <button
              onClick={() => {
                if (currentStep === 'usertype') setCurrentStep('signup');
                else setCurrentStep('welcome');
              }}
              className="mb-3 flex items-center space-x-2 text-white opacity-60 hover:opacity-80 transition-opacity"
            >
              <ArrowLeftIcon />
              <span>Back</span>
            </button>
          )}

          {/* Dynamic Content - Components defined outside prevent input focus loss */}
          {currentStep === 'welcome' && (
            <WelcomeScreen 
              setCurrentStep={setCurrentStep}
              handleDemoLogin={handleDemoLogin}
              isLoading={isLoading}
            />
          )}
          {currentStep === 'login' && (
            <LoginScreen
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              setCurrentStep={setCurrentStep}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              isLoading={isLoading}
            />
          )}
          {currentStep === 'signup' && (
            <SignupScreen 
              formData={formData}
              handleInputChange={handleInputChange}
              setCurrentStep={setCurrentStep}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}
          {currentStep === 'usertype' && (
            <UserTypeScreen
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;