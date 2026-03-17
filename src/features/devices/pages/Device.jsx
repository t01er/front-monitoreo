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
  Tooltip,
} from "@heroui/react";
import HeaderTable from "../../../components/ux/HeaderTable";
import {
  MagnifyingGlassIcon,
  EyeIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const devices = [
  {
    id: 61,
    locatario: "Starbucks",
    edificio: "Portal F Trujillo",
    piso: "Nivel 1",
    dispositivo: "LCE.25",
    imei: "180985220454622",
    tipo: "ENERGY_POWER",
    transmision: "hace 38 min",
    estado: "ACTIVO",
  },
  {
    id: 62,
    locatario: "LC-101B",
    edificio: "Portal F Trujillo",
    piso: "Nivel 1",
    dispositivo: "LCE.43",
    imei: "302951957244554",
    tipo: "ENERGY_POWER",
    transmision: "hace 38 min",
    estado: "ACTIVO",
  },
  {
    id: 63,
    locatario: "LC-101B",
    edificio: "Portal F Trujillo",
    piso: "Nivel 1",
    dispositivo: "LCE.43",
    imei: "302951957244554",
    tipo: "ENERGY_POWER",
    transmision: "hace 38 min",
    estado: "INACTIVO",
  },
  {
    id: 64,
    locatario: "LC-101B",
    edificio: "Portal F Trujillo",
    piso: "Nivel 1",
    dispositivo: "LCE.43",
    imei: "302951957244554",
    tipo: "ENERGY_POWER",
    transmision: "hace 38 min",
    estado: "ACTIVO",
  },
  {
    id: 65,
    locatario: "LC-101B",
    edificio: "Portal F Trujillo",
    piso: "Nivel 1",
    dispositivo: "LCE.43",
    imei: "302951957244554",
    tipo: "ENERGY_POWER",
    transmision: "hace 38 min",
    estado: "INACTIVO",
  },
  {
    id: 66,
    locatario: "LC-101B",
    edificio: "Portal F Trujillo",
    piso: "Nivel 1",
    dispositivo: "LCE.43",
    imei: "302951957244554",
    tipo: "ENERGY_POWER",
    transmision: "hace 38 min",
    estado: "ACTIVO",
  },
];

const columns = [
  { name: "ID", uid: "id" },
  { name: "LOCATARIO", uid: "locatario" },
  { name: "DISPOSITIVO / IMEI", uid: "info" },
  { name: "EDIFICIO", uid: "edificio" },
  { name: "TIPO", uid: "tipo" },
  { name: "ESTADO", uid: "estado" },
  { name: "ACCIONES", uid: "acciones" },
];

export default function Devices() {
  const renderCell = React.useCallback((device, columnKey) => {
    const cellValue = device[columnKey];

    switch (columnKey) {
      case "locatario":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm text-[#1B254B]">{cellValue}</p>
            <p className="text-tiny text-slate-400">{device.piso}</p>
          </div>
        );
      case "info":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm text-blue-600">
              {device.dispositivo}
            </p>
            <p className="text-tiny text-slate-400 font-mono">{device.imei}</p>
          </div>
        );
      case "tipo":
        return (
          <span className="text-xs font-semibold text-slate-500">
            {cellValue}
          </span>
        );
      case "estado":
        return (
          <Chip
            color={device.estado === "ACTIVO" ? "success" : "danger"}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "acciones":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Ver detalles">
              <Button
                isIconOnly
                size="sm"
                variant="light"
                className="text-slate-400"
              >
                <EyeIcon className="w-5 h-5" />
              </Button>
            </Tooltip>
            <Tooltip content="Editar">
              <Button
                isIconOnly
                size="sm"
                variant="light"
                className="text-blue-500"
              >
                <PencilSquareIcon className="w-5 h-5" />
              </Button>
            </Tooltip>
          </div>
        );
      default:
        return (
          <span className="text-sm text-slate-600 font-medium">
            {cellValue}
          </span>
        );
    }
  }, []);

  return (
    <div className="">
      <div className="bg-white rounded-xl p-8 shadow-sm border border-white/60">
        <HeaderTable
          title="Gestión de Dispositivos"
          subtitle="Administra y monitorea tus dispositivos conectados en tiempo real."
        />

        <Table
          aria-label="Tabla de dispositivos"
          shadow="none"
        
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "acciones" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={devices}>
            {(item) => (
              <TableRow
                key={item.id}
                className="hover:bg-blue-50/30 transition-colors"
              >
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="py-4 px-2 flex justify-between items-center mt-4">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            Total 226 dispositivos
          </span>
          <Pagination
            isCompact
            showControls
            color="primary"
            page={1}
            total={23}
            variant="flat"
            classNames={{
              cursor: "bg-blue-600 text-white font-bold",
            }}
          />
        </div>
      </div>
    </div>
  );
}
