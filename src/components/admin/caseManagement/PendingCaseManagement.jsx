import React from "react";
import { casesData } from "./caseManagementData";

const PendingCaseManagement = () => {
  const pendingCases = casesData.filter(
    (item) => item.status === "Pending"
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

        {/* ACTIVE RED BUTTON */}
        <button className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white shadow-md hover:bg-red-600 transition">
          Pending Cases
        </button>

        <button className="px-4 py-2 text-sm rounded-lg bg-[#1e293b] text-gray-300 hover:bg-[#334155] transition">
          Review Insights
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-[#132a33] rounded-xl p-4 shadow-lg">
        <h2 className="text-sm text-gray-400 mb-3">
          Cases
        </h2>

        <div className="overflow-hidden rounded-lg">
          <table className="w-full text-left">
            {/* Table Head */}
            <thead className="text-gray-400 text-sm border-b border-gray-700">
              <tr>
                <th className="p-3">Case ID</th>
                <th className="p-3">Client Name</th>
                <th className="p-3">Investigation Type</th>
                <th className="p-3">Priority</th>
                <th className="p-3">Status</th>
                <th className="p-3">Detective</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {pendingCases.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-800 hover:bg-[#1e293b] transition"
                >
                  <td className="p-3 font-medium">{item.id}</td>
                  <td className="p-3">{item.client}</td>
                  <td className="p-3">{item.type}</td>

                  {/* Priority Badge */}
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.priority === "High"
                          ? "bg-red-500/20 text-red-400"
                          : item.priority === "Medium"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {item.priority}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="p-3 text-gray-300">{item.status}</td>

                  {/* Detective */}
                  <td className="p-3 text-gray-400">
                    {item.detective || "Unassigned"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingCaseManagement;