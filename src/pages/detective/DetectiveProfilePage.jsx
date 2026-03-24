import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const DetectiveProfilePage = () => {
  const [profileData] = useState({ 
    firstName: 'Emma',
    lastName: 'Watson',
    email: 'ewatson@detectiveagency.com',
    phone: '+1 90002 22202',
    fullName: 'Detective Emma Watson',
    specialization: 'Corporate Fraud',
    role: 'Detective',
    status: 'On Case',
    accountId: 'det-1',
    activeCases: 2,
    location: {
      address: '123 Wall Street, New York, NY',
      lat: 40.7728,
      lng: -73.9560,
      lastUpdated: '1/3/2026, 10:30:00 AM'
    }
  });

  // const [editMode] = useState(false);
  const [formData] = useState(profileData);

  const initials = `${profileData.firstName[0]}${profileData.lastName[0]}`.toUpperCase();

  return (
    <div className="bg-[#2a3441] text-white min-h-screen">
      {/* Top Navigation */}
      <div className="bg-[#2a3441] border-b border-gray-700 px-8 py-4 flex items-center justify-between">
        <h1 className="text-white text-xl font-semibold">Profile name</h1>
        <input
          type="text"
          placeholder="Search"
          className="bg-[#3a4651] border-0 rounded-lg py-2 px-4 text-sm w-64 focus:outline-none text-white placeholder:text-gray-400"
        />
      </div>

      {/* Content Area */}
      <div className="p-8">
          {/* Profile Header */}
          <div className="bg-[#3a4651] rounded-xl p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#dc3545] to-[#bb2d3b] flex items-center justify-center text-white text-5xl font-bold flex-shrink-0">
                {initials}
              </div>
              <div className="flex-1 py-4">
                <h2 className="text-2xl font-semibold text-white mb-1">
                  {profileData.fullName}
                </h2>
                <p className="text-gray-400 mb-4">{profileData.email}</p>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-[#1f2937] text-gray-300 text-sm rounded">
                    {profileData.role}
                  </span>
                  <span className="px-3 py-1 bg-[#dc3545] text-white text-sm rounded font-medium">
                    {profileData.status}
                  </span>
                </div>
              </div>
              <button className="bg-[#dc3545] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#bb2d3b] transition">
                Save Changes
              </button>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-[#3a4651] rounded-xl p-8 mb-8">
            <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
            <p className="text-gray-400 text-sm mb-6">Update your personal details</p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Full Name</label>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-lg">👤</span>
                  <span>{formData.fullName}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Email Address</label>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-lg">📧</span>
                  <span>{formData.email}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Phone Number</label>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-lg">📞</span>
                  <span>{formData.phone}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Specialization</label>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-lg">🎯</span>
                  <span>{formData.specialization}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Current Location */}
          <div className="bg-[#3a4651] rounded-xl p-8 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={20} className="text-[#dc3545]" />
              <h3 className="text-lg font-semibold text-white">Current Location</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">Your last known location</p>
            
            <div className="mb-4">
              <div className="flex items-center gap-2 text-white mb-4">
                <MapPin size={16} className="text-[#dc3545]" />
                <span>{profileData.location.address}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                <p>Lat: {profileData.location.lat}</p>
                <p>Lng: {profileData.location.lng}</p>
              </div>
              <p className="text-xs text-gray-500 mt-2">Last updated: {profileData.location.lastUpdated}</p>
            </div>
          </div>

          {/* Account Information */}
          <div className="bg-[#3a4651] rounded-xl p-8">
            <h3 className="text-lg font-semibold text-white mb-6">Account Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Account ID</span>
                <span className="text-white font-medium">{profileData.accountId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Role</span>
                <span className="text-white font-medium">{profileData.role}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Active Cases</span>
                <span className="text-white font-medium">{profileData.activeCases}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default DetectiveProfilePage;