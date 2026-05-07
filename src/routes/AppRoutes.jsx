import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../features/auth/pages/Login";
import Dashboard from "../features/dashboard/pages/Dashboard";
import NotFound from "../features/notFound/page/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import Devices from "../features/devices/pages/device";
import Alerts from "../features/alerts/page/alerts";
import Setting from "../features/settings/page/Settings";
import PublicRoute from "./PublicRoute";
import Technical from "../features/technical/page/Technical";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Login />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/technical" element={<Technical />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
