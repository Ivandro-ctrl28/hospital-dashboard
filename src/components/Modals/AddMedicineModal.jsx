import { useEffect } from "react";
import { X } from "lucide-react";

const AddMedicineModal = ({ open, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-fadeIn"
    >
      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full max-w-2xl
          rounded-3xl
          border border-white/10
          bg-linear-to-b from-[#0f172a] to-[#0b1220]
          shadow-2xl
          overflow-hidden
          transform transition-all duration-300
          animate-slideUp
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Add Medicine
            </h2>
            <p className="text-sm text-gray-400">
              Register a new medicine in the inventory
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-white/10 transition"
          >
            <X className="text-gray-300" />
          </button>
        </div>

        {/* FORM */}
        <form className="p-6 space-y-6">

          {/* GRID INPUTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="text-xs text-gray-400">Medicine Name</label>
              <input
                type="text"
                placeholder="e.g. Paracetamol"
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400">Category</label>
              <input
                type="text"
                placeholder="e.g. Painkiller"
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400">Stock Quantity</label>
              <input
                type="number"
                placeholder="0"
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400">Price ($)</label>
              <input
                type="number"
                placeholder="0.00"
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
              />
            </div>

          </div>

          {/* DATE */}
          <div>
            <label className="text-xs text-gray-400">Expiry Date</label>
            <input
              type="date"
              className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
            />
          </div>

          {/* ACTIONS */}
          <div className="flex gap-4 pt-2">

            <button
              type="button"
              onClick={onClose}
              className="
                w-full
                rounded-xl
                border border-white/10
                bg-white/5
                p-3
                text-white
                hover:bg-white/10
                transition
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                w-full
                rounded-xl
                bg-linear-to-r from-purple-600 to-violet-600
                p-3
                font-semibold
                text-white
                hover:opacity-90
                active:scale-[0.98]
                transition
              "
            >
              Save Medicine
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default AddMedicineModal;