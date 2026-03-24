import React from "react";

const StatCard = ({ title, value, subtitle }) => (
  <div className="bg-[#1a1a1a] p-4 rounded-xl flex flex-col justify-between h-24">
    <p className="text-xs text-gray-400">{title}</p>
    <h2 className="text-xl font-semibold text-white">{value}</h2>
    <p className="text-xs text-gray-400">{subtitle}</p>
  </div>
);

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0d0d0d] to-[#0f1a1f] p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold text-white">Admin Dashboard</h1>
          <p className="text-sm text-gray-400">
            Overview of all cases, detectives, and investigations
          </p>
        </div>

        <button className="bg-red px-4 py-2 rounded-lg text-sm text-white mt-3 md:mt-0">
          View All Cases →
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <StatCard title="Total Cases" value="5" subtitle="All time" />
        <StatCard title="Active Investigations" value="2" subtitle="Ongoing" />
        <StatCard title="Pending Detective KYC" value="2" subtitle="Approvals" />
        <StatCard title="Pending Reviews" value="1" subtitle="To review" />
        <StatCard title="Avg Completion" value="2 days" subtitle="Per case" />
        <StatCard title="Closed Cases" value="1" subtitle="Completed" />
      </div>

      {/* MIDDLE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

        {/* CASE STATUS */}
        <div className="lg:col-span-2 bg-[#1a1a1a] p-5 rounded-xl">
          <h2 className="text-white font-semibold mb-2">Case Status Overview</h2>
          <p className="text-xs text-gray-400 mb-4">
            Current distribution of cases across workflow stages
          </p>

          <div className="space-y-3">
            {[
              "New Requests",
              "Assigned",
              "In Progress",
              "Insights Submitted",
              "Changes Requested",
              "Completed",
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-[#111] px-4 py-3 rounded-lg"
              >
                <span className="text-gray-300 text-sm">{item}</span>
                <span className="text-white text-sm">1</span>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-[#1a1a1a] p-5 rounded-xl">
          <h2 className="text-white font-semibold mb-2">Quick Actions</h2>
          <p className="text-xs text-gray-400 mb-4">
            Common administrative tasks
          </p>

          <div className="grid grid-cols-2 gap-3">
            {[
              "Assign Detective",
              "Review Insight",
              "Approve KYC",
              "Create Report",
            ].map((item, i) => (
              <button
                key={i}
                className="bg-[#111] py-3 rounded-lg text-sm text-white hover:bg-[#222]"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* RECENT ACTIVITY */}
        <div className="lg:col-span-2 bg-[#1a1a1a] p-5 rounded-xl">
          <h2 className="text-white font-semibold mb-2">Recent Activity</h2>
          <p className="text-xs text-gray-400 mb-4">
            Latest system updates and actions
          </p>

          <div className="space-y-4 text-sm text-gray-300">
            <p>User Login - Admin Director logged into the system</p>
            <p>System Maintenance completed successfully</p>
            <p>Location Updated - Detective updated location</p>
            <p>Location Updated - Another update</p>
            <p>Report Generated successfully</p>
          </div>
        </div>

        {/* ALERTS */}
        <div className="bg-[#1a1a1a] p-5 rounded-xl">
          <h2 className="text-white font-semibold mb-2">⚠ Priority & Alerts</h2>
          <p className="text-xs text-gray-400 mb-4">
            High priority cases and warnings
          </p>

          <div className="space-y-3">
            {[
              "Corporate Investigation",
              "Asset Recovery",
              "Missing Person",
            ].map((item, i) => (
              <div key={i} className="bg-[#111] p-3 rounded-lg">
                <p className="text-white text-sm">{item}</p>
                <p className="text-xs text-gray-400">Case ID • Assigned</p>
              </div>
            ))}
          </div>

          <button className="mt-4 w-full bg-[#111] py-2 rounded-lg text-sm text-gray-300 hover:bg-[#222]">
            View All Priority Cases
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;