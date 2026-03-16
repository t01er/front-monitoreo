import LoginForm from "../components/LoginForm";
import { Button , addToast} from "@heroui/react";
export default function Login() {
  return (
    <div className="w-sm bg-white p-6 rounded-lg shadow">
      <div>
        <h2 className="text-xl font-bold ">Iniciar sesión</h2>
        <span className="text-sm">Ingrese su usuario y contraseña.</span>
      </div>

      <LoginForm />
    </div>
  );
}
