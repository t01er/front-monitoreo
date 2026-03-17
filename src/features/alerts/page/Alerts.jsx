import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  Chip,
  Pagination,
  User,
} from "@heroui/react";
import { 
  MagnifyingGlassIcon, 
  ExclamationTriangleIcon, 
  ClockIcon, 
  ArrowPathIcon 
} from "@heroicons/react/24/outline";
import HeaderTable from "../../../components/ux/HeaderTable";

const alertsData = [
  { 
    id: 1, 
    dispositivo: "LCE.25", 
    imei: "180985220454622", 
    empresa: "Entel - IOT", 
    tipo: "Desconexión", 
    fecha: "07/03/2026", 
    hora: "14:46", 
    prioridad: "Alta", 
    estado: "Pendiente" 
  },
  { 
    id: 2, 
    dispositivo: "LC-102", 
    imei: "141516199587846", 
    empresa: "Cartavio - IOT", 
    tipo: "Falla de Energía", 
    fecha: "07/03/2026", 
    hora: "12:10", 
    prioridad: "Media", 
    estado: "Revisado" 
  },
  { 
    id: 3, 
    dispositivo: "M-106", 
    imei: "141516199587590", 
    empresa: "Mall - Trujillo", 
    tipo: "Sin Señal GPS", 
    fecha: "06/03/2026", 
    hora: "23:55", 
    prioridad: "Baja", 
    estado: "Solucionado" 
  },
];

const columns = [
  { name: "DISPOSITIVO", uid: "dispositivo" },
  { name: "TIPO DE ALERTA", uid: "tipo" },
  { name: "FECHA Y HORA", uid: "fecha" },
  { name: "PRIORIDAD", uid: "prioridad" },
  { name: "ESTADO", uid: "estado" },
  { name: "ACCIONES", uid: "acciones" },
];

export default function Alerts() {
  const renderCell = React.useCallback((alert, columnKey) => {
    switch (columnKey) {
      case "dispositivo":
        return (
          <User
            name={alert.dispositivo}
            description={alert.imei}
            avatarProps={{
              radius: "lg",
              src: "https://cdn-icons-png.flaticon.com/512/6831/6831000.png",
              className: "bg-slate-100 p-1"
            }}
            classNames={{ name: "font-bold text-[#1B254B]", description: "font-mono text-[10px]" }}
          />
        );
      case "tipo":
        return (
          <div className="flex flex-col">
            <p className="text-sm font-bold text-slate-700">{alert.tipo}</p>
            <p className="text-tiny text-blue-500 font-medium">{alert.empresa}</p>
          </div>
        );
      case "fecha":
        return (
          <div className="flex items-center gap-2 text-slate-500">
            <ClockIcon className="w-4 h-4" />
            <div className="flex flex-col">
              <span className="text-xs font-bold">{alert.fecha}</span>
              <span className="text-[10px]">{alert.hora}</span>
            </div>
          </div>
        );
      case "prioridad":
        const priorityColor = 
          alert.prioridad === "Alta" ? "danger" : 
          alert.prioridad === "Media" ? "warning" : "primary";
        return (
          <Chip variant="dot" color={priorityColor} size="sm" className="font-bold border-none">
            {alert.prioridad}
          </Chip>
        );
      case "estado":
        return (
          <Chip 
            size="sm" 
            variant="flat" 
            color={alert.estado === "Pendiente" ? "danger" : alert.estado === "Revisado" ? "warning" : "success"}
            className="font-bold"
          >
            {alert.estado}
          </Chip>
        );
      case "acciones":
        return (
          <Button isIconOnly size="sm" variant="light" className="text-slate-400 hover:text-blue-600">
            <ArrowPathIcon className="w-5 h-5" />
          </Button>
        );
      default:
        return alert[columnKey];
    }
  }, []);

  return (
    <div className="">
      <div className="bg-white rounded-xl p-8 shadow-sm border border-white">
        <HeaderTable title="Centro de Alertas" subtitle="Gestiona las incidencias críticas de tus dispositivos en tiempo real." />
        <Table
          aria-label="Tabla de Alertas"
          shadow="none"
         
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid} align={column.uid === "acciones" ? "center" : "start"}>
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={alertsData}>
            {(item) => (
              <TableRow key={item.id} className="hover:bg-slate-50/50 transition-all cursor-pointer">
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="mt-8 flex justify-between items-center">
          <p className="text-xs font-normal text-slate-400 uppercase">
            {alertsData.length} Alertas detectadas hoy
          </p>
          <Pagination
            total={10}
            color="danger"
            variant="flat"
            showControls
            classNames={{
              cursor: "bg-red-500 text-white font-bold",
            }}
          />
        </div>
      </div>
    </div>
  );
}