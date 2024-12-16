import  { ChangeEvent, useState } from 'react'

export const BlogsLayout = () => {
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const files = Array.from(e.target.files);
        const previews = files.map((file) => URL.createObjectURL(file));
        setImagePreviews(previews.slice(0, 4)); // Limitar a 4 imágenes
      }
    };
  return (
    <div className="max-w-lg mx-auto  text-white p-6 rounded-lg ">
    <h2 className="text-2xl font-bold mb-6 text-center">Crear Nuevo Blog</h2>
    <form>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2" htmlFor="title">
          Título del Blog
        </label>
        <input
          type="text"
          id="title"
          className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
          placeholder="Ej. Una aventura en las montañas"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-300 mb-2" htmlFor="content">
          Contenido
        </label>
        <textarea
          id="content"
          className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
          placeholder="Escribe aquí el contenido del blog..."
          rows={6}
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-300 mb-2" htmlFor="images">
          Imágenes (máximo 4)
        </label>
        <input
          type="file"
          id="images"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="w-full text-gray-300"
        />
        <div className="grid grid-cols-2 gap-2 mt-4">
          {imagePreviews.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Preview ${index + 1}`}
              className="h-32 w-full object-cover rounded"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition"
        >
          Crear Blog
        </button>
      </div>
    </form>
  </div>
  )
}
