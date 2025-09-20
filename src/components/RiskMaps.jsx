import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RiskMaps = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  
  // List of Indian states and union territories
  const regions = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    // Union Territories
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ].sort();

  const handleRegionSelect = (e) => {
    setSelectedRegion(e.target.value);
    // Here you can add logic to load the specific risk map for the selected region
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121014] to-[#1A1A1A] pt-32 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10"
      >
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
          Forest Fire Risk Maps
        </h1>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="region-select" className="block text-lg font-medium text-gray-300 mb-2">
              Choose your desired region:
            </label>
            <select
              id="region-select"
              value={selectedRegion}
              onChange={handleRegionSelect}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select a region</option>
              {regions.map((region) => (
                <option key={region} value={region} className="bg-gray-800 text-white">
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RiskMaps;
