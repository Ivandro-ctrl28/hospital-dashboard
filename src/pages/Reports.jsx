import { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  Calendar,
  Activity,
  Download,
} from "lucide-react";

const Reports = () => {
  const [range, setRange] = useState("monthly");

  const stats = [
    {
      title: "Total Patients",
      value: "1,248",
      icon: Users,
      color: "bg-blue-600",
      change: "+12%",
    },
    {
      title: "Appointments",
      value: "384",
      icon: Calendar,
      color: "bg-emerald-600",
      change: "+8%",
    },
    {
      title: "Revenue",
      value: "$24,560",
      icon: TrendingUp,
      color: "bg-purple-600",
      change: "+15%",
    },
    {
      title: "Lab Tests",
      value: "912",
      icon: Activity,
      color: "bg-orange-600",
      change: "+5%",
    },
  ];

  const reports = [
    { month: "Jan", patients: 120, revenue: 4000 },
    { month: "Feb", patients: 180, revenue: 5200 },
    { month: "Mar", patients: 160, revenue: 6100 },
    { month: "Apr", patients: 220, revenue: 7200 },
    { month: "May", patients: 260, revenue: 8400 },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">Reports</h1>
          <p className="text-white">
            Hospital analytics and performance overview
          </p>
        </div>

        <div className="flex gap-3">
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="rounded-lg bg-gray-900 px-4 py-2 text-white border border-gray-700"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>

          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-500 transition">
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="rounded-2xl bg-gray-900 p-5 border border-gray-800"
            >
              <div className="flex items-center justify-between">

                <div className={`p-3 rounded-lg ${item.color}`}>
                  <Icon className="text-white" size={20} />
                </div>

                <span className="text-green-400 text-sm">
                  {item.change}
                </span>

              </div>

              <h2 className="mt-4 text-2xl font-bold">
                {item.value}
              </h2>

              <p className="text-gray-400 text-sm">
                {item.title}
              </p>
            </div>
          );
        })}

      </div>

      {/* Chart Placeholder (futuro Recharts ou Chart.js) */}
      <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Performance Overview</h2>
          <BarChart3 className="text-gray-400" />
        </div>

        <div className="h-64 flex items-end gap-4">
          {reports.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2 flex-1">

              {/* Bar Patients */}
              <div
                className="w-full bg-blue-500 rounded-t-lg"
                style={{ height: `${item.patients / 3}px` }}
              />

              {/* Bar Revenue */}
              <div
                className="w-full bg-emerald-500 rounded-t-lg"
                style={{ height: `${item.revenue / 50}px` }}
              />

              <span className="text-xs text-gray-400">
                {item.month}
              </span>

            </div>
          ))}
        </div>
      </div>

      {/* Activity Table */}
      <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6">

        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-4">

          <li className="flex justify-between text-sm text-gray-300">
            <span>New patient registered</span>
            <span className="text-gray-500">2 min ago</span>
          </li>

          <li className="flex justify-between text-sm text-gray-300">
            <span>Appointment completed</span>
            <span className="text-gray-500">10 min ago</span>
          </li>

          <li className="flex justify-between text-sm text-gray-300">
            <span>Lab results updated</span>
            <span className="text-gray-500">1 hour ago</span>
          </li>

          <li className="flex justify-between text-sm text-gray-300">
            <span>Payment received</span>
            <span className="text-gray-500">3 hours ago</span>
          </li>

        </ul>

      </div>

    </div>
  );
};

export default Reports;