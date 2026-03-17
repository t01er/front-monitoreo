import { Card, CardBody, Button, Chip, User, Tooltip } from "@heroui/react";
import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function UserManagement() {
  const staff = [
    { name: "Carlos Perez", role: "Super Admin", status: "Activo", email: "c.perez@gps.com" },
    { name: "Maria Sosa", role: "Operador", status: "Activo", email: "m.sosa@gps.com" },
    { name: "Juan Rivas", role: "Visualizador", status: "Inactivo", email: "j.rivas@gps.com" },
  ];

  return (
    <div className="py-6 space-y-6">
      <div className="flex justify-end">
        <Button color="primary" startContent={<PlusIcon className="w-5 h-5" />} className="font-bold rounded-2xl px-6">
          Añadir Nuevo Usuario
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.map((u, i) => (
          <Card key={i} className="border-none shadow-sm rounded-[2rem] hover:shadow-md transition-shadow">
            <CardBody className="p-6">
              <div className="flex justify-between items-start mb-6">
                <User 
                  name={u.name} 
                  description={u.email}
                  avatarProps={{ radius: "full", size: "lg", src: `https://i.pravatar.cc/150?u=${i}` }}
                />
                <Chip size="sm" variant="flat" color={u.status === "Activo" ? "success" : "danger"} className="font-bold">
                  {u.status}
                </Chip>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Rol asignado</p>
                  <p className="text-sm font-bold text-blue-600">{u.role}</p>
                </div>
                <div className="flex gap-2">
                  <Tooltip content="Editar Permisos">
                    <Button isIconOnly variant="light" size="sm" className="text-slate-400 hover:text-blue-500">
                      <PencilIcon className="w-5 h-5" />
                    </Button>
                  </Tooltip>
                  <Tooltip content="Eliminar" color="danger">
                    <Button isIconOnly variant="light" size="sm" className="text-slate-400 hover:text-red-500">
                      <TrashIcon className="w-5 h-5" />
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}