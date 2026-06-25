import { useState } from "react";
import { Plus } from "lucide-react";

import PatientTable from "../components/Tables/PatientTable";
import AddPatientModal from "../components/Modals/AddPatientModal";
import { patients } from "../constants/patients";

const Patients = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Patients
          </h1>

          <p className="mt-2 text-white">
            Manage hospital patients efficiently.
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-5
            py-3
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-blue-500
            hover:shadow-lg
            hover:shadow-blue-500/30
            active:scale-95
          "
        >
          <Plus size={18} />
          Add Patient
        </button>

      </div>

      {/* Patient Table */}
      <PatientTable patients={patients} />

      {/* Modal */}
      <AddPatientModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

    </div>
  );
};

export default Patients;