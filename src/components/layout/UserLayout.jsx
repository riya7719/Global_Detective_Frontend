import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { LayoutGrid, Bell, User, Settings, LogOut, Menu, X } from 'lucide-react';
import GlobalLogo from '../../assets/Global.png';
import { ROUTES } from '../../core/constants/routes.constant';

const UserLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, path: ROUTES.USER_DASHBOARD },
    { id: 'profile', label: 'Profile', icon: User, path: ROUTES.USER_PROFILE },
    { id: 'notifications', label: 'Notifications', icon: Bell, path: ROUTES.USER_NOTIFICATION },
    { id: 'settings', label: 'Settings', icon: Settings, path: ROUTES.USER_SETTINGS },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className="flex h-screen bg-[#0b1120]">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:relative w-64 h-screen bg-[#111827] border-r border-white/10 transform lg:transform-none transition-transform duration-300 z-40 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-8 flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
            <img src={GlobalLogo} alt="Logo" className="w-10 h-10 rounded-full" />
            <div>
              <h1 className="font-bold text-sm tracking-wider uppercase leading-tight text-white">Universal Detective</h1>
              <p className="text-[10px] text-gray-400">PVT LTD</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 space-y-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(item.path);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    active
                      ? 'bg-[#D92B3A] text-white shadow-lg shadow-red/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-red/10 transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Log out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar - Desktop & Mobile */}
        <div className="bg-[#111827] border-b border-white/10 p-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg"
          >
            <Menu size={24} />
          </button>
          <h2 className="text-white font-bold text-lg">Universal Detective</h2>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(ROUTES.USER_NOTIFICATION)}
              className="relative text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-all"
            >
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              onClick={() => navigate(ROUTES.USER_PROFILE)}
              className="flex items-center gap-2 text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-all"
            >
              <User size={20} />
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;