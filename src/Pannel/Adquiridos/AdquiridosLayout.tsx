
interface Tour {
    id: number;
    customerName: string;
    tourName: string;
    status: "cancelado" | "completo" | "pendiente";
  }
  
  const toursData: Tour[] = [
    { id: 1, customerName: "Juan Pérez", tourName: "Aventura en las montañas", status: "pendiente" },
    { id: 2, customerName: "Ana Gómez", tourName: "Exploración en la selva", status: "completo" },
    { id: 3, customerName: "Luis Martínez", tourName: "Recorrido cultural", status: "cancelado" },
    // Agrega más datos de ejemplo según sea necesario
  ];
export const AdquiridosLayout = () => {
    const handleEdit = (id: number) => {
        console.log(`Editar tour con ID: ${id}`);
      };
    
      const handleDelete = (id: number) => {
        console.log(`Eliminar tour con ID: ${id}`);
      };
  return (
    <div className="max-w-4xl mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-center">Tours Adquiridos</h2>
    <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
      <thead>
        <tr className="text-left border-b border-gray-600">
          <th className="py-2 px-4">ID</th>
          <th className="py-2 px-4">Cliente</th>
          <th className="py-2 px-4">Tour</th>
          <th className="py-2 px-4">Estado</th>
          <th className="py-2 px-4">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {toursData.map((tour) => (
          <tr key={tour.id} className="border-b border-gray-600">
            <td className="py-2 px-4">{tour.id}</td>
            <td className="py-2 px-4">{tour.customerName}</td>
            <td className="py-2 px-4">{tour.tourName}</td>
            <td className="py-2 px-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-white ${
                  tour.status === "pendiente"
                    ? "bg-yellow-500"
                    : tour.status === "completo"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {tour.status}
              </span>
            </td>
            <td className="py-2 px-4 flex space-x-2">
              <button
                onClick={() => handleEdit(tour.id)}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded transition"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(tour.id)}
                className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-2 rounded transition"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
