import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

import {
  HomeIcon,
  TruckIcon,
  DevicePhoneMobileIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const menu = [
  { name: "Dashboard", path: "/dashboard", icon: HomeIcon },
  { name: "Dispositivo", path: "/devices", icon: DevicePhoneMobileIcon },
  { name: "Alertas", path: "/alertas", icon: ExclamationTriangleIcon },
  { name: "Ajustes", path: "/ajustes", icon: ChartBarIcon },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const user = useSelector((state) => state.auth.user);

  return (
    <motion.aside
      initial={false}
      animate={{ width: isExpanded ? 270 : 80 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative h-screen bg-gradient-to-b from-slate-900 to-black text-slate-300 border-r border-white/10 flex flex-col shadow-2xl"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-10 bg-blue-600 hover:bg-blue-500 text-white rounded-full p-1 shadow-lg z-50 transition-colors"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRightIcon className="w-4 h-4" />
        </motion.div>
      </button>

      <div className="h-20 flex items-center px-6 overflow-hidden">
        <div className="min-w-[32px] h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
          MO
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="ml-4 font-bold text-white tracking-tight whitespace-nowrap"
            >
              ALERT <span className="text-blue-500">MO </span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <nav className="flex-1 px-3 space-y-2 mt-4">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group relative flex items-center h-12 rounded-xl transition-all duration-200 
                ${isActive ? "bg-blue-600/10 text-blue-400" : "hover:bg-white/5 hover:text-white"}`
              }
            >
              {/* Icono centralizado */}
              <div className="min-w-[56px] flex justify-center">
                <Icon className="w-6 h-6" />
              </div>

              {/* Texto animado */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="font-medium whitespace-nowrap"
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>

              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "absolute left-0 w-1 h-6 bg-blue-500 rounded-r-full"
                    : "hidden"
                }
              />
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <div className="flex items-center group cursor-pointer hover:bg-white/5 p-2 rounded-xl">
          <div className="min-w-[40px] flex justify-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
          </div>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="ml-3 overflow-hidden"
            >
              <p className="text-sm font-medium text-white truncate">
                Admin Usuario
              </p>
              <p className="text-xs text-slate-500 truncate">
                {user ? user.email : "Invitiado"}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.aside>
  );
}
