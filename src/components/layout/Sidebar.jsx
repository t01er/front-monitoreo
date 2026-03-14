import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  TruckIcon,
  ExclamationTriangleIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";

const menu = [
  {
    name: "Dashboard",
    path: "/",
    icon: HomeIcon
  },
  {
    name: "Buses",
    path: "/buses",
    icon: TruckIcon
  },
  {
    name: "Alertas",
    path: "/alertas",
    icon: ExclamationTriangleIcon
  },
  {
    name: "Reportes",
    path: "/reportes",
    icon: ChartBarIcon
  }
];

export default function Sidebar() {

  return (

    <aside className="w-64 bg-gray-900 text-white h-screen">

      <div className="p-4 text-xl font-bold border-b border-gray-700">
        Sistema GPS
      </div>

      <nav className="p-2 flex flex-col gap-2">

        {menu.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition
                 ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
              }
            >

              <Icon className="w-5 h-5" />

              {item.name}

            </NavLink>

          );

        })}

      </nav>

    </aside>

  );
}