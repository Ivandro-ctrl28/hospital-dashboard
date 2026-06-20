import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import Patients from "../pages/Patients";
import Doctors from "../pages/Doctors";
import Appointments from "../pages/Appointments";
import Laboratory from "../pages/Laboratory";
import Pharmacy from "../pages/Pharmacy";
import Billing from "../pages/Billing";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

const AppRoutes = () => {
  return (
      <Routes>

        <Route element={<DashboardLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route path="/patients" element={<Patients />} />

          <Route path="/doctors" element={<Doctors />} />

          <Route path="/appointments" element={<Appointments />} />

          <Route path="/laboratory" element={<Laboratory />} />

          <Route path="/pharmacy" element={<Pharmacy />} />

          <Route path="/billing" element={<Billing />} />

          <Route path="/reports" element={<Reports />} />

          <Route path="/settings" element={<Settings />} />

        </Route>

      </Routes>
  );
};

export default AppRoutes;