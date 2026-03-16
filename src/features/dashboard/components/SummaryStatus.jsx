import { Progress, Select, SelectItem , Chip} from "@heroui/react";
import { useState } from "react";

const companies = [
  { label: "Entel - IOT", value: "entel" },
  { label: "Cartavio - IOT", value: "cartavio" },
];

export default function SummaryStatus() {
  const [valueSelected, setValueSelected] = useState(new Set(["entel"]));

  const statusItems = [
    { label: "Inactivos", count: 30, color: "bg-[#A3B3FF]" },
    { label: "Fallas", count: 10, color: "bg-[#637CFF]" },
    { label: "Sin Señal", count: 2, color: "bg-[#1D2FB0]" },
  ];

  const totalDispositivos = 140;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-white/60">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h3 className="text-xl font-bold text-[#1B254B]">
            Inactivo, Fallas sin señal
          </h3>
          <p className="text-sm text-slate-400">
            Resumen general de dispositivos inactivos fallas y sin señales
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Select
            selectedKeys={valueSelected}
            onSelectionChange={setValueSelected}
            variant="flat"
            label="Empresa"
            size="sm"
            className="w-40"
            classNames={{
              trigger: "bg-slate-50 rounded-xl h-10",
              value: "text-[11px] font-bold text-slate-500",
            }}
          >
            {companies.map((c) => (
              <SelectItem key={c.value} textValue={c.label}>
                {c.label}
              </SelectItem>
            ))}
          </Select>

          <div className="hidden lg:flex gap-4">
            {statusItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded ${item.color}`} />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <button className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:bg-slate-100 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {statusItems.map((item) => (
          <div key={item.label} className="space-y-4">            
            <Chip color="default" size="sm">
              {item.count} Dispositivos
            </Chip>
            <Progress
              aria-label={item.label}
              size="md"
              radius="full"
              value={(item.count / totalDispositivos) * 100}
              classNames={{
                base: "max-w-full",
                track: "bg-slate-100 h-2.5",
                indicator: `${item.color} h-2.5`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
