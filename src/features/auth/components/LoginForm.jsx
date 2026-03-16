import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { Input, Switch, Button } from "@heroui/react";
export default function LoginForm() {
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("remember_email");
    if (savedEmail) {
      setEmail(savedEmail);
      setRemember(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (remember) {
      localStorage.setItem("remember_email", email);
    } else {
      localStorage.removeItem("remember_email");
    }
    const result = await login({ email, password });

    if (result.meta.requestStatus === "fulfilled") {
      navigate("/dashboard");
    }
  };

  return (
    <form className="pt-5" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        <Input
          label="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type={showPassword ? "text" : "password"}
          label="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endContent={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-sm text-gray-500"
            >
              {showPassword ? "Ocultar" : "Ver"}
            </button>
          }
        />
        <div className="flex items-center justify-between">
          <Switch isSelected={remember} onValueChange={setRemember} size="sm">
            Recordar cuenta
          </Switch>
        </div>
      </div>
      <Button
        type="submit"
        className="mt-5 w-full"
        color="primary"
        disabled={loading}
      >
        {loading ? "Ingresando..." : "Ingresar"}
      </Button>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>} 
    </form>
  );
}
