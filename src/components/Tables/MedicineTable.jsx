import { Pencil, Trash } from "lucide-react";

const MedicineTable = ({ medicines }) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-800">

      <table className="min-w-full text-left text-sm">

        <thead className="bg-gray-900 text-gray-300">
          <tr>
            <th className="p-4">Medicine</th>
            <th className="p-4">Category</th>
            <th className="p-4">Stock</th>
            <th className="p-4">Expiry</th>
            <th className="p-4">Price</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {medicines.map((m) => (
            <tr key={m.id} className="border-t border-gray-800 hover:bg-gray-900/50">

              <td className="p-4 font-medium text-white">{m.name}</td>
              <td className="p-4 text-gray-400">{m.category}</td>
              <td className="p-4">{m.stock}</td>
              <td className="p-4">{m.expiry}</td>
              <td className="p-4">${m.price}</td>

              <td className="p-4">
                <span className={`
                  px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    m.status === "Available"
                      ? "bg-green-500/20 text-green-400"
                      : m.status === "Low Stock"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }
                `}>
                  {m.status}
                </span>
              </td>

              <td className="p-4 flex gap-3">
                <button className="text-blue-400 hover:text-blue-300">
                  <Pencil size={18} />
                </button>
                <button className="text-red-400 hover:text-red-300">
                  <Trash size={18} />
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default MedicineTable;