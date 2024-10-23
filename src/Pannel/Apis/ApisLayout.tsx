import React, { useState } from 'react'
interface API {
    id: number;
    name: string;
    url: string;
    isActive: boolean;
  }
  
  const initialAPIs: API[] = [
    { id: 1, name: "API de FreeTour", url: "https://api.example.com/users", isActive: true },
    { id: 2, name: "API de Local", url: "https://api.example.com/products", isActive: false },
    { id: 3, name: "API de Externa", url: "https://api.example.com/orders", isActive: true },
    // Agrega más APIs según sea necesario
  ]; 
export default function ApisLayout() {
    const [apis, setApis] = useState<API[]>(initialAPIs);

    const toggleAPIStatus = (id: number) => {
      setApis((prevAPIs) =>
        prevAPIs.map((api) =>
          api.id === id ? { ...api, isActive: !api.isActive } : api
        )
      );
    };
  
  return (
    <div className="max-w-4xl mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-center">Gestión de APIs</h2>
    
    <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
      <thead>
        <tr className="text-left border-b border-gray-600">
          <th className="py-2 px-4">ID</th>
          <th className="py-2 px-4">Nombre</th>
          <th className="py-2 px-4">URL</th>
          <th className="py-2 px-4">Estado</th>
          <th className="py-2 px-4">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {apis.map((api) => (
          <tr key={api.id} className="border-b border-gray-600">
            <td className="py-2 px-4">{api.id}</td>
            <td className="py-2 px-4">{api.name}</td>
            <td className="py-2 px-4">{api.url}</td>
            <td className="py-2 px-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-white ${api.isActive ? "bg-green-500" : "bg-red-500"}`}
              >
                {api.isActive ? "Activo" : "Inactivo"}
              </span>
            </td>
            <td className="py-2 px-4 flex space-x-2">
              <button
                onClick={() => toggleAPIStatus(api.id)}
                className={`text-white font-bold py-1 px-2 rounded transition ${api.isActive ? "bg-red-500 hover:bg-red-400" : "bg-green-500 hover:bg-green-400"}`}
              >
                {api.isActive ? "Desactivar" : "Activar"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
