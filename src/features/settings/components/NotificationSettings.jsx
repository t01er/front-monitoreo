import { Card, CardBody, Switch, Button, Avatar, Divider, Input } from "@heroui/react";
import { ShieldCheckIcon, ChatBubbleLeftRightIcon, EnvelopeIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

const ChannelSwitch = ({ label, color, icon: Icon, defaultSelected }) => (
  <div className="flex flex-col items-center gap-2">
    <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{label}</span>
    <Switch 
      defaultSelected={defaultSelected}
      size="sm"
      color={color}
      startContent={<Icon className="w-3 h-3" />}
    />
  </div>
);

export default function NotificationSettings() {
  const users = [
    { id: 1, name: "Admin General", email: "admin@gps.com", initial: "A" },
    { id: 2, name: "Operador Nocturno", email: "ops@gps.com", initial: "O" },
  ];

  return (
    <div className="py-6 space-y-6">
      <Card className="border-none shadow-sm rounded-[2.5rem] p-4">
        <CardBody className="gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1B254B]">Reglas de Envío</h3>
              <p className="text-xs text-slate-400">Personaliza los medios de recepción por cada perfil.</p>
            </div>
          </div>
          <Divider className="opacity-50" />
          <div className="space-y-6">
            {users.map((user) => (
              <div key={user.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 hover:bg-slate-50 rounded-3xl transition-all">
                <div className="flex items-center gap-4">
                  <Avatar name={user.initial} className="bg-blue-600 text-white font-bold" />
                  <div>
                    <p className="font-bold text-[#1B254B]">{user.name}</p>
                    <p className="text-tiny text-slate-400">{user.email}</p>
                  </div>
                </div>
                <div className="flex gap-8 items-center">
                  <ChannelSwitch label="WhatsApp" color="success" icon={ChatBubbleLeftRightIcon} defaultSelected />
                  <ChannelSwitch label="Email" color="primary" icon={EnvelopeIcon} defaultSelected />
                  <ChannelSwitch label="Push" color="secondary" icon={DevicePhoneMobileIcon} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <Button color="primary" className="font-bold rounded-2xl px-10 shadow-lg shadow-blue-200">Guardar Configuración</Button>
          </div>
        </CardBody>
      </Card>

      {/* Alertas Críticas */}
      <Card className="border-none shadow-sm rounded-[2.5rem] p-8 bg-gradient-to-r from-slate-900 to-[#1B254B] text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold">Tiempo de Respuesta Crítica</h3>
            <p className="text-sm text-slate-400 max-w-sm">Define el umbral de minutos para alertas de desconexión masiva.</p>
          </div>
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-3xl border border-white/10">
            <Input type="number" label="Minutos" defaultValue="10" labelPlacement="outside" className="w-24" classNames={{ input: "text-white font-bold", label: "text-white/60" }} />
            <Button variant="flat" className="bg-white text-[#1B254B] font-bold mt-5">Actualizar</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}