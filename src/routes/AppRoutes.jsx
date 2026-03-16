import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../features/auth/pages/Login";
import Dashboard from "../features/dashboard/pages/Dashboard";
import NotFound from "../features/notFound/page/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

export default function AppRoutes() {

  return (
    <BrowserRouter>

      <Routes>

        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>
            <Route
              path="/"
              element={<Login />}
            />
          </Route>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/devices"
              element={<h1>devices</h1>}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Route>
        </Route>

      </Routes>

    </BrowserRouter>
  );
}