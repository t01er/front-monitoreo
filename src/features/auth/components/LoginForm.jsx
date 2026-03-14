import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { Input } from "@heroui/react";
export default function LoginForm() {

  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const result = await login({ email, password });

    if (result.meta.requestStatus === "fulfilled") {
      navigate("/dashboard");
    }

  };

  return (
    <form onSubmit={handleSubmit}>      
      <Input
        label="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        label="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={loading}>
        {loading ? "Ingresando..." : "Ingresar"}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}