import { Eye, Pencil, Trash2, MoreVertical } from "lucide-react";

const DoctorTable = ({ doctors = [] }) => {
  return (
    <div className="space-y-6">

      {/* ================= TABLE (DESKTOP) ================= */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-lg shadow-lg">

        <table className="min-w-full text-left text-sm text-white">

          <thead className="border-b border-slate-800 text-xs uppercase text-slate-400">
            <tr>
              <th className="px-6 py-4">Doctor</th>
              <th className="px-6 py-4">Specialty</th>
              <th className="px-6 py-4">Experience</th>
              <th className="px-6 py-4">Patients</th>
              <th className="px-6 py-4">Contact</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doc) => (
              <tr
                key={doc.id}
                className="border-b border-slate-800 hover:bg-slate-800/40 transition"
              >
                {/* Doctor */}
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold uppercase">
                    {doc.name?.charAt(0)}
                  </div>

                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-xs text-slate-400">{doc.email}</p>
                  </div>
                </td>

                <td className="px-6 py-4 text-slate-300">{doc.specialty}</td>
                <td className="px-6 py-4 text-slate-300">{doc.experience}</td>
                <td className="px-6 py-4 text-slate-300">{doc.patients}</td>
                <td className="px-6 py-4 text-slate-300">{doc.phone}</td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      doc.status === "Available"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-3 text-slate-400">
                    <button className="hover:text-blue-400 transition">
                      <Eye size={18} />
                    </button>

                    <button className="hover:text-yellow-400 transition">
                      <Pencil size={18} />
                    </button>

                    <button className="hover:text-red-400 transition">
                      <Trash2 size={18} />
                    </button>

                    <button className="hover:text-white transition">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* ================= MOBILE (CARDS) ================= */}
      <div className="grid gap-4 md:hidden">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 backdrop-blur-lg"
          >

            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold uppercase">
                {doc.name?.charAt(0)}
              </div>

              <div>
                <p className="font-medium">{doc.name}</p>
                <p className="text-xs text-slate-400">{doc.email}</p>
              </div>
            </div>

            {/* Info */}
            <div className="mt-4 space-y-1 text-sm text-slate-300">
              <p><span className="text-slate-500">Specialty:</span> {doc.specialty}</p>
              <p><span className="text-slate-500">Experience:</span> {doc.experience}</p>
              <p><span className="text-slate-500">Patients:</span> {doc.patients}</p>
              <p><span className="text-slate-500">Phone:</span> {doc.phone}</p>
            </div>

            {/* Status + Actions */}
            <div className="mt-4 flex items-center justify-between">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  doc.status === "Available"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {doc.status}
              </span>

              <div className="flex gap-3 text-slate-400">
                <Eye size={18} />
                <Pencil size={18} />
                <Trash2 size={18} />
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default DoctorTable;