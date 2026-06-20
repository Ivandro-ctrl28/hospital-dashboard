import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { medicines } from "../constants/medicines";
import AddMedicineModal from "../components/Modals/AddMedicineModal";

const Pharmacy = () => {
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");

  const filteredMedicines = medicines.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Pharmacy
          </h1>
          <p className="text-gray-400">
            Manage hospital medicines and stock
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 hover:bg-emerald-500 transition active:scale-95"
        >
          <Plus size={18} />
          Add Medicine
        </button>

      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-3 rounded-xl bg-[#0B1220] px-4 py-3 border border-gray-800">
        <Search size={18} className="text-gray-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search medicine..."
          className="w-full bg-transparent outline-none text-white"
        />
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-xl border border-gray-800">
        <table className="w-full text-left">

          <thead className="bg-[#0B1220] text-gray-400">
            <tr>
              <th className="p-4">Medicine</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Expiry</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredMedicines.map((med) => (
              <tr key={med.id} className="border-t border-gray-800">

                <td className="p-4 font-medium text-white">
                  {med.name}
                </td>

                <td className="text-gray-400">
                  {med.category}
                </td>

                <td>
                  <span className={med.stock < 20 ? "text-red-400" : "text-green-400"}>
                    {med.stock}
                  </span>
                </td>

                <td className="text-gray-300">
                  ${med.price}
                </td>

                <td className="text-gray-400">
                  {med.expiry}
                </td>

                <td>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    med.status === "Available"
                      ? "bg-green-500/10 text-green-400"
                      : med.status === "Low Stock"
                      ? "bg-yellow-500/10 text-yellow-400"
                      : "bg-red-500/10 text-red-400"
                  }`}>
                    {med.status}
                  </span>
                </td>

                <td className="text-gray-400">
                  Edit | Delete
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* MODAL */}
      <AddMedicineModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

    </div>
  );
};

export default Pharmacy;