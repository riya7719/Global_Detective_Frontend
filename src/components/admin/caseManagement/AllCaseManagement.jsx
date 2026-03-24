import React from "react";
import { useNavigate } from "react-router-dom";
import { casesData } from "./caseManagementData";
import { Eye } from "lucide-react";

const AllCaseManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white bg-[#0B1220] min-h-screen">

      {/* HEADER */}
      <div className="mb-4">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          📄 Case Management
        </h1>
        <p className="text-gray-400 text-sm">
          View and manage all investigation cases
        </p>
      </div>

      {/* TABS */}
      <div className="flex gap-2 mb-4">
        <button
          className="px-4 py-2 rounded-md bg-[#D92B3A] text-white text-sm"
          onClick={() => navigate("/all-cases")}
        >
          All Cases
        </button>

        <button
          className="px-4 py-2 rounded-md bg-[#111827] text-gray-300 text-sm"
          onClick={() => navigate("/pending-cases")}
        >
          Pending Cases
        </button>

        <button
          className="px-4 py-2 rounded-md bg-[#111827] text-gray-300 text-sm"
          onClick={() => navigate("/review-insights")}
        >
          Review Insights
        </button>
      </div>

      {/* FILTER BAR */}
      <div className="bg-[#111827] p-4 rounded-lg mb-4 border border-gray-700">
        <input
          type="text"
          placeholder="Search by case number, title, client name, or investigation type..."
          className="w-full mb-3 p-2 rounded bg-[#0B1220] border border-gray-700 text-sm"
        />

        <div className="grid grid-cols-4 gap-3">
          <select className="p-2 rounded bg-[#0B1220] border border-gray-700 text-sm">
            <option>All Status</option>
          </select>

          <select className="p-2 rounded bg-[#0B1220] border border-gray-700 text-sm">
            <option>All Types</option>
          </select>

          <select className="p-2 rounded bg-[#0B1220] border border-gray-700 text-sm">
            <option>All Priorities</option>
          </select>

          <select className="p-2 rounded bg-[#0B1220] border border-gray-700 text-sm">
            <option>All Time</option>
          </select>
        </div>

        <div className="flex justify-between mt-3 text-xs text-gray-400">
          <span>Showing 1-5 of {casesData.length} cases</span>
          <button className="bg-gray-700 px-3 py-1 rounded">
            Clear Filters
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-[#111827] rounded-lg border border-gray-700 overflow-hidden">

        {/* TABLE HEADER */}
        <div className="grid grid-cols-7 text-sm text-gray-400 px-4 py-3 border-b border-gray-700">
          <div>Case ID</div>
          <div>Client Name</div>
          <div>Investigation Type</div>
          <div>Priority</div>
          <div>Status</div>
          <div>Detective</div>
          <div>Actions</div>
        </div>

        {/* TABLE ROWS */}
        {casesData.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-7 items-center px-4 py-3 text-sm border-b border-gray-800"
          >
            {/* CASE ID */}
            <div>
              <p className="font-medium">{item.id}</p>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>

            {/* CLIENT */}
            <div>
              <p>{item.client}</p>
              <p className="text-xs text-gray-500">
                {item.type} Investigation
              </p>
            </div>

            {/* TYPE */}
            <div>{item.type}</div>

            {/* PRIORITY */}
            <div>
              <span
                className={`px-2 py-1 text-xs rounded ${
                  item.priority === "urgent"
                    ? "bg-red-600"
                    : item.priority === "high"
                    ? "bg-orange-500"
                    : "bg-yellow-500"
                }`}
              >
                {item.priority}
              </span>
            </div>

            {/* STATUS */}
            <div>
              <span
                className={`px-2 py-1 text-xs rounded ${
                  item.status === "Insights Submitted"
                    ? "bg-yellow-600"
                    : item.status === "In Progress"
                    ? "bg-purple-600"
                    : item.status === "Report Ready"
                    ? "bg-green-600"
                    : item.status === "Pending"
                    ? "bg-gray-600"
                    : "bg-blue-600"
                }`}
              >
                {item.status}
              </span>
            </div>

            {/* DETECTIVE */}
            <div className="text-gray-300">
              {item.detective || "Unassigned"}
            </div>

            {/* ACTION */}
            <div>
              <button className="bg-[#0B1220] p-2 rounded border border-gray-700">
                <Eye size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCaseManagement;