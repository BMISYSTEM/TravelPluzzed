

export const DestinosLayout = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-center">Crear Tour de Vacaciones</h2>
    <form>
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
  </div>
  )
}
