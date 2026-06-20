const statusColors = {
  Completed: "text-green-400",
  Pending: "text-yellow-400",
  "In Progress": "text-blue-400",
};

const LabTable = ({ tests }) => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-[#0B1220]">
      <table className="w-full text-left">

        <thead className="border-b border-gray-800 text-gray-400">
          <tr>
            <th className="p-4">Patient</th>
            <th className="p-4">Test</th>
            <th className="p-4">Doctor</th>
            <th className="p-4">Date</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {tests.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-900 hover:bg-gray-900/40"
            >
              <td className="p-4">{item.patient}</td>
              <td className="p-4">{item.test}</td>
              <td className="p-4">{item.doctor}</td>
              <td className="p-4">{item.date}</td>

              <td className={`p-4 font-medium ${statusColors[item.status]}`}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default LabTable;