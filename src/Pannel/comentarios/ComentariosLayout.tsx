import  {  useState } from 'react'

 
export const ComentariosLayout = () => {
    
    const [showForm, setShowForm] = useState(false);

  
  
  
   
  
 
  return (
    <div className="max-w-4xl mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-center">Opiniones de Tours</h2>
    
  

    <div className="mb-6 flex justify-end">
      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded transition"
      >
        {showForm ? "Cancelar" : "Nuevo"}
      </button>
    </div>

    <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
      <thead>
        <tr className="text-left border-b border-gray-600">
          <th className="py-2 px-4">ID</th>
          <th className="py-2 px-4">Cliente</th>
          <th className="py-2 px-4">Tour</th>
          <th className="py-2 px-4">Puntuación</th>
          <th className="py-2 px-4">Comentario</th>
          <th className="py-2 px-4">Acciones</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </table>
  </div>
  )
}
