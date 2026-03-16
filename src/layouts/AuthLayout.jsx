
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="h-screen flex items-center justify-center bg-linear-to-r from-[#4D41E9] to-[#131E56] ">
      <Outlet />
    </div>
  );
}