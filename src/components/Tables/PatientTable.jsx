import {
  Search,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";


const PatientTable = ({ patients }) => {

  return (

    <div
      className="
      rounded-2xl
      bg-[#09152b]
      border
      border-slate-700
      p-6
      "
    >

      <div className="mb-6 flex justify-between">

        <div
          className="
          flex
          items-center
          gap-3
          rounded-xl
          bg-[#0d1d38]
          px-4
          py-3
          w-96
          "
        >

          <Search size={18} />

          <input
            placeholder="Search patient..."
            className="
            bg-transparent
            outline-none
            w-full
            "
          />

        </div>

      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b border-slate-700 text-left text-gray-400">

            <th className="pb-4">Photo</th>

            <th>Name</th>

            <th>Age</th>

            <th>Gender</th>

            <th>Blood</th>

            <th>Phone</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {patients.map((patient) => (

            <tr
              key={patient.id}
              className="border-b border-slate-800 hover:bg-slate-900 transition"
            >

              <td className="py-5">

                <img
                  src={patient.photo}
                  className="h-12 w-12 rounded-full"
                />

              </td>

              <td>{patient.name}</td>

              <td>{patient.age}</td>

              <td>{patient.gender}</td>

              <td>{patient.blood}</td>

              <td>{patient.phone}</td>

              <td>

                <span
                  className={`
                  rounded-full
                  px-3
                  py-1
                  text-sm

                  ${
                    patient.status === "Active"
                      ? "bg-green-600/20 text-green-400"

                      : patient.status === "Critical"

                      ? "bg-red-600/20 text-red-400"

                      : "bg-blue-600/20 text-blue-400"
                  }
                  `}
                >
                  {patient.status}
                </span>

              </td>

              <td>

                <div className="flex gap-3">

                  <button>

                    <Eye
                      className="text-blue-400 hover:scale-110 transition"
                    />

                  </button>

                  <button>

                    <Pencil
                      className="text-yellow-400 hover:scale-110 transition"
                    />

                  </button>

                  <button>

                    <Trash2
                      className="text-red-500 hover:scale-110 transition"
                    />

                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

};

export default PatientTable;