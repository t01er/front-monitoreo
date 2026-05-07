import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTechnicals } from "../technicalSlice";

export default function Technical() {
  const dispatch = useDispatch();

  const { technicals, loading } = useSelector(
    (state) => state.technical
  );

  useEffect(() => {
    dispatch(fetchTechnicals());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Technical Page</h1>

      {loading ? (
        <p>Cargando técnicos...</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Nombre</th>
              <th className="p-2 border">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {technicals?.map((tech) => (
              <tr key={tech.id}>
                <td className="p-2 border">{tech.id}</td>
                <td className="p-2 border">{tech.name}</td>

                <td className="p-2 border">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}