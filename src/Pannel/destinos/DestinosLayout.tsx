import React, { useState } from "react";
import { InputText } from "../../Components/InputText";
import { InputNumber } from "../../Components/InputNumber";
import TextAreaFormat from "../../Components/TextAreaFormat";
import { ClienteAxios } from "../../config/ClienteAxios";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import useSWR from "swr";
import { Succe, Tours } from "./interfaces/allTours";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import { ModalImagenes } from "./components/ModalImagenes";

export const DestinosLayout = () => {
  const navigate = useNavigate()
  const [pantalla, setpantalla] = useState(1);
  // inputs de tour
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [nombre_hotel, setNombreHotel] = useState("");
  const [habitacion_individual, setHabitacionIndividual] = useState(false);
  const [habitacion_doble, setHabitacionDoble] = useState(false);
  const [habitacion_triple, setHabitacionTriple] = useState(false);
  const [intinerario, setIntinerario] = useState("");
  const [duracion, setDuracion] = useState("");
  const [incluye, setIncluye] = useState("");
  const [no_incluye, setNoIncluye] = useState("");
  const [accesibilidad, setAccesibilidad] = useState("");
  const [mascotas, setMascotas] = useState(false);
  const [salidas, setSalidas] = useState("");
  const [punto_encuentro, setPuntoDeEncuentro] = useState("");
  const [reembolsable, setReembolsable] = useState(false);
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  // Estado para manejar los archivos seleccionados
  const [fotos, setFotos] = useState<File[]>([]);
  const [idEdit,setIdEdit] = useState<number>()
  const [modalImagen,setModalImagen] = useState(false)
  const [toutIdImagen,setTourIdImagen] = useState(0)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      if (fileArray.length > 20) {
        alert('Puedes seleccionar hasta 20 imágenes.');
        return;
      }
      setFotos(fileArray);
    }
    
  };
  // Manejador para eliminar una foto específica
  const handleRemoveFoto = (index: number) => {
    const updatedFotos = fotos.filter((_, i) => i !== index);
    setFotos(updatedFotos);
  };

  const handleclichform = async (e: React.FormEvent) => {
    e.preventDefault();
    const datos = {
      nombre,
      precio: precio.toString(),
      nombre_hotel,
      habitacion_doble: habitacion_doble ? '1' : '0',
      habitacion_triple: habitacion_triple ? '1' : '0',
      habitacion_individual: habitacion_individual ? '1' : '0',
      intinerario,
      duracion,
      incluye,
      no_incluye,
      accesibilidad,
      mascotas: mascotas ? '1' : '0',
      salidas,
      punto_encuentro,
      reembolsable: reembolsable ? '1' : '0',
      pais,
      ciudad,
      id:idEdit

    };
    
    // Crear el FormData
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("precio", precio.toString());
    formData.append("nombre_hotel", nombre_hotel);
    formData.append("habitacion_doble", habitacion_doble ? '1' : '0');
    formData.append("habitacion_triple", habitacion_triple ? '1' : '0');
    formData.append("habitacion_individual", habitacion_individual ? '1' : '0');
    formData.append("intinerario", intinerario);
    formData.append("duracion", duracion);
    formData.append("incluye", incluye);
    formData.append("no_incluye", no_incluye);
    formData.append("accesibilidad", accesibilidad);
    formData.append("mascotas", mascotas ? '1' : '0');
    formData.append("salidas", salidas);
    formData.append("punto_encuentro", punto_encuentro);
    formData.append("reembolsable", reembolsable ? '1' : '0');
    formData.append("pais", pais);
    formData.append("ciudad", ciudad);

   
    try {
      toast.success('Guardando informacion')
      if(!idEdit)
      {
        if (fotos) {
          for (let i = 0; i < fotos.length; i++) {
            formData.append('fotos', fotos[i]);
          }
        }
        const { data } = await ClienteAxios.post("/api/tour/create", formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data", // Este encabezado es importante para FormData
          },
        });
        console.log(data)
      }else{
        const { data } = await ClienteAxios.post("/api/tour/update/", datos, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
             // Este encabezado es importante para FormData
          },
        });
        console.log(data)
        setNombre("")
        setNombreHotel("")
        setPrecio(0)
        setHabitacionIndividual(false )
        setHabitacionDoble(false)
        setHabitacionTriple( false)
        setIntinerario("")
        setIncluye("")  
        setNoIncluye("")
        setDuracion("")
        setAccesibilidad("")
        setMascotas(false )
        setSalidas("")
        setPuntoDeEncuentro("")
        setReembolsable(false)
        setPais("")
        setCiudad("")
        setIdEdit(0)
      }
      toast.success('Proceso finalizado...')
      mutate()
      setpantalla(1)
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.data?.errors) {
          const errores = Object.values(error.response.data.errors) as {
            msg: string;
          }[];
          errores.forEach((err) => {
            toast.error(err.msg); // Mostrar los errores
          });
        } else {
          toast.error("Ocurrió un error desconocido.");
        }
      } else {
        console.error("Error inesperado:", error);
      }
    }
  };

  const deleteId = async(id:number)=>{
    try {
      await toast.promise(
        ClienteAxios.delete('/api/tour/delete/'+id,{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          }
        })
      ,{
        error:'Se genero un error inesperado contacte a soporte',
        pending:'Eliminando item',
        success:'El item se elimino con exito'
      }
      )
      mutate()
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.data?.errors) {
          const errores = Object.values(error.response.data.errors) as {
            msg: string;
          }[];
          errores.forEach((err) => {
            toast.error(err.msg); // Mostrar los errores
          });
        } else {
          toast.error("Ocurrió un error desconocido.");
        }
      } else {
        console.error("Error inesperado:", error);
      }
    }
  
  }



  const {data,isLoading,mutate} = useSWR('/api/tour/index',()=>
  ClienteAxios.get('/api/tour/index'))

  if(isLoading)
  {
    return (
      <div className="text-2xl flex flex-row items-center justify-center bg-slate-800 text-slate-300">
        <p>Cargando informacion</p>
      </div>
    )
  }
  const tour:Tours = data?.data;

  const editTour = (data:Succe) =>{
    toast.success('Editando Tour')
    setpantalla(3)
    /* llenado de campos */
    setNombre(data.nombre)
    setNombreHotel(data.nombre_hotel)
    setPrecio(data.precio)
    setHabitacionIndividual(data.habitacion_individual ? true : false )
    setHabitacionDoble(data.habitacion_doble ? true : false)
    setHabitacionTriple(data.habitacion_triple ? true : false)
    setIntinerario(data.intinerario)
    setIncluye(data.incluye)
    setNoIncluye(data.no_incluye)
    setDuracion(data.duracion)
    setAccesibilidad(data.accesibilidad)
    setMascotas(data.mascotas ? true : false )
    setSalidas(data.salidas)
    setPuntoDeEncuentro(data.punto_encuentro)
    setReembolsable(data.reembolsable ? true : false)
    setPais(data.pais)
    setCiudad(data.ciudad)
    setIdEdit(data.id)
    toast.success('Informacion cargada con exito')
  }
  return (
    <div className=" mx-auto bg-gray-800 text-white  rounded-lg shadow-lg p-2">
      <button
        onClick={() => setpantalla(pantalla === 1 ? 2 : 1)}
        className="bg-green-500 py-1 px-3 rounded-xl hover:bg-green-700 transition-all"
      >
        {pantalla === 1 ? "Nuevo tour" : "Ver lista"}
      </button>
      {pantalla === 1 ? (
        <section className="w-full h-full flex flex-col gap-2 text-sm">
          <table>
            <caption className="text-lg text-slate-200">
              Listado de tours
            </caption>
            <thead>
              <tr className="bg-gray-700 border-b border-slate-400">
                <th className=" py1 px-2">Nombre</th>
                <th className=" py1 px-2">Precio</th>
                <th className=" py1 px-2">Hotel</th>
                <th className=" py1 px-2">H-individual</th>
                <th className=" py1 px-2">H-doble</th>
                <th className=" py1 px-2">H-triple</th>
                <th className=" py1 px-2">Duracion</th>
                <th className=" py1 px-2">Mascotas</th>
                <th className=" py1 px-2">Punto_encuentro</th>
                <th className=" py1 px-2">Reembolsable</th>
                <th className=" py1 px-2">Pais</th>
                <th className=" py1 px-2">Ciudad</th>
                <th className=" py1 px-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tour.succes.map((tours,index)=>(
                <tr key={index} className="bg-gray-700 border-b border-slate-400">
                  <td className=" py1 px-2 ">{tours.nombre}</td>
                  <td className=" py1 px-2 ">{tours.precio}</td>
                  <td className=" py1 px-2 ">{tours.nombre_hotel}</td>
                  <td className=" py1 px-2 ">{tours.habitacion_individual ? 'Si' : 'No'}</td>
                  <td className=" py1 px-2 ">{tours.habitacion_doble ? 'Si' : 'No'}</td>
                  <td className=" py1 px-2 ">{tours.habitacion_triple ? 'Si' : 'No'}</td>

                  <td className=" py1 px-2 ">{tours.duracion}</td>
   
            
              
                  <td className=" py1 px-2 ">{tours.mascotas ? 'Si' : 'No'}</td>
                
                  <td className=" py1 px-2 ">{tours.punto_encuentro}</td>
                  <td className=" py1 px-2 ">{tours.reembolsable ? 'Si' : 'no'}</td>
                  <td className=" py1 px-2 ">{tours.pais}</td>
                  <td className=" py1 px-2 ">{tours.ciudad}</td>
                  <td className=" py1 px-2  ">
                    <div className="flex flex-col gap-2 p-2">
                      <button onClick={()=>deleteId(tours.id)} 
                      className="py-2 px-3 rounded-sm bg-red-500 hover:bg-red-800">
                        Eliminar
                      </button>
                      <button onClick={()=>editTour(tours)} 
                      className="py-2 px-3 rounded-sm bg-green-500 hover:bg-green-800">
                        Editar
                      </button>
                      <button onClick={()=>{
                        setModalImagen(true)
                        setTourIdImagen(tours.id)
                      }} 
                      className="py-2 px-3 rounded-sm bg-sky-500 hover:bg-sky-800">
                        Imagenes
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </section>
      ) : pantalla === 2 ?(
        <section className="w-full h-full flex justify-center items-center">
          <form encType="multipart/form-data" onSubmit={handleclichform} className="w-1/2">
            {/* titulo */}
            <div className="mb-4 w-1/2">
              <InputText
                type="text"
                nombre="Titulo del Tour"
                valueInput={nombre}
                setValue={setNombre}
              />
            </div>

            <div className="mb-4 w-1/3">
              <InputNumber
                nombre="Precio"
                setValue={setPrecio}
                valueInput={precio}
                type="number"
              />
            </div>
            <div className="mb-4 w-1/2">
              <InputText
                nombre="Hotel"
                valueInput={nombre_hotel}
                setValue={setNombreHotel}
                type="text"
              />
            </div>
            <section className="flex flex-row items-center justify-center gap-2">
              <div className="flex flex-row  items-center  justify-center gap-5 border p-2">
                <label className="block text-gray-300 " htmlFor="destination">
                  habitacion individual
                </label>
                <input
                  checked={habitacion_individual}
                  onChange={() =>
                    setHabitacionIndividual(!habitacion_individual)
                  }
                  type="checkbox"
                  id="destination"
                  className="  text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder="Nombre hotel"
                />
              </div>
              <div className="flex flex-row  items-center  justify-center gap-5 border p-2">
                <label className="block text-gray-300 " htmlFor="destination">
                  habitacion triple
                </label>
                <input
                  checked={habitacion_triple}
                  onChange={() => setHabitacionTriple(!habitacion_triple)}
                  type="checkbox"
                  id="destination"
                  className="  text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder="Nombre hotel"
                />
              </div>
              <div className="flex flex-row  items-center  justify-center gap-5 border p-2">
                <label className="block text-gray-300 " htmlFor="destination">
                  habitacion doble
                </label>
                <input
                  checked={habitacion_doble}
                  onChange={() => setHabitacionDoble(!habitacion_doble)}
                  type="checkbox"
                  id="destination"
                  className="  text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder="Nombre hotel"
                />
              </div>
            </section>
            {/* intinerario */}
            <div className="mb-4 mt-5">
              <p>Intinerario</p>
              <TextAreaFormat text={intinerario} setText={setIntinerario} />
            </div>

            <div className="mb-4">
              <InputText
                nombre={"Duracion"}
                setValue={setDuracion}
                valueInput={duracion}
                type="text"
              />
            </div>

            {/* Incluye */}
            <div className="mb-4 mt-5">
              <p>Incluye</p>
              <TextAreaFormat text={incluye} setText={setIncluye} />
            </div>
            {/* no Inclute */}
            <div className="mb-4 mt-5">
              <p>No Incluye</p>
              <TextAreaFormat text={no_incluye} setText={setNoIncluye} />
            </div>

            {/* accesibilidad */}
            <div className="mb-4 mt-5">
              <p>Accesibilidad</p>
              <TextAreaFormat text={accesibilidad} setText={setAccesibilidad} />
            </div>

            {/* Salidas */}
            <div className="mb-4 mt-5">
              <p>Salidas</p>
              <TextAreaFormat text={salidas} setText={setSalidas} />
            </div>

            <div className="mb-4">
              <InputText
                nombre="Punto de encuentro"
                setValue={setPuntoDeEncuentro}
                valueInput={punto_encuentro}
                type="text"
              />
            </div>
            <div className="mb-4">
            <select name="" id="" className="w-full py-2 bg-slate-800 border border-blue-300 rounded-lg">
                <option value="">Seleccione un pais</option>
              </select>
            </div>
            <div className="mb-4">
              <select name="" id="" className="w-full py-2 bg-slate-800 border border-blue-300 rounded-lg">
                <option value="">Seleccione una ciudad</option>
              </select>
            </div>
            <div className="flex flex-row  items-center  justify-center gap-5 border p-2">
              <label className="block text-gray-300 " htmlFor="destination">
                Mascotas
              </label>
              <input
                checked={mascotas}
                onChange={() => setMascotas(!mascotas)}
                type="checkbox"
                id="destination"
                className="  text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Nombre hotel"
              />
            </div>
            <div className="flex flex-row  items-center  justify-center gap-5 border p-2">
              <label className="block text-gray-300 " htmlFor="destination">
                Reembosable
              </label>
              <input
                checked={reembolsable}
                onChange={() => setReembolsable(!reembolsable)}
                type="checkbox"
                id="destination"
                className="  text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Nombre hotel"
              />
            </div>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="mb-4"
            />

            <p className="text-sm text-gray-500 mb-2">
              Máximo 20 fotos seleccionadas. Seleccionadas: {fotos.length}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {fotos.map((foto, index) => (
                <div
                  key={index}
                  className="relative w-20 h-20 border rounded overflow-hidden"
                >
                  <img
                    src={URL.createObjectURL(foto)}
                    alt={`preview-${index}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveFoto(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white text-xs rounded px-1"
                  >
                    ✖
                  </button>
                </div>
              ))}
            </div>
            {/* fotos */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gray-700 mt-10 hover:bg-gray-600 text-white font-bold py-1 px-4 rounded transition"
              >
                Crear Tour
              </button>
            </div>
          </form>
        </section>
      )
      :
        <section className="w-full h-full flex flex-col justify-center items-center">
          <p className="text-3xl text-slate-200 mb-5">Editar tour</p>
          <form encType="multipart/form-data" onSubmit={handleclichform} className="w-1/2">
            {/* titulo */}
            <div className="mb-4 w-1/2">
              <InputText
                type="text"
                nombre="Titulo del Tour"
                valueInput={nombre}
                setValue={setNombre}
              />
            </div>

            <div className="mb-4 w-1/3">
              <InputNumber
                nombre="Precio"
                setValue={setPrecio}
                valueInput={precio}
                type="number"
              />
            </div>
            <div className="mb-4 w-1/2">
              <InputText
                nombre="Hotel"
                valueInput={nombre_hotel}
                setValue={setNombreHotel}
                type="text"
              />
            </div>
            <section className="flex flex-row items-center justify-center gap-2">
              <div className="flex flex-row  items-center  justify-center gap-5 border p-2">
                <label className="block text-gray-300 " htmlFor="destination">
                  habitacion individual
                </label>
                <input
                  checked={habitacion_individual}
                  onChange={() =>
                    setHabitacionIndividual(!habitacion_individual)
                  }
                  type="checkbox"
                  id="destination"
                  className="  text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder="Nombre hotel"
                />
              </div>
              <div className="flex flex-row  items-center  justify-center gap-5 border p-2">
                <label className="block text-gray-300 " htmlFor="destination">
                  habitacion triple
                </label>
                <input
                  checked={habitacion_triple}
                  onChange={() => setHabitacionTriple(!habitacion_triple)}
                  type="checkbox"
                  id="destination"
                  className="  text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder="Nombre hotel"
                />
              </div>
              <div className="flex flex-row  items-center  justify-center gap-5 border p-2">
                <label className="block text-gray-300 " htmlFor="destination">
                  habitacion doble
                </label>
                <input
                  checked={habitacion_doble}
                  onChange={() => setHabitacionDoble(!habitacion_doble)}
                  type="checkbox"
                  id="destination"
                  className="  text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder="Nombre hotel"
                />
              </div>
            </section>
            {/* intinerario */}
            <div className="mb-4 mt-5">
              <p>Intinerario</p>
              <TextAreaFormat text={intinerario} setText={setIntinerario} />
            </div>

            <div className="mb-4">
              <InputText
                nombre={"Duracion"}
                setValue={setDuracion}
                valueInput={duracion}
                type="text"
              />
            </div>

            {/* Incluye */}
            <div className="mb-4 mt-5">
              <p>Incluye</p>
              <TextAreaFormat text={incluye} setText={setIncluye} />
            </div>
            {/* no Inclute */}
            <div className="mb-4 mt-5">
              <p>No Incluye</p>
              <TextAreaFormat text={no_incluye} setText={setNoIncluye} />
            </div>

            {/* accesibilidad */}
            <div className="mb-4 mt-5">
              <p>Accesibilidad</p>
              <TextAreaFormat text={accesibilidad} setText={setAccesibilidad} />
            </div>

            {/* Salidas */}
            <div className="mb-4 mt-5">
              <p>Salidas</p>
              <TextAreaFormat text={salidas} setText={setSalidas} />
            </div>

            <div className="mb-4">
              <InputText
                nombre="Punto de encuentro"
                setValue={setPuntoDeEncuentro}
                valueInput={punto_encuentro}
                type="text"
              />
            </div>
            <div className="mb-4">
              <InputText
                nombre="Pais"
                setValue={setPais}
                valueInput={pais}
                type="text"
              />
            </div>
            <div className="mb-4">
              <InputText
                nombre="Ciudad"
                setValue={setCiudad}
                valueInput={ciudad}
                type="text"
              />
            </div>
            <div className="flex flex-row  items-center  justify-center gap-5 border p-2">
              <label className="block text-gray-300 " htmlFor="destination">
                Mascotas
              </label>
              <input
                checked={mascotas}
                onChange={() => setMascotas(!mascotas)}
                type="checkbox"
                id="destination"
                className="  text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Nombre hotel"
              />
            </div>
            <div className="flex flex-row  items-center  justify-center gap-5 border p-2">
              <label className="block text-gray-300 " htmlFor="destination">
                Reembosable
              </label>
              <input
                checked={reembolsable}
                onChange={() => setReembolsable(!reembolsable)}
                type="checkbox"
                id="destination"
                className="  text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Nombre hotel"
              />
            </div>

            
            {/* fotos */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gray-700 mt-10 hover:bg-gray-600 text-white font-bold py-1 px-4 rounded transition"
              >
                Guardar cambios
              </button>
            </div>
          </form>
        </section>
      }
      <ReactModal isOpen={modalImagen} className="w-full h-full flex items-center justify-center backdrop-blur-sm">
        <section className="w-1/2 h-full bg-white flex flex-col gap-2 p-2">
          <div className="w-full flex justify-end">
            <button onClick={()=>{
              setTourIdImagen(0)
              setModalImagen(false)}} className="bg-red-500 hover:bg-red-800 text-white py-1 px-3 rounded-xl">
              Cerrar
            </button>
          </div>
          <ModalImagenes id={toutIdImagen}/>
        </section>
      </ReactModal>
    </div>
  );
};
