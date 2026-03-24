import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { casesData } from "./caseManagementData";
import { Eye } from "lucide-react";

const AllCaseManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: "All Cases", path: "/all-cases" },
    { name: "Pending Cases", path: "/admin-pending-case-management" },
    { name: "Review Insights", path: "/admin-review-insights" },
  ];

  return (
    <div className="p-4 sm:p-6 bg-[#0B1220] min-h-screen text-white">

      {/* HEADER */}
      <div className="mb-5">
        <h1 className="text-xl sm:text-2xl font-semibold">📄 Case Management</h1>
        <p className="text-gray-400 text-sm">View and manage all investigation cases</p>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            className={`px-4 py-2 rounded-md text-sm transition ${
              location.pathname === tab.path
                ? "bg-[#D92B3A] text-white"
                : "bg-[#111827] text-gray-300 hover:bg-[#1f2937]"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* FILTER */}
      <div className="bg-[#111827] p-4 rounded-lg mb-4 border border-gray-700">
        <input
          type="text"
          placeholder="Search cases..."
          className="w-full mb-3 p-2 rounded bg-[#0B1220] border border-gray-700 text-sm"
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <select className="p-2 rounded bg-[#0B1220] border border-gray-700 text-sm"><option>All Status</option></select>
          <select className="p-2 rounded bg-[#0B1220] border border-gray-700 text-sm"><option>All Types</option></select>
          <select className="p-2 rounded bg-[#0B1220] border border-gray-700 text-sm"><option>All Priorities</option></select>
          <select className="p-2 rounded bg-[#0B1220] border border-gray-700 text-sm"><option>All Time</option></select>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-[#111827] rounded-lg border border-gray-700 overflow-x-auto">
        <div className="min-w-[700px]">

          <div className="grid grid-cols-7 text-gray-400 px-4 py-3 border-b border-gray-700 text-sm">
            <div>Case ID</div>
            <div>Client</div>
            <div>Type</div>
            <div>Priority</div>
            <div>Status</div>
            <div>Detective</div>
            <div>Action</div>
          </div>

          {casesData.map((item) => (
            <div key={item.id} className="grid grid-cols-7 px-4 py-3 border-b border-gray-800 text-sm hover:bg-[#1f2937]">

              <div>
                <p>{item.id}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>

              <div>{item.client}</div>
              <div>{item.type}</div>

              <div><span className="px-2 py-1 text-xs bg-orange-500 rounded">{item.priority}</span></div>
              <div><span className="px-2 py-1 text-xs bg-blue-500 rounded">{item.status}</span></div>

              <div>{item.detective || "Unassigned"}</div>

              <div>
                <button className="p-2 border border-gray-700 rounded hover:bg-[#1f2937]">
                  <Eye size={16} />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCaseManagement;