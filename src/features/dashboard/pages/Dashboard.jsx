import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import StatCard from "../components/StatCard";
import AlertSidebar from "../components/AlertSidebar";
import DeviceChart from "../components/DeviceChart";
import SummaryStatus from "../components/SummaryStatus";
export default function Dashboard() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="flex flex-col lg:flex-row   gap-8">
      <main className="flex-1 space-y-8">
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-[#1B254B]">
              Bienvenido,{" "}
              <span className="text-blue-700">
                {user?.displayName || "Usuario"}
              </span>
            </h1>
            <p className="text-slate-500 font-bold uppercase tracking-wider text-sm">
              Dashboard
            </p>
          </div>
          <div className="text-slate-400 text-sm font-medium">
            Hora actual: {new Date().toLocaleDateString()}
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Dispositivos Inactivos"
            value="30"
            subValue="140"
            percentage={25}
            variant="primary"
          />
          <StatCard
            title="Dispositivos Fallas"
            value="10"
            subValue="140"
            percentage={7}
            variant="white"
          />
          <StatCard
            title="Dispositivos sin señal"
            value="2"
            subValue="140"
            percentage={1}
            variant="white"
          />
        </section>

        <DeviceChart />
        <SummaryStatus />
      </main>

      <AlertSidebar />
    </div>
  );
}
