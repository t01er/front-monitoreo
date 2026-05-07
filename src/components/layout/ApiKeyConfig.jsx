import { useState } from "react";

export default function ApiKeyConfig() {

  const [token, setToken] = useState(
    localStorage.getItem("external_token") || ""
  );

  const handleSave = () => {

    localStorage.setItem("external_token", token);

    alert("API Key guardada correctamente");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded-xl p-6 flex items-center gap-4">

    
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Ingresa tu API Key"
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <button
        onClick={handleSave}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Guardar
      </button>

    </div>
  );
}