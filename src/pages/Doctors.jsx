import { useState } from "react";
import { Plus } from "lucide-react";

import DoctorTable from "../components/Tables/DoctorTable";
import AddDoctorModal from "../components/Modals/AddDoctorModal";
import { doctors } from "../constants/doctors";

const Doctors = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Doctors
          </h1>

          <p className="mt-2 text-gray-400">
            Manage doctors, specialties and availability.
          </p>

        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-emerald-600
            px-5
            py-3
            text-white
            transition
            hover:bg-emerald-500
            active:scale-95
          "
        >
          <Plus size={18} />
          Add Doctor
        </button>

      </div>

      {/* Table */}

      <DoctorTable doctors={doctors} />

      {/* Modal */}

      <AddDoctorModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

    </div>
  );
};

export default Doctors;