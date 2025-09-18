import React from 'react';
import { MapPin, AlertTriangle, Shield, BarChart2 } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Monitor forest fire risks, view real-time alerts, and access important resources to protect our forests.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Alerts</p>
              <h3 className="text-3xl font-bold mt-1">12</h3>
            </div>
            <div className="p-3 rounded-lg bg-red-500/10 text-red-500">
              <AlertTriangle size={24} />
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <p className="text-sm text-green-400">↓ 2% from last week</p>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Monitored Areas</p>
              <h3 className="text-3xl font-bold mt-1">8</h3>
            </div>
            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
              <MapPin size={24} />
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <p className="text-sm text-green-400">↑ 3 new this month</p>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Risk Level</p>
              <h3 className="text-3xl font-bold mt-1">Medium</h3>
            </div>
            <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-500">
              <Shield size={24} />
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <p className="text-sm text-yellow-400">↑ Increased from Low</p>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Prevention Score</p>
              <h3 className="text-3xl font-bold mt-1">84%</h3>
            </div>
            <div className="p-3 rounded-lg bg-green-500/10 text-green-500">
              <BarChart2 size={24} />
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <p className="text-sm text-green-400">↑ 5% from last month</p>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Fire Risk Map</h2>
          <select className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
        <div className="h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center">
          <div className="text-center p-8">
            <MapPin size={48} className="mx-auto mb-4 text-gray-600" />
            <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
            <p className="text-gray-400 mb-4">Real-time fire risk visualization will appear here</p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors">
              View Full Screen
            </button>
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
        <h2 className="text-2xl font-semibold mb-6">Recent Alerts</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((alert) => (
            <div key={alert} className="flex items-start p-4 bg-gray-900/30 rounded-lg hover:bg-gray-800/50 transition-colors">
              <div className="p-2 rounded-lg bg-red-500/10 text-red-500 mr-4">
                <AlertTriangle size={20} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium">High fire risk detected</h4>
                  <span className="text-sm text-gray-400">2 hours ago</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">Northern region shows increased temperature and dryness levels.</p>
                <div className="flex items-center mt-2 text-sm">
                  <span className="text-red-400 font-medium">High Risk</span>
                  <span className="mx-2 text-gray-600">•</span>
                  <span className="text-gray-400">Location: Northern Forest</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="text-orange-500 hover:text-orange-400 text-sm font-medium">
            View All Alerts →
          </button>
        </div>
      </div>
    </div>
  );
}
