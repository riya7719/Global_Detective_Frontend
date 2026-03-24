import React from 'react';
import { Home, User, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../core/constants/routes.constant';

const DetectiveSidbar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: 'Dashboard', route: ROUTES.DETECTIVE_DASHBOARD, active: true },
    { icon: User, label: 'Profile', route: ROUTES.DETECTIVE_PROFILE },
    { icon: Settings, label: 'Settings', route: ROUTES.DETECTIVE_SETTING },
  ];

  return (
    <div className="w-64 bg-[#2a3441] text-white min-h-screen">
      <div className="p-6">
        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.route)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                item.active 
                  ? 'bg-[#dc3545] text-white' 
                  : 'text-gray-300 hover:bg-[#3a4651] hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Logout */}
        <div className="mt-auto pt-8">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-[#3a4651] hover:text-white rounded-lg transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetectiveSidbar;