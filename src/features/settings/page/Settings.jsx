import React, { useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import { BellIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import NotificationSettings from "../components/NotificationSettings";
import UserManagement from "../components/UserManagement";

export default function Settings() {
  const [selectedTab, setSelectedTab] = useState("notifications");

  return (
    <div className="p-8 bg-[#F4F7FE] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-black text-[#1B254B]">Configuraciones</h1>
          <p className="text-slate-500 font-medium">Administra canales de alerta y acceso de personal.</p>
        </header>

        <Tabs 
          selectedKey={selectedTab} 
          onSelectionChange={setSelectedTab}
          variant="underlined"
          classNames={{
            tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-blue-600",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-blue-600 font-bold"
          }}
        >
          <Tab
            key="notifications"
            title={
              <div className="flex items-center space-x-2">
                <BellIcon className="w-5 h-5" />
                <span>Alertas y Canales</span>
              </div>
            }
          >
            <NotificationSettings />
          </Tab>
          
          <Tab
            key="users"
            title={
              <div className="flex items-center space-x-2">
                <UserGroupIcon className="w-5 h-5" />
                <span>Gestión de Usuarios</span>
              </div>
            }
          >
            <UserManagement />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}