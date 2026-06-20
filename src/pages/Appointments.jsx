import { Plus } from "lucide-react";

import AppointmentsTable from "../components/Tables/AppointmentsTable";
import { appointments } from "../constants/appointments";

const Appointments = () => {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Appointments
          </h1>

          <p className="mt-2 text-gray-400">
            Manage patient consultations and schedules.
          </p>
        </div>

        <button
          className="
            flex items-center gap-2
            rounded-xl bg-indigo-600
            px-5 py-3
            text-white
            transition
            hover:bg-indigo-500
            active:scale-95
          "
        >
          <Plus size={18} />
          New Appointment
        </button>

      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">

        <div className="rounded-xl bg-[#111827] p-5 border border-gray-800">
          <p className="text-gray-400 text-sm">Total</p>
          <h2 className="text-2xl font-bold text-white">128</h2>
        </div>

        <div className="rounded-xl bg-[#111827] p-5 border border-gray-800">
          <p className="text-gray-400 text-sm">Today</p>
          <h2 className="text-2xl font-bold text-green-400">12</h2>
        </div>

        <div className="rounded-xl bg-[#111827] p-5 border border-gray-800">
          <p className="text-gray-400 text-sm">Completed</p>
          <h2 className="text-2xl font-bold text-blue-400">96</h2>
        </div>

        <div className="rounded-xl bg-[#111827] p-5 border border-gray-800">
          <p className="text-gray-400 text-sm">Cancelled</p>
          <h2 className="text-2xl font-bold text-red-400">10</h2>
        </div>

      </div>

      {/* TABLE */}
      <AppointmentsTable appointments={appointments} />

      {/* MODAL (vamos criar depois) */}
      {/* <AddAppointmentModal open={openModal} onClose={() => setOpenModal(false)} /> */}

    </div>
  );
};

export default Appointments;