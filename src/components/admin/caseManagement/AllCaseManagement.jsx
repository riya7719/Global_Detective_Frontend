import React from "react";

const AllCaseManagement = () => {
  return (
    <div className="flex min-h-screen bg-[#0B1220] text-white">
      
      {/* Sidebar */}
      <div className="w-[240px] bg-[#0F172A] p-4 hidden md:flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-6">Profile name</h2>

          <div className="space-y-2">
            <div className="px-3 py-2 rounded-lg hover:bg-gray-700 cursor-pointer">
              Dashboard
            </div>
            <div className="px-3 py-2 rounded-lg bg-red-600 cursor-pointer">
              Case Management
            </div>
            <div className="px-3 py-2 rounded-lg hover:bg-gray-700 cursor-pointer">
              User Management
            </div>
            <div className="px-3 py-2 rounded-lg hover:bg-gray-700 cursor-pointer">
              Settings
            </div>
            <div className="px-3 py-2 rounded-lg hover:bg-gray-700 cursor-pointer">
              Help
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <p>Admin</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h1 className="text-2xl font-semibold">Case Management</h1>

          <div className="flex gap-2">
            <button className="bg-red-600 px-4 py-2 rounded-lg text-sm">
              + Add Case
            </button>
            <button className="bg-gray-700 px-4 py-2 rounded-lg text-sm">
              Export
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-[#111827] p-4 rounded-xl mb-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#1F2937] px-3 py-2 rounded-lg w-full"
          />

          <select className="bg-[#1F2937] px-3 py-2 rounded-lg">
            <option>Investigation Type</option>
          </select>

          <select className="bg-[#1F2937] px-3 py-2 rounded-lg">
            <option>Priority</option>
          </select>

          <select className="bg-[#1F2937] px-3 py-2 rounded-lg">
            <option>Case Origin</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-[#111827] rounded-xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#1F2937] text-gray-300">
              <tr>
                <th className="p-3 text-left">Case ID</th>
                <th className="p-3 text-left">Case Name</th>
                <th className="p-3 text-left">Investigation Type</th>
                <th className="p-3 text-left">Priority</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Deadline</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  id: "C001",
                  name: "John Theft Case",
                  type: "Financial",
                  priority: "High",
                  status: "Open",
                  deadline: "12/02/2026",
                },
                {
                  id: "C002",
                  name: "Bank Fraud",
                  type: "Fraud",
                  priority: "Medium",
                  status: "Pending",
                  deadline: "18/02/2026",
                },
                {
                  id: "C003",
                  name: "Cyber Crime",
                  type: "Cyber",
                  priority: "Low",
                  status: "Closed",
                  deadline: "25/02/2026",
                },
              ].map((caseItem, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-[#1F2937]"
                >
                  <td className="p-3">{caseItem.id}</td>
                  <td className="p-3">{caseItem.name}</td>
                  <td className="p-3">{caseItem.type}</td>
                  <td className="p-3">{caseItem.priority}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        caseItem.status === "Open"
                          ? "bg-green-600"
                          : caseItem.status === "Pending"
                          ? "bg-yellow-600"
                          : "bg-gray-600"
                      }`}
                    >
                      {caseItem.status}
                    </span>
                  </td>
                  <td className="p-3">{caseItem.deadline}</td>
                  <td className="p-3">
                    <button className="bg-red-600 px-2 py-1 rounded text-xs">
                      Delete
                    </button>
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

export default AllCaseManagement;