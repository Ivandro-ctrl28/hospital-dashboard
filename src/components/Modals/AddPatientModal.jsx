import { useState } from "react";
import { Upload, X } from "lucide-react";

const AddPatientModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    blood: "",
    disease: "",
    doctor: "",
    room: "",
    status: "Active",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">

      <div className="w-full max-w-4xl rounded-3xl border border-slate-700 bg-[#0b1320] p-8 shadow-2xl">

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Add Patient
            </h2>

            <p className="text-gray-400">
              Register a new patient.
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-800"
          >
            <X />
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            <input
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className="rounded-xl bg-slate-900 p-3 outline-none"
            />

            <input
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="rounded-xl bg-slate-900 p-3 outline-none"
            />

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="rounded-xl bg-slate-900 p-3 outline-none"
            />

            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className="rounded-xl bg-slate-900 p-3 outline-none"
            />

            <input
              name="age"
              placeholder="Age"
              onChange={handleChange}
              className="rounded-xl bg-slate-900 p-3 outline-none"
            />

            <select
              name="gender"
              onChange={handleChange}
              className="rounded-xl bg-slate-900 p-3 outline-none"
            >
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <select
              name="blood"
              onChange={handleChange}
              className="rounded-xl bg-slate-900 p-3 outline-none"
            >
              <option value="">Blood Type</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>

            <input
              name="doctor"
              placeholder="Doctor"
              onChange={handleChange}
              className="rounded-xl bg-slate-900 p-3 outline-none"
            />

            <input
              name="disease"
              placeholder="Disease"
              onChange={handleChange}
              className="rounded-xl bg-slate-900 p-3 outline-none"
            />

            <input
              name="room"
              placeholder="Room"
              onChange={handleChange}
              className="rounded-xl bg-slate-900 p-3 outline-none"
            />

            <select
              name="status"
              onChange={handleChange}
              className="rounded-xl bg-slate-900 p-3 outline-none"
            >
              <option>Active</option>
              <option>Critical</option>
              <option>Recovered</option>
            </select>

            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-blue-500 p-3 hover:bg-slate-900">

              <Upload size={18} />

              Upload Photo

              <input
                type="file"
                className="hidden"
              />

            </label>

          </div>

          <div className="mt-8 flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-700 px-6 py-3 transition hover:bg-slate-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 transition hover:bg-blue-500"
            >
              Save Patient
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddPatientModal;