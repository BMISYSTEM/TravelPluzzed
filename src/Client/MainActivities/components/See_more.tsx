import React from 'react';

const VerMas = () => {
  const handleClick = () => {
    alert("¡El botón 'Ver más' ha sido clickeado!");
  };

  return (
    <button
      onClick={handleClick}
      className="border border-indigo-600 text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
    >
      Ver más
    </button>
  );
};

export default VerMas;
