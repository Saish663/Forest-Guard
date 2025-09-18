import React, { useState } from 'react';
import { AlertTriangle, Bell, MapPin, Clock, ChevronDown, Search } from 'lucide-react';

const AlertItem = ({ alert, isExpanded, onToggle }) => (
  <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 mb-4 overflow-hidden">
    <div 
      className="p-4 cursor-pointer hover:bg-gray-700/30 transition-colors"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${
            alert.severity === 'High' ? 'bg-red-500/10 text-red-500' :
            alert.severity === 'Medium' ? 'bg-yellow-500/10 text-yellow-500' :
            'bg-blue-500/10 text-blue-500'
          }`}>
            <AlertTriangle size={20} />
          </div>
          <div>
            <h3 className="font-medium text-white">{alert.title}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xs text-gray-400 flex items-center">
                <MapPin size={12} className="mr-1" /> {alert.location}
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-xs text-gray-400 flex items-center">
                <Clock size={12} className="mr-1" /> {alert.time}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            alert.severity === 'High' ? 'bg-red-500/10 text-red-500' :
            alert.severity === 'Medium' ? 'bg-yellow-500/10 text-yellow-500' :
            'bg-blue-500/10 text-blue-500'
          }`}>
            {alert.severity}
          </span>
          <ChevronDown 
            size={20} 
            className={`text-gray-400 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`} 
          />
        </div>
      </div>
    </div>
    
    {isExpanded && (
      <div className="px-4 pb-4 pt-2 bg-gray-900/30 border-t border-gray-800/50">
        <p className="text-sm text-gray-400 mb-4">{alert.description}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Risk: <span className="text-white">{alert.riskLevel}</span>
          </div>
          <button className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg transition-colors">
            View on Map
          </button>
        </div>
      </div>
    )}
  </div>
);

export default function Alerts() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedAlert, setExpandedAlert] = useState(null);

  const alerts = [
    {
      id: 1,
      title: 'High temperature anomaly',
      location: 'Northern Forest',
      time: '2h ago',
      severity: 'High',
      riskLevel: 'Severe',
      description: 'Unusually high temperatures detected. Dry conditions and strong winds are increasing fire risks.'
    },
    {
      id: 2,
      title: 'Unauthorized campfire',
      location: 'West Valley',
      time: '5h ago',
      severity: 'Medium',
      riskLevel: 'Elevated',
      description: 'Satellite imagery shows signs of an unauthorized campfire in a restricted area.'
    },
    {
      id: 3,
      title: 'Lightning strike',
      location: 'Eastern Range',
      time: '1d ago',
      severity: 'Low',
      riskLevel: 'Moderate',
      description: 'Lightning strike detected. No immediate fire detected, but area will be monitored.'
    }
  ];

  const filteredAlerts = alerts.filter(alert => 
    (activeFilter === 'all' || alert.severity.toLowerCase() === activeFilter) &&
    (searchQuery === '' || 
     alert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     alert.location.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Alerts</h1>
          <p className="text-gray-400">Monitor forest fire alerts</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <select 
            className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      {filteredAlerts.length > 0 ? (
        <div className="space-y-4">
          {filteredAlerts.map(alert => (
            <AlertItem 
              key={alert.id}
              alert={alert}
              isExpanded={expandedAlert === alert.id}
              onToggle={() => setExpandedAlert(expandedAlert === alert.id ? null : alert.id)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-800/30 rounded-xl p-12 text-center border border-dashed border-gray-700">
          <div className="mx-auto w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mb-4">
            <Bell size={32} className="text-gray-500" />
          </div>
          <h3 className="text-lg font-medium text-white mb-1">No alerts found</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            {searchQuery || activeFilter !== 'all' 
              ? 'No alerts match your filters.'
              : 'No active alerts at this time.'}
          </p>
          {(searchQuery || activeFilter !== 'all') && (
            <button 
              className="mt-4 text-orange-500 hover:text-orange-400 text-sm font-medium"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
