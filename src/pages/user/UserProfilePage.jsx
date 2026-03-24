import React, { useState } from 'react';
import { Mail, Phone, User as UserIcon } from 'lucide-react';

const UserProfilePage = () => {
  const [formData, setFormData] = useState({
    fullName: 'Sarah Johnson',
    email: 'sarah@email.com',
    phone: '+1-555-0102',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Profile</h1>
        <p className="text-gray-400 mb-8">Manage your account information</p>

        <div className="bg-[#111827] rounded-2xl p-8 border border-white/10">
          {/* Profile Avatar Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12 pb-12 border-b border-white/10">
            <div className="w-24 h-24 bg-gradient-to-br from-[#D92B3A] to-[#a0202a] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-4xl font-bold text-white">S</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-1">{formData.fullName}</h2>
              <p className="text-gray-400">User</p>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-[#D92B3A] hover:bg-[#b0202a] text-white px-6 py-2 rounded-xl font-medium transition-all"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {/* Personal Information Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-8">Personal information</h3>
            <p className="text-gray-400 text-sm mb-6">Update your personal details</p>

            <div className="space-y-6">
              {/* Full Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Full Name</label>
                  <div className="flex items-center gap-3 bg-[#0b1120] border border-white/10 rounded-xl px-4 py-3">
                    <UserIcon size={20} className="text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="flex-1 bg-transparent text-white focus:outline-none disabled:text-gray-400"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email Address</label>
                  <div className="flex items-center gap-3 bg-[#0b1120] border border-white/10 rounded-xl px-4 py-3">
                    <Mail size={20} className="text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="flex-1 bg-transparent text-white focus:outline-none disabled:text-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                <div className="flex items-center gap-3 bg-[#0b1120] border border-white/10 rounded-xl px-4 py-3">
                  <Phone size={20} className="text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="flex-1 bg-transparent text-white focus:outline-none disabled:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Account Information Section */}
          <div className="mb-8 pb-8 border-b border-white/10">
            <h3 className="text-xl font-bold text-white mb-8">Account information</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#0b1120] rounded-xl border border-white/10">
                <div>
                  <p className="text-gray-400 text-sm">Account ID</p>
                  <p className="text-white font-semibold">user-2</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#0b1120] rounded-xl border border-white/10">
                <div>
                  <p className="text-gray-400 text-sm">Role</p>
                  <p className="text-white font-semibold">User</p>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          {isEditing && (
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-8 py-3 rounded-xl border border-white/20 font-medium hover:bg-white/5 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="px-8 py-3 rounded-xl bg-[#D92B3A] hover:bg-[#b0202a] text-white font-medium transition-all"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;