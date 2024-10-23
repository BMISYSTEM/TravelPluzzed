import React, { ChangeEvent, useState } from 'react'
interface FormData {
    title: string;
    description: string;
    paragraph1: string;
    paragraph2: string;
    mainImage: string | null;
    additionalImages: string[];
    videoUrl: string;
  }
export const NosotrosLayout = () => {
    const [formData, setFormData] = useState<FormData>({
        title: "",
        description: "",
        paragraph1: "",
        paragraph2: "",
        mainImage: null,
        additionalImages: [],
        videoUrl: "",
      });
    
      const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };
    
      const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          const { id } = e.target;
          if (id === "mainImage") {
            setFormData((prevData) => ({
              ...prevData,
              mainImage: URL.createObjectURL(e.target.files[0]),
            }));
          } else if (id === "additionalImages") {
            const files = Array.from(e.target.files);
            const newImages = files.map((file) => URL.createObjectURL(file));
            setFormData((prevData) => ({
              ...prevData,
              additionalImages: newImages.slice(0, 5), // Limitar a 5 imágenes
            }));
          }
        }
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí se enviaría la información del formulario
        console.log("Datos del formulario:", formData);
      };
  return (
    <div className="max-w-4xl mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold mb-6 text-center">Agregar Información de la Empresa</h2>
        <form onSubmit={handleSubmit} >
        <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="title">
            Título
            </label>
            <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Ej. Nuestra Empresa"
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="description">
            Descripción
            </label>
            <textarea
            id="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Escribe aquí una descripción de la empresa..."
            rows={4}
            ></textarea>
        </div>

        <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="paragraph1">
            Primer Párrafo
            </label>
            <textarea
            id="paragraph1"
            value={formData.paragraph1}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Escribe el primer párrafo..."
            rows={4}
            ></textarea>
        </div>

        <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="paragraph2">
            Segundo Párrafo
            </label>
            <textarea
            id="paragraph2"
            value={formData.paragraph2}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Escribe el segundo párrafo..."
            rows={4}
            ></textarea>
        </div>

        <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="mainImage">
            Imagen Principal
            </label>
            <input
            type="file"
            id="mainImage"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full text-gray-300"
            />
            {formData.mainImage && (
            <img
                src={formData.mainImage}
                alt="Imagen Principal"
                className="mt-4 w-full h-64 object-cover rounded-lg"
            />
            )}
        </div>

        <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="additionalImages">
            Imágenes Adicionales (máximo 5)
            </label>
            <input
            type="file"
            id="additionalImages"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="w-full text-gray-300"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
            {formData.additionalImages.map((src, index) => (
                <img
                key={index}
                src={src}
                alt={`Imagen Adicional ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
                />
            ))}
            </div>
        </div>

        <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="videoUrl">
            URL del Video
            </label>
            <input
            type="text"
            id="videoUrl"
            value={formData.videoUrl}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="https://youtube.com/ejemplo"
            />
        </div>

        <div className="mb-4">
            {formData.videoUrl && (
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                src={formData.videoUrl}
                title="Video"
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
            </div>
            )}
        </div>

        <div className="flex justify-center">
            <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition"
            >
            Enviar
            </button>
        </div>
        </form>
    </div>
  )
}
