import { ChangeEvent, useState } from "react";
interface Post {
    title: string;
    description: string;
    images: string[];
  }

export const FotosLayout = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState<string[]>([]);
  
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages(newImages.slice(0, 10)); // Limitar a 10 imágenes
      }
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (title && description && images.length > 0) {
        setPosts((prevPosts) => [
          ...prevPosts,
          { title, description, images },
        ]);
        setTitle("");
        setDescription("");
        setImages([]);
      }
    };
  
    const handleRemoveImage = (postIndex: number, imageIndex: number) => {
      setPosts((prevPosts) => {
        const updatedPosts = [...prevPosts];
        updatedPosts[postIndex].images = updatedPosts[postIndex].images.filter(
          (_, i) => i !== imageIndex
        );
        return updatedPosts;
      });
    };
  
  return (
    <div className="max-w-lg mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Crear Nuevo Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="title">
            Título
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Ej. Una aventura en las montañas"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="description">
            Descripción
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Escribe aquí la descripción del post..."
            rows={4}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="images">
            Cargar Imágenes (máximo 10)
          </label>
          <input
            type="file"
            id="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full text-gray-300"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {images.map((src, index) => (
              <div key={index} className="relative group">
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setImages(images.filter((_, i) => i !== index))}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Crear Post
          </button>
        </div>
      </form>

      {posts.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Publicaciones</h3>
          {posts.map((post, postIndex) => (
            <div key={postIndex} className="mb-6">
              <h4 className="text-lg font-bold">{post.title}</h4>
              <p className="mb-2">{post.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {post.images.map((src, imageIndex) => (
                  <div key={imageIndex} className="relative group">
                    <img
                      src={src}
                      alt={`Post ${postIndex + 1} Image ${imageIndex + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(postIndex, imageIndex)}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
