import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { BookOpen, Code2, Coins, Trophy, Gamepad2, AlignCenterVertical as Certificate, 
         BarChart2, BookMarked, GraduationCap } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Master Web3 & Blockchain
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Your interactive journey into decentralized technologies through gamified learning and hands-on experience
            </p>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course Tracks */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-brown-500/20">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-brown-400" />
              <h2 className="text-xl font-semibold text-white ml-3">Learning Tracks</h2>
            </div>
            <p className="text-purple-200">
              Structured courses on smart contracts, DeFi, NFTs, and more
            </p>
          </div>

          {/* Interactive Coding */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center mb-4">
              <Code2 className="w-8 h-8 text-purple-400" />
              <h2 className="text-xl font-semibold text-white ml-3">Code & Build</h2>
            </div>
            <p className="text-purple-200">
              Practice Solidity and build real blockchain projects
            </p>
          </div>

          {/* Gamification */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center mb-4">
              <Gamepad2 className="w-8 h-8 text-purple-400" />
              <h2 className="text-xl font-semibold text-white ml-3">Learn by Playing</h2>
            </div>
            <p className="text-purple-200">
              Interactive games and simulations for hands-on learning
            </p>
          </div>

          {/* Rewards */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center mb-4">
              <Coins className="w-8 h-8 text-purple-400" />
              <h2 className="text-xl font-semibold text-white ml-3">Earn Rewards</h2>
            </div>
            <p className="text-purple-200">
              Get tokens and NFTs for completing achievements
            </p>
          </div>

          {/* Certifications */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center mb-4">
              <Certificate className="w-8 h-8 text-purple-400" />
              <h2 className="text-xl font-semibold text-white ml-3">Get Certified</h2>
            </div>
            <p className="text-purple-200">
              Earn verifiable on-chain certifications
            </p>
            </div>

          {/* Progress Tracking */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center mb-4">
              <Trophy className="w-8 h-8 text-purple-400" />
              <h2 className="text-xl font-semibold text-white ml-3">Track Progress</h2>
            </div>
            <p className="text-purple-200">
              Monitor your learning journey and achievements
            </p>
          </div>
        </div>

        {/* Featured Course Section */}
        <div className="mt-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-6">Featured Course</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832"
                  alt="Blockchain Course"
                  className="rounded-lg object-cover w-full h-64"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Smart Contract Development
                </h3>
                <p className="text-purple-200 mb-6">
                  Learn to write, test, and deploy smart contracts on Ethereum. Build DApps
                  from scratch and understand blockchain security best practices.
                </p>
                <button 
                  onClick={() => navigate('/create-profile')}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function CreateProfile() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would handle form submission and user creation here
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 py-12 px-4">
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-purple-500/20">
        <h2 className="text-3xl font-bold text-white mb-6">Create Your Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-purple-200">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full rounded-md bg-white/5 border border-purple-500/20 text-white px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md bg-white/5 border border-purple-500/20 text-white px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-purple-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md bg-white/5 border border-purple-500/20 text-white px-4 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Learning Dashboard</h1>
        
        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-200">Courses Completed</p>
                <h3 className="text-2xl font-bold text-white">2/6</h3>
              </div>
              <GraduationCap className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-200">Total XP</p>
                <h3 className="text-2xl font-bold text-white">1,250</h3>
              </div>
              <BarChart2 className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-200">Achievements</p>
                <h3 className="text-2xl font-bold text-white">8</h3>
              </div>
              <Trophy className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Current Courses */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-purple-500/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Current Courses</h2>
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-purple-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BookMarked className="w-6 h-6 text-purple-400 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Smart Contract Development</h3>
                    <p className="text-pink-500">Progress: 60%</p>
                  </div>
                </div>
                <div className="w-24 h-2 bg-purple-900 rounded-full">
                  <div className="w-3/5 h-full bg-purple-400 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-purple-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BookMarked className="w-6 h-6 text-purple-400 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">DeFi Fundamentals</h3>
                    <p className="text-purple-200">Progress: 25%</p>
                  </div>
                </div>
                <div className="w-24 h-2 bg-purple-900 rounded-full">
                  <div className="w-1/4 h-full bg-purple-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-purple-500/20">
              <div className="flex items-center">
                <Trophy className="w-6 h-6 text-yellow-400 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-white">First Smart Contract</h3>
                  <p className="text-purple-200">Deployed your first contract</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-purple-500/20">
              <div className="flex items-center">
                <Trophy className="w-6 h-6 text-yellow-400 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Quick Learner</h3>
                  <p className="text-purple-200">Completed 5 lessons in one day</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-purple-500/20">
              <div className="flex items-center">
                <Trophy className="w-6 h-6 text-yellow-400 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Code Master</h3>
                  <p className="text-purple-200">Solved 10 coding challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;