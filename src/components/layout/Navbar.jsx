import { BellIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import ApiKeyConfig from "./ApiKeyConfig";
export default function Navbar() {

  const { signOut } = useAuth();

  return (

    <header className="h-16 bg-[#F4F7FE]  flex items-center justify-between px-6">

      <h1 className="font-semibold text-lg">
        Panel de Monitoreo
      </h1>

      <div className="flex items-center gap-4">

        <button className="relative">

          <BellIcon className="w-6 h-6 text-gray-600" />

        </button>

        <div className="flex items-center gap-2">

          <div className="w-8 h-8 rounded-full bg-gray-300"></div>

          <span className="text-sm">
            Admin
          </span>

        </div>

        <button
          onClick={signOut}
          className="text-red-500 text-sm"
        >
          Salir
        </button>
      <ApiKeyConfig />


      </div>

    </header>

  );
}