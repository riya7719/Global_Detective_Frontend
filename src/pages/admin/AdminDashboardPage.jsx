import React from "react";
import { AiOutlineWarning } from "react-icons/ai";

const StatCard = ({ title, value, subtitle }) => (
  <div className="bg-[#16232d] border border-[#1f2f3a] rounded-xl p-4 flex flex-col gap-1">
    <p className="text-xs text-gray-400">{title}</p>
    <h2 className="text-lg sm:text-xl font-semibold text-white">{value}</h2>
    <p className="text-xs text-gray-500">{subtitle}</p>
  </div>
);

const AdminDashboard = () => {
  return (
    <div className="bg-gradient-to-r from-[#0d0d0d] to-[#0f1a1f] min-h-screen p-4 sm:p-6 text-white">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
            <span className="text-red">▢▢</span> Admin Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-gray-400">
            Overview of all cases, detectives, and investigations
          </p>
        </div>

        <button className="bg-red px-4 py-2 rounded-md text-xs sm:text-sm w-full sm:w-auto">
          View All Cases →
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <StatCard title="Total Cases" value="5" subtitle="All time" />
        <StatCard title="Active Investigations" value="2" subtitle="Currently ongoing" />
        <StatCard title="Pending Detective KYC" value="2" subtitle="Detective approvals" />
        <StatCard title="Pending Reviews" value="1" subtitle="Insights to review" />
        <StatCard title="Avg Completion" value="2 days" subtitle="Per case" />
        <StatCard title="Closed Cases" value="1" subtitle="Completed" />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

        {/* CASE STATUS */}
        <div className="lg:col-span-2 bg-[#16232d] border border-[#1f2f3a] rounded-xl p-5">
          <h2 className="text-sm font-semibold mb-1">Case Status Overview</h2>
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
                className="flex justify-between items-center bg-[#0f1a1f] px-4 py-2 rounded-lg border border-[#1f2f3a]"
              >
                <span className="text-xs sm:text-sm text-gray-300">{item}</span>
                <span className="text-xs sm:text-sm text-white">1</span>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-[#16232d] border border-[#1f2f3a] rounded-xl p-5">
          <h2 className="text-sm font-semibold mb-1">Quick Actions</h2>
          <p className="text-xs text-gray-400 mb-4">
            Common administrative tasks
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Assign Detective",
              "Review Insight",
              "Approve KYC",
              "Create Report",
            ].map((item, i) => (
              <button
                key={i}
                className="bg-[#0f1a1f] border border-[#1f2f3a] py-3 rounded-lg text-xs hover:bg-[#1f2f3a]"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* RECENT ACTIVITY */}
        <div className="lg:col-span-2 bg-[#16232d] border border-[#1f2f3a] rounded-xl p-5">
          <h2 className="text-sm font-semibold mb-1">Recent Activity</h2>
          <p className="text-xs text-gray-400 mb-4">
            Latest system updates and actions
          </p>

          <div className="space-y-4 text-xs">
            {[
              "User Login - Admin Director logged into the system",
              "System Maintenance completed successfully",
              "Location Updated - Detective updated location",
              "Location Updated - Another update",
              "Report Generated successfully",
            ].map((item, i) => (
              <div key={i} className="border-b border-[#1f2f3a] pb-2">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ALERTS */}
        <div className="bg-[#16232d] border border-[#1f2f3a] rounded-xl p-5">
          <h2 className="text-sm font-semibold flex items-center gap-2 mb-1">
            <AiOutlineWarning className="text-yellow-500" />
            Priority & Alerts
          </h2>

          <p className="text-xs text-gray-400 mb-4">
            High priority cases and warnings
          </p>

          <div className="space-y-3">
            {[
              "Corporate Embezzlement Investigation",
              "Asset Recovery Investigation",
              "Missing Person Investigation",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#0f1a1f] border border-[#1f2f3a] p-3 rounded-lg"
              >
                <p className="text-xs">{item}</p>
                <p className="text-[10px] text-gray-500">Case ID • Assigned</p>
              </div>
            ))}
          </div>

          <button className="mt-4 w-full bg-[#0f1a1f] border border-[#1f2f3a] py-2 rounded text-xs hover:bg-[#1f2f3a]">
            View All Priority Cases
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;