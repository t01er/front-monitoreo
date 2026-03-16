import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function DashboardLayout() {

  return (

    <div className="flex h-screen">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Navbar />

        <main className="p-6 flex-1 overflow-auto bg-[#F4F7FE] ">
          <Outlet />
        </main>

      </div>

    </div>

  );
}