import React from "react";
import { casesData } from "./caseManagementData";

const ReviewInsightsCaseManagement = () => {
  const insightsCases = casesData.filter(
    (item) => item.status === "Insights Submitted"
  );

  return (
    <div className="p-6 bg-[#0b1c24] min-h-screen text-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Case Management</h1>
        <p className="text-gray-400 text-sm">
          View and manage all investigation cases
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        <button className="px-4 py-2 text-sm rounded-lg bg-[#1e293b] text-gray-300 hover:bg-[#334155] transition">
          All Cases
        </button>

        <button className="px-4 py-2 text-sm rounded-lg bg-[#1e293b] text-gray-300 hover:bg-[#334155] transition">
          Pending Cases
        </button>

        {/* ACTIVE RED BUTTON */}
        <button className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white shadow-md hover:bg-red-600 transition">
          Review Insights
        </button>
      </div>

      {/* Section Title */}
      <h2 className="text-sm text-gray-400 mb-4">
        Cases with Submitted Insights
      </h2>

      {/* Cards */}
      <div className="space-y-4">
        {insightsCases.map((item) => (
          <div
            key={item.id}
            className="bg-[#132a33] p-5 rounded-xl shadow-md"
          >
            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">
              {item.type}
            </h3>

            {/* Info */}
            <p className="text-sm text-gray-300">
              Client: {item.client}
            </p>
            <p className="text-sm text-gray-400 mb-3">
              Detective: {item.detective || "Unassigned"}
            </p>

            {/* Insight Box */}
            <div className="bg-[#1e293b] p-3 rounded-lg text-sm text-gray-300 mb-4">
              {item.insight || "No insights available"}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="px-4 py-2 text-sm rounded-lg bg-[#1e293b] text-gray-300 hover:bg-[#334155] transition">
                View Full Details
              </button>

              <button className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition shadow">
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