import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { DateRangePicker } from "@heroui/react";
import { parseDate } from "@internationalized/date";

const data = [
  { name: "Jan", conectados: 26 },
  { name: "Feb", conectados: 27 },
  { name: "Mar", conectados: 30 },
  { name: "Apr", conectados: 28 },
  { name: "May", conectados: 27 },
  { name: "Jun", conectados: 26 },
  { name: "Jul", conectados: 28 },
  { name: "Ago", conectados: 28 },
  { name: "Sep", conectados: 28 },
];

export default function DeviceChart() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-white space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-lg font-bold text-[#1B254B] border-b-2 border-blue-600 inline-block">
            Dispositivos conectados
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Vista total de conectado por empresa
          </p>
        </div>

        <div className="w-full md:w-80">
          <DateRangePicker
            variant="flat"
            size="sm"
            label="Seleccione rango"
            aria-label="Rango de fechas"
            placeholderValue={parseDate("2024-04-01")}
            defaultValue={{
              start: parseDate("2024-04-01"),
              end: parseDate("2024-08-04"),
            }}
          />
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
            barGap={8}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f8f8f8"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A3AED0", fontSize: 12, fontWeight: 600 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A3AED0", fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: "#F4F7FE" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-[#2B3674] text-white p-3 rounded-2xl shadow-2xl border border-white/10">
                      <p className="text-[10px] font-bold opacity-70 mb-1 uppercase tracking-wider">
                        Entel - IOT
                      </p>
                      <p className="text-sm font-bold">{`${payload[0].value} / 140`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="conectados" radius={[10, 10, 10, 10]} barSize={45}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.name === "Mar" ? "#304FFE" : "#E9EDF7"}
                  className="transition-all duration-300 hover:opacity-80"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
