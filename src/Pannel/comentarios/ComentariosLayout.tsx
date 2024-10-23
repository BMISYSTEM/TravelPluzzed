import React, { ChangeEvent, useState } from 'react'
interface Review {
    id: number;
    customerName: string;
    tourName: string;
    rating: number;
    comment: string;
  }
  
  const initialReviews: Review[] = [
    { id: 1, customerName: "Juan Pérez", tourName: "Aventura en las montañas", rating: 8, comment: "¡Fue una experiencia increíble!" },
    { id: 2, customerName: "Ana Gómez", tourName: "Exploración en la selva", rating: 6, comment: "Buena, pero podría mejorar." },
    { id: 3, customerName: "Luis Martínez", tourName: "Recorrido cultural", rating: 3, comment: "No cumplió mis expectativas." },
    // Agrega más datos de ejemplo según sea necesario
  ];
export const ComentariosLayout = () => {
    const [reviews, setReviews] = useState<Review[]>(initialReviews);
    const [showForm, setShowForm] = useState(false);
    const [newReview, setNewReview] = useState<Partial<Review>>({
      customerName: "",
      tourName: "",
      rating: 1,
      comment: "",
    });
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setNewReview((prevReview) => ({
        ...prevReview,
        [id]: value,
      }));
    };
  
    const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
      setNewReview((prevReview) => ({
        ...prevReview,
        rating: Number(e.target.value),
      }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (newReview.customerName && newReview.tourName && newReview.rating && newReview.comment) {
        setReviews((prevReviews) => [
          ...prevReviews,
          { id: prevReviews.length + 1, ...newReview } as Review,
        ]);
        setNewReview({
          customerName: "",
          tourName: "",
          rating: 1,
          comment: "",
        });
        setShowForm(false);
      }
    };
  
    const handleManage = (id: number) => {
      console.log(`Gestionar opinión con ID: ${id}`);
    };
  
    const ratingColor = (rating: number) => {
      if (rating >= 8) return "bg-green-500";
      if (rating >= 5) return "bg-yellow-500";
      return "bg-red-500";
    };
  return (
    <div className="max-w-4xl mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-center">Opiniones de Tours</h2>
    
    {showForm && (
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Nuevo Comentario</h3>
        <form onSubmit={handleSubmit} className="bg-gray-700 p-4 rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="customerName">
              Nombre del Cliente
            </label>
            <input
              type="text"
              id="customerName"
              value={newReview.customerName || ""}
              onChange={handleInputChange}
              className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Ej. María Fernández"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="tourName">
              Nombre del Tour
            </label>
            <input
              type="text"
              id="tourName"
              value={newReview.tourName || ""}
              onChange={handleInputChange}
              className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Ej. Safari en África"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="rating">
              Puntuación (1-10)
            </label>
            <input
              type="number"
              id="rating"
              value={newReview.rating || 1}
              onChange={handleRatingChange}
              min={1}
              max={10}
              className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="comment">
              Comentario
            </label>
            <textarea
              id="comment"
              value={newReview.comment || ""}
              onChange={handleInputChange}
              className="w-full px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Escribe tu comentario aquí..."
              rows={4}
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition"
            >
              Enviar Comentario
            </button>
          </div>
        </form>
      </div>
    )}

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
        {reviews.map((review) => (
          <tr key={review.id} className="border-b border-gray-600">
            <td className="py-2 px-4">{review.id}</td>
            <td className="py-2 px-4">{review.customerName}</td>
            <td className="py-2 px-4">{review.tourName}</td>
            <td className="py-2 px-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-white ${ratingColor(review.rating)}`}
              >
                {review.rating}
              </span>
            </td>
            <td className="py-2 px-4">{review.comment}</td>
            <td className="py-2 px-4 flex space-x-2">
              <button
                onClick={() => handleManage(review.id)}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded transition"
              >
                Gestionar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
