import { Input } from "@heroui/react";
import { MagnifyingGlassIcon, ExclamationTriangleIcon ,DevicePhoneMobileIcon} from "@heroicons/react/24/outline";
export default function HeaderTable({ title, subtitle }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h2 className="text-2xl font-black text-[#1B254B] flex items-center gap-2">
          {title === "Centro de Alertas" ? (
            <ExclamationTriangleIcon className="w-6 h-6 text-red-500" />
          ) : (
            <DevicePhoneMobileIcon className="w-6 h-6 text-blue-500" />
          )}
          {title}
        </h2>
        <p className="text-slate-400 text-sm font-medium">
          {subtitle}
        </p>
      </div>
      <Input
        isClearable
        className="w-full md:max-w-xs"
        placeholder="Buscar por ID o Empresa..."
        startContent={
          <MagnifyingGlassIcon className="w-4 h-4 text-slate-400" />
        }
        variant="flat"
      />

    </div>
  );
}
