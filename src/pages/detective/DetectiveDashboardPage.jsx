import React, { useState } from 'react';
import { MapPin, Search, Filter, FileText } from 'lucide-react';

const DetectiveDashboardPage = () => {
  const [cases] = useState([
    {
      id: 1,
      title: 'Corporate Embezzlement Investigation',
      description: 'Suspected financial irregularities in company accounts. Need thorough investigation of transactions from the past 6 months.',
      client: 'John Smith',
      status: 'Insights Submitted',
      adminFeedback: 'Admin Feedback',
      feedbackStatus: 'Active',
      progress: 45,
      type: 'urgent'
    },
    {
      id: 2,
      title: 'Asset Recovery Investigation',
      description: 'Locate and recover stolen assets including jewelry and documents. Last known location: downtown warehouse district.',
      client: 'John Smith',
      status: 'Report Ready',
      adminFeedback: '',
      progress: 85,
      type: 'new'
    }
  ]);

  return (
    <div className="bg-[#2a3441] text-white min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#3a4651] rounded-xl p-6">
          <p className="text-gray-300 text-sm mb-2">Total Investigations</p>
          <p className="text-6xl font-bold text-[#dc3545] mb-1">05</p>
        </div>
        <div className="bg-[#3a4651] rounded-xl p-6">
          <p className="text-gray-300 text-sm mb-2">Active Investigation</p>
          <p className="text-6xl font-bold text-[#dc3545] mb-1">02</p>
        </div>
        <div className="bg-[#dc3545] rounded-xl p-6">
          <p className="text-gray-200 text-sm mb-2">Admin Changes requested</p>
          <p className="text-6xl font-bold text-white mb-1">01</p>
          <p className="text-xs text-gray-200">Require resubmission</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-[#3a4651] rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <MapPin size={20} className="text-[#dc3545]" />
          <h2 className="text-lg font-semibold text-white">Current Location</h2>
        </div>
        <p className="text-sm text-gray-300 mb-4">Your real-time location for case tracking</p>
        <div className="w-full h-64 bg-gray-700 rounded-lg overflow-hidden relative">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0060%2C40.7128%2C-73.9352%2C40.7589&layer=mapnik"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            title="Current Location Map"
          />
          <div className="absolute top-4 left-4 bg-white text-black px-2 py-1 rounded text-xs font-medium">
            +
          </div>
          <div className="absolute top-12 left-4 bg-white text-black px-2 py-1 rounded text-xs font-medium">
            -
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-3">Lat: 40.7128 | Lng: -74.0060 | Last updated: 1/1/2025, 10:30:00 AM</p>
      </div>

      {/* Assigned Cases */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Assigned Cases</h2>
            <p className="text-sm text-gray-400">2 cases assigned</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by case number, title, or client name..."
                className="bg-[#3a4651] border-0 rounded-lg py-2 pl-10 pr-4 text-sm w-80 focus:outline-none text-white placeholder:text-gray-400"
              />
            </div>
            <button className="flex items-center gap-2 bg-[#3a4651] rounded-lg px-4 py-2 text-sm text-white">
              <Filter size={16} />
              All Status
            </button>
            <button className="flex items-center gap-2 bg-[#3a4651] rounded-lg px-4 py-2 text-sm text-white">
              <Filter size={16} />
              All Priority
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="bg-[#3a4651] rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold flex-1 text-white pr-4">{caseItem.title}</h3>
                <span className={`px-3 py-1 rounded-md text-xs font-semibold ${
                  caseItem.type === 'urgent' ? 'bg-[#dc3545] text-white' : 'bg-[#dc3545] text-white'
                }`}>
                  {caseItem.type}
                </span>
              </div>
              
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">{caseItem.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Client:</span>
                  <span className="text-white font-medium">{caseItem.client}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-white font-medium">{caseItem.status}</span>
                </div>
                {caseItem.adminFeedback && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{caseItem.adminFeedback}:</span>
                    <span className="text-[#dc3545] font-medium">{caseItem.feedbackStatus}</span>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <div className="w-full h-2 bg-[#2a3441] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#dc3545] rounded-full transition-all duration-300"
                    style={{ width: `${caseItem.progress}%` }}
                  />
                </div>
              </div>

              <button className="w-full bg-[#2a3441] hover:bg-[#1e2329] text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 border border-gray-600">
                <FileText size={16} />
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetectiveDashboardPage;
