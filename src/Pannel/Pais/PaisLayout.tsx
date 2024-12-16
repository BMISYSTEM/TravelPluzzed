import ReactModal from "react-modal";
import { InputText } from "../../Components/InputText";
import React, { useState } from "react";
import { toast } from "react-toastify";

export const PaisLayout = () => {
  const [nombre, setNombre] = useState("");
  const [prefijo, setPrefijo] = useState("");
  const [foto, setFoto] = useState("");
  const [destacado, setDestacado] = useState(false);
  const [fotos, setFotos] = useState<File[]>([]);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      if (fileArray.length > 1) {
        alert("Puedes seleccionar hasta 1 imágenes.");
        return;
      }
      setFotos(fileArray);
    }
  };

  const createPais = async(e:React.FormEvent) =>{
    e.preventDefault()
    try {
            
    } catch (error) {
        toast.error('Error inesperado en el servidor')
    }
  }
  return (
    <section className="w-full flex flex-col gap-2 p-2">
      <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
        <thead>
          <tr className="text-left border-b border-gray-600 text-white">
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Nombre</th>
            <th className="py-2 px-4">Prefijo</th>
            <th className="py-2 px-4">Imagen</th>
            <th className="py-2 px-4">Destacado</th>
            <th className="py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-600">
            <td className="py-2 px-4">{}</td>
            <td className="py-2 px-4">{}</td>
            <td className="py-2 px-4">{}</td>
            <td className="py-2 px-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-white `}
              >
                {}
              </span>
            </td>
            <td className="py-2 px-4">{}</td>
            <td className="py-2 px-4 flex space-x-2">
              <button
                onClick={() => {}}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded transition"
              >
                Gestionar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <ReactModal
        isOpen={true}
        className={
          "w-full h-full flex  justify-center items-center backdrop-blur-sm"
        }
      >
        <section className="w-1/2  bg-slate-800 p-2 flex flex-col gap-5  rounded-xl">
          <div className="w-full flex flex-row justify-end">
            <button className="py-1 px-3 bg-red-500 hover:bg-red-800 text-white rounded-xl">
              Cerrar
            </button>
          </div>
          <form action="" className="w-full flex flex-col gap-5">
            <InputText
              nombre="Nombre del pais"
              setValue={setNombre}
              valueInput={nombre}
              type="text"
            />
            <InputText
              nombre="Prefijo del pais"
              setValue={setPrefijo}
              valueInput={prefijo}
              type="text"
            />
            <div className="flex flex-col gap-2 text-white items-center justify-center">
              <label htmlFor="">Destacado</label>
              <input
                type="checkbox"
                checked={destacado}
                onChange={() => setDestacado(!destacado)}
              />
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-4"
            />
            <button className="py-1 px-3 bg-green-500 text-white rounded-xl hover:bg-green-800 transition-all">
              Guardar
            </button>
          </form>
        </section>
      </ReactModal>
    </section>
  );
};
