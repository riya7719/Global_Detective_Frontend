import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const DetectiveNavbar = () => {
  return (
    <nav className="bg-[#2a3441] text-white px-6 py-4 flex items-center justify-between">
      {/* Left - Profile */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
          <User size={20} className="text-white" />
        </div>
        <span className="text-white font-medium">Profile name</span>
      </div>

      {/* Right - Search and Notification */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#3a4651] border-0 rounded-lg py-2 pl-10 pr-4 text-sm w-64 focus:outline-none text-white placeholder:text-gray-400"
          />
        </div>
        <div className="relative">
          <Bell size={20} className="text-white cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
        </div>
      </div>
    </nav>
  );
};

export default DetectiveNavbar;