import { useState } from "react";

export const DestinosLayout = () => {
  const [pantalla, setpantalla] = useState(1);
  return (
    <div className=" mx-auto bg-gray-800 text-white  rounded-lg shadow-lg p-2">
      <button onClick={()=>setpantalla(pantalla === 1 ? 2 : 1)} className="bg-green-500 py-2 px-3 rounded-xl hover:bg-green-700 transition-all">
        {pantalla === 1 ? 'Nuevo tour' : 'Ver lista'}
      </button>
      {pantalla === 1 ? 
        <section className="w-full h-full flex flex-col gap-2 text-sm">
          <table>
            <caption className="text-lg text-slate-200">Listado de tours</caption>
            <thead>
              <tr className="bg-black">
                <th className="border-b py1 px-2">Nombre</th>
                <th className="border-b py1 px-2">Precio</th>
                <th className="border-b py1 px-2">Hotel</th>
                <th className="border-b py1 px-2">H-individual</th>
                <th className="border-b py1 px-2">H-doble</th>
                <th className="border-b py1 px-2">H-triple</th>
                <th className="border-b py1 px-2">Intinerario</th>
                <th className="border-b py1 px-2">Duracion</th>
                <th className="border-b py1 px-2">Incluye</th>
                <th className="border-b py1 px-2">No_incluye</th>
                <th className="border-b py1 px-2">Accesibilidad</th>
                <th className="border-b py1 px-2">Mascotas</th>
                <th className="border-b py1 px-2">Salidas</th>
                <th className="border-b py1 px-2">Punto_encuentro</th>
                <th className="border-b py1 px-2">Reembolsable</th>
                <th className="border-b py1 px-2">Pais</th>
                <th className="border-b py1 px-2">Ciudad</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-500">
                <td className=" py1 px-2">Nombre</td>
                <td className=" py1 px-2">Precio</td>
                <td className=" py1 px-2">Hotel</td>
                <td className=" py1 px-2">si</td>
                <td className=" py1 px-2">si</td>
                <td className=" py1 px-2">si</td>
                <td className=" py1 px-2">Intinerario</td>
                <td className=" py1 px-2">Duracion</td>
                <td className=" py1 px-2">Incluye</td>
                <td className=" py1 px-2">No_incluye</td>
                <td className=" py1 px-2">Accesibilidad</td>
                <td className=" py1 px-2">Mascotas</td>
                <td className=" py1 px-2">Salidas</td>
                <td className=" py1 px-2">Punto_encuentro</td>
                <td className=" py1 px-2">Reembolsable</td>
                <td className=" py1 px-2">Pais</td>
                <td className=" py1 px-2">Ciudad</td>
              </tr>
              <tr className="bg-slate-500">
                <td className=" py1 px-2">Nombre</td>
                <td className=" py1 px-2">Precio</td>
                <td className=" py1 px-2">Hotel</td>
                <td className=" py1 px-2">si</td>
                <td className=" py1 px-2">si</td>
                <td className=" py1 px-2">si</td>
                <td className=" py1 px-2">Intinerario</td>
                <td className=" py1 px-2">Duracion</td>
                <td className=" py1 px-2">Incluye</td>
                <td className=" py1 px-2">No_incluye</td>
                <td className=" py1 px-2">Accesibilidad</td>
                <td className=" py1 px-2">Mascotas</td>
                <td className=" py1 px-2">Salidas</td>
                <td className=" py1 px-2">Punto_encuentro</td>
                <td className=" py1 px-2">Reembolsable</td>
                <td className=" py1 px-2">Pais</td>
                <td className=" py1 px-2">Ciudad</td>
              </tr>
            </tbody>
          </table>
        </section>
      
      : (
        <section className="w-full h-full flex justify-center items-center">
          <form className="w-1/2">
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="title">
                Título del Tour
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Ej. Tour por las playas de Bali"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="destination">
                Destino
              </label>
              <input
                type="text"
                id="destination"
                className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Ej. Bali, Indonesia"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="date">
                Fecha de Salida
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="price">
                Precio por Persona
              </label>
              <input
                type="number"
                id="price"
                className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Ej. 1500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="description">
                Descripción
              </label>
              <textarea
                id="description"
                className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Describe los detalles del tour..."
                rows={4}
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition"
              >
                Crear Tour
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
};
