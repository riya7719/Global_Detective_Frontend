import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { casesData } from "./caseManagementData";

const ReviewInsightsCaseManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: "All Cases", path: "/all-cases" },
    { name: "Pending Cases", path: "/admin-pending-case-management" },
    { name: "Review Insights", path: "/admin-review-insights" },
  ];

  const insightsCases = casesData.filter(
    (item) => item.status === "Insights Submitted"
  );

  return (
    <div className="p-4 sm:p-6 bg-[#0B1220] min-h-screen text-white">

      <div className="mb-5">
        <h1 className="text-xl sm:text-2xl font-semibold">Case Management</h1>
        <p className="text-gray-400 text-sm">Review submitted insights</p>
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

      {/* CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {insightsCases.map((item) => (
          <div key={item.id} className="bg-[#111827] p-4 rounded-xl border border-gray-700">

            <h3 className="font-semibold text-lg mb-2">{item.type}</h3>

            <p className="text-sm text-gray-400">Client: {item.client}</p>
            <p className="text-sm text-gray-500 mb-3">
              Detective: {item.detective || "Unassigned"}
            </p>

            <div className="bg-[#1f2937] p-3 rounded text-sm mb-3">
              {item.insight || "No insights available"}
            </div>

            <div className="flex gap-2 flex-wrap">
              <button className="px-3 py-1 text-sm bg-[#1f2937] rounded">
                View
              </button>

              <button className="px-3 py-1 text-sm bg-[#D92B3A] rounded">
                Generate Report
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewInsightsCaseManagement;