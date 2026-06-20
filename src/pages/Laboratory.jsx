
import { Plus } from "lucide-react";

import LabTable from "../components/Tables/LabTable";
import { labTests } from "../constants/labTests";

const Laboratory = () => {
 

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Laboratory
          </h1>
          <p className="mt-2 text-gray-400">
            Manage lab tests, results and diagnostics
          </p>
        </div>

        <button
          
          className="
            flex items-center gap-2
            rounded-xl bg-purple-600 px-5 py-3
            text-white transition
            hover:bg-purple-500 active:scale-95
          "
        >
          <Plus size={18} />
          Add Test
        </button>

      </div>

      {/* STATS */}
      <div className="grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl bg-[#111827] p-6 border border-gray-800">
          <p className="text-gray-400">Total Tests</p>
          <h2 className="text-3xl font-bold">1,245</h2>
        </div>

        <div className="rounded-2xl bg-[#111827] p-6 border border-gray-800">
          <p className="text-gray-400">Pending</p>
          <h2 className="text-3xl font-bold text-yellow-400">312</h2>
        </div>

        <div className="rounded-2xl bg-[#111827] p-6 border border-gray-800">
          <p className="text-gray-400">Completed</p>
          <h2 className="text-3xl font-bold text-green-400">933</h2>
        </div>

      </div>

      {/* TABLE */}
      <LabTable tests={labTests} />

    </div>
  );
};

export default Laboratory;