
import React, { useState } from 'react';


interface CreateAccountFormProps {}

const Login: React.FC<CreateAccountFormProps> = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API call)
    console.log({ username, email, password });
  };

  return (
    // Main container styled to mimic the border and background of the image
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-purple-500/50">

        {/* Left Side: Form Section */}
        <div className="w-full lg:w-3/5 p-8 sm:p-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Login into your workspace</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 placeholder-gray-400 text-gray-700"
                required
              />
            </div>
            
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 placeholder-gray-400 text-sm text-gray-500 bg-gray-50"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter a secret password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 placeholder-gray-400 text-gray-700"
                required
              />
              {/* Simple eye icon placeholder */}
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                {/* A simple placeholder for an eye icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition duration-300 shadow-md"
            >
              Login 
            </button>
          </form>
          
          
        </div>

        {/* Right Side: Illustration Section */}
        <div className="hidden lg:block lg:w-2/5 bg-red-500 relative p-12">
          {/* This section mimics the vibrant red background and the white line-art illustration. */}
          {/* For simplicity, we use a block of color. In a real app, an SVG or image would go here. */}
          <div className="absolute inset-0 bg-red-600 opacity-90"></div>
          <div className="relative h-full flex items-center justify-center">
            {/* Placeholder for the complex illustration */}
            <p className="text-white text-center font-serif text-2xl rotate-12 opacity-80 select-none">
                
            </p>
            {/* The line art is too complex to replicate with pure CSS/Tailwind, so this is a textual placeholder. */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;