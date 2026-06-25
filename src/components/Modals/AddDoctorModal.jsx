import { X } from "lucide-react";

const AddDoctorModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-2xl bg-[#111827] p-6 shadow-2xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            Add New Doctor
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            <X size={20} />
          </button>

        </div>

        {/* Form */}
        <form className="grid gap-4 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Dr. John Smith"
              className="w-full rounded-xl border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Specialization
            </label>

            <input
              type="text"
              placeholder="Cardiology"
              className="w-full rounded-xl border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="doctor@hospital.com"
              className="w-full rounded-xl border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Phone
            </label>

            <input
              type="text"
              placeholder="+258 84 000 0000"
              className="w-full rounded-xl border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Experience (Years)
            </label>

            <input
              type="number"
              placeholder="5"
              className="w-full rounded-xl border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Status
            </label>

            <select
              className="w-full rounded-xl border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-blue-500"
            >
              <option>Active</option>
              <option>On Leave</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-gray-300">
              Notes
            </label>

            <textarea
              rows="4"
              placeholder="Additional information..."
              className="w-full rounded-xl border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="mt-4 flex justify-end gap-3 md:col-span-2">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-600 px-5 py-3 text-gray-300 hover:bg-gray-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-500"
            >
              Save Doctor
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddDoctorModal;