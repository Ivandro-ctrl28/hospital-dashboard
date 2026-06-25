import { useState } from "react";
import { Plus, Download, DollarSign } from "lucide-react";

const initialBills = [
  {
    id: "INV-1001",
    patient: "John Doe",
    service: "Consultation",
    amount: 120,
    status: "Paid",
    date: "2026-01-10",
  },
  {
    id: "INV-1002",
    patient: "Mary Johnson",
    service: "Lab Tests",
    amount: 300,
    status: "Pending",
    date: "2026-01-12",
  },
  {
    id: "INV-1003",
    patient: "Carlos Silva",
    service: "Surgery",
    amount: 2500,
    status: "Overdue",
    date: "2026-01-05",
  },
];

const Billing = () => {
  const [bills] = useState(initialBills);

  const totalRevenue = bills
    .filter((b) => b.status === "Paid")
    .reduce((acc, b) => acc + b.amount, 0);

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-white">

        <div>
          <h1 className="text-4xl font-bold text-white">Billing</h1>
          <p className="text-gray-400">
            Manage invoices, payments and revenue
          </p>
        </div>

        <div className="flex gap-3">

          <button className="flex items-center gap-2 rounded-xl bg-gray-800 px-5 py-3 hover:bg-gray-700">
            <Download size={18} />
            Export
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 hover:bg-blue-500">
            <Plus size={18} />
            New Invoice
          </button>

        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        <div className="rounded-2xl bg-gray-900 p-6 border border-gray-800">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-400">Total Revenue</h3>
            <DollarSign className="text-green-400" />
          </div>
          <p className="text-3xl font-bold mt-2">${totalRevenue}</p>
        </div>

        <div className="rounded-2xl bg-gray-900 p-6 border border-gray-800">
          <h3 className="text-gray-400">Pending Bills</h3>
          <p className="text-3xl font-bold mt-2">
            {bills.filter(b => b.status === "Pending").length}
          </p>
        </div>

        <div className="rounded-2xl bg-gray-900 p-6 border border-gray-800">
          <h3 className="text-gray-400">Overdue</h3>
          <p className="text-3xl font-bold mt-2 text-red-400">
            {bills.filter(b => b.status === "Overdue").length}
          </p>
        </div>

      </div>

      {/* TABLE */}
      <div className="rounded-2xl border border-gray-800 bg-gray-900 overflow-hidden">

        <table className="w-full text-left">

          <thead className="bg-gray-800 text-gray-300">
            <tr>
              <th className="p-4">Invoice</th>
              <th>Patient</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {bills.map((bill) => (
              <tr key={bill.id} className="border-t border-gray-800">
                <td className="p-4 font-medium">{bill.id}</td>
                <td>{bill.patient}</td>
                <td>{bill.service}</td>
                <td>${bill.amount}</td>

                <td>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${bill.status === "Paid" ? "bg-green-500/20 text-green-400" :
                      bill.status === "Pending" ? "bg-yellow-500/20 text-yellow-400" :
                      "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {bill.status}
                  </span>
                </td>

                <td className="text-gray-400">{bill.date}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default Billing;