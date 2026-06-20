import { Eye, Trash2 } from "lucide-react";

const AppointmentTable = ({ appointments }) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-800">
      <table className="w-full text-left">

        <thead className="bg-[#111827] text-gray-400 text-sm">
          <tr>
            <th className="p-4">Patient</th>
            <th className="p-4">Doctor</th>
            <th className="p-4">Date</th>
            <th className="p-4">Time</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((a) => (
            <tr key={a.id} className="border-t border-gray-800 hover:bg-gray-900/40">

              <td className="p-4">{a.patient}</td>
              <td className="p-4">{a.doctor}</td>
              <td className="p-4">{a.date}</td>
              <td className="p-4">{a.time}</td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    a.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : a.status === "Pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {a.status}
                </span>
              </td>

              <td className="p-4 flex gap-3">
                <button className="text-blue-400 hover:text-blue-300">
                  <Eye size={18} />
                </button>

                <button className="text-red-400 hover:text-red-300">
                  <Trash2 size={18} />
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default AppointmentTable;