import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { casesData } from "./caseManagementData";

const PendingCaseManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: "All Cases", path: "/all-cases" },
    { name: "Pending Cases", path: "/admin-pending-case-management" },
    { name: "Review Insights", path: "/admin-review-insights" },
  ];

  const pendingCases = casesData.filter((item) => item.status === "Pending");

  return (
    <div className="p-4 sm:p-6 bg-[#0B1220] min-h-screen text-white">

      <div className="mb-5">
        <h1 className="text-xl sm:text-2xl font-semibold">Case Management</h1>
        <p className="text-gray-400 text-sm">Pending investigation cases</p>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            className={`px-4 py-2 rounded-md text-sm ${
              location.pathname === tab.path
                ? "bg-[#D92B3A]"
                : "bg-[#111827] text-gray-300"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div className="bg-[#111827] rounded-lg border border-gray-700 overflow-x-auto">
        <div className="min-w-[600px]">

          <div className="grid grid-cols-6 text-gray-400 px-4 py-3 border-b border-gray-700 text-sm">
            <div>ID</div>
            <div>Client</div>
            <div>Type</div>
            <div>Priority</div>
            <div>Status</div>
            <div>Detective</div>
          </div>

          {pendingCases.map((item) => (
            <div key={item.id} className="grid grid-cols-6 px-4 py-3 border-b border-gray-800 text-sm">
              <div>{item.id}</div>
              <div>{item.client}</div>
              <div>{item.type}</div>
              <div>{item.priority}</div>
              <div>{item.status}</div>
              <div>{item.detective || "Unassigned"}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PendingCaseManagement;