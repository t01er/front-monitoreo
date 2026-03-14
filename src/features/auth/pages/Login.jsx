import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="w-sm bg-white p-6 rounded-lg shadow">

      <h2 className="text-xl font-bold mb-4">
        Iniciar sesión
      </h2>

      <LoginForm />

    </div>
  );
}