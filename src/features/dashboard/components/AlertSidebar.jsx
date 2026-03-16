export default function AlertSidebar() {
  const alerts = [1, 2, 3, 4, 5]; 

  return (
    <aside className="w-full lg:w-90 bg-white rounded-3xl shadow-sm border border-white p-5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-xl text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
            </svg>
          </div>
          <h2 className="font-bold text-[#1B254B]">Alertas Activas</h2>
        </div>
      </div>

      <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
        {alerts.map((i) => (
          <div
            key={i}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-colors"
          >
            <div className="flex justify-between text-[10px] text-slate-400 font-bold mb-2">
              <span>ENTEL - IOT</span>
              <span>07/03/2026 14:46</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-slate-700">
                  Dispositivo A
                </p>
                <p className="text-[10px] text-slate-500">ID: 9872231232312</p>
              </div>
            </div>
            <p className="mt-2 text-[11px] font-medium text-red-500">
              Dispositivo Desconectado
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}
