import { Select, SelectItem, Progress } from "@heroui/react"; // Importamos Progress
import { useState } from "react";

export const companies = [
  { label: "Entel - IOT", value: "entel" },
  { label: "Cartavio - IOT", value: "cartavio" },
  { label: "Mall - Trujillo", value: "mall_trujillo" },
];

export default function StatCard({ title, value, percentage, variant }) {
  const isPrimary = variant === "primary";
  const [valueSelected, setValueSelected] = useState(new Set(["entel"]));

  return (
    <div
      className={`p-6 rounded-3xl shadow-sm border border-white/50 transition-all hover:scale-[1.02] flex flex-col justify-between
      ${isPrimary ? "bg-gradient-to-br from-[#131E56] to-[#2A42BC] text-white" : "bg-white text-[#1B254B]"}`}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className={`text-sm font-bold ${isPrimary ? "text-white/80" : "text-slate-500"}`}>
            {title}
          </h3>
          <button className={`p-1 rounded-lg ${isPrimary ? "bg-white/20" : "bg-slate-100 text-slate-400"}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">{value}</span>
          <span className={`text-xs ${isPrimary ? "text-white/60" : "text-blue-600"}`}>
            {percentage}%
          </span>
        </div>

        <div className="mt-4">
          <Progress 
            aria-label={title}
            size="md"
            value={percentage} 
            radius="full"
            
          />
        </div>
      </div>

      <div className="mt-6">
        <Select
          disallowEmptySelection
          selectedKeys={valueSelected}
          label="Empresa"
          onSelectionChange={setValueSelected}
          variant="flat"
          className="max-w-full"
         
        >
          {companies.map((company) => (
            <SelectItem key={company.value} textValue={company.label}>
              {company.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}