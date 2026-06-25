import { X, User, Phone, Mail, MapPin, Calendar } from "lucide-react";

const ViewPatientModal = ({ open, onClose, patient }) => {
  if (!open || !patient) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-3xl rounded-2xl bg-[#111827] p-6 shadow-2xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-white">
              Patient Details
            </h2>

            <p className="text-gray-400">
              Complete patient information
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            <X size={20} />
          </button>

        </div>

        {/* Patient Card */}
        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-xl bg-[#1F2937] p-4">
            <div className="mb-3 flex items-center gap-2">
              <User className="text-blue-400" />
              <span className="font-medium text-white">
                Full Name
              </span>
            </div>

            <p className="text-gray-300">
              {patient.name}
            </p>
          </div>

          <div className="rounded-xl bg-[#1F2937] p-4">
            <div className="mb-3 flex items-center gap-2">
              <Calendar className="text-green-400" />
              <span className="font-medium text-white">
                Age
              </span>
            </div>

            <p className="text-gray-300">
              {patient.age} years
            </p>
          </div>

          <div className="rounded-xl bg-[#1F2937] p-4">
            <div className="mb-3 flex items-center gap-2">
              <Phone className="text-yellow-400" />
              <span className="font-medium text-white">
                Phone
              </span>
            </div>

            <p className="text-gray-300">
              {patient.phone}
            </p>
          </div>

          <div className="rounded-xl bg-[#1F2937] p-4">
            <div className="mb-3 flex items-center gap-2">
              <Mail className="text-purple-400" />
              <span className="font-medium text-white">
                Email
              </span>
            </div>

            <p className="text-gray-300">
              {patient.email}
            </p>
          </div>

          <div className="rounded-xl bg-[#1F2937] p-4 md:col-span-2">
            <div className="mb-3 flex items-center gap-2">
              <MapPin className="text-red-400" />
              <span className="font-medium text-white">
                Address
              </span>
            </div>

            <p className="text-gray-300">
              {patient.address}
            </p>
          </div>

          <div className="rounded-xl bg-[#1F2937] p-4">
            <h4 className="mb-2 font-medium text-white">
              Gender
            </h4>

            <p className="text-gray-300">
              {patient.gender}
            </p>
          </div>

          <div className="rounded-xl bg-[#1F2937] p-4">
            <h4 className="mb-2 font-medium text-white">
              Blood Group
            </h4>

            <p className="text-gray-300">
              {patient.bloodGroup}
            </p>
          </div>

          <div className="rounded-xl bg-[#1F2937] p-4 md:col-span-2">
            <h4 className="mb-2 font-medium text-white">
              Medical Condition
            </h4>

            <p className="text-gray-300">
              {patient.condition}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">

          <button
            onClick={onClose}
            className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-500"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default ViewPatientModal;