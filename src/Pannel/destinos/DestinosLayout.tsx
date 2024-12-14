import { useState } from "react";
import { InputText } from '../../Components/InputText';
import { InputNumber } from "../../Components/InputNumber";
import TextAreaFormat from "../../Components/TextAreaFormat";

export const DestinosLayout = () => {
  const [pantalla, setpantalla] = useState(1);
  // inputs de tour
  const [nombre,setNombre] = useState('')
  const [precio,setPrecio] = useState(0)
  const [nombre_hotel,setNombreHotel] = useState('')
  const [habitacion_individual,setHabitacionIndividual] = useState(false)
  const [habitacion_doble,setHabitacionDoble] = useState(false)
  const [habitacion_triple,setHabitacionTriple] = useState(false)
  const [intinerario,setIntinerario] = useState('')
  const [duracion,setDuracion] = useState('')
  const [incluye,setIncluye] = useState('')
  const [no_incluye,setNoIncluye] = useState('')
  const [accesibilidad,setAccesibilidad] = useState('')
  const [mascotas,setMascotas] = useState(false)
  const [salidas,setSalidas] = useState('')
  const [punto_encuentro,setPuntoDeEncuentro] = useState('')
  const [reembolsable,setReembolsable] = useState(false)
  const [pais,setPais] = useState('')
  const [ciudad,setCiudad] = useState('')
  return (
    <div className=" mx-auto bg-gray-800 text-white  rounded-lg shadow-lg p-2">
      <button onClick={()=>setpantalla(pantalla === 1 ? 2 : 1)} className="bg-green-500 py-1 px-3 rounded-xl hover:bg-green-700 transition-all">
        {pantalla === 1 ? 'Nuevo tour' : 'Ver lista'}
      </button>
      {pantalla === 1 ? 
        <section className="w-full h-full flex flex-col gap-2 text-sm">
          <table>
            <caption className="text-lg text-slate-200">Listado de tours</caption>
            <thead>
              <tr className="bg-black">
                <th className="border-b py1 px-2">Nombre</th>
                <th className="border-b py1 px-2">Precio</th>
                <th className="border-b py1 px-2">Hotel</th>
                <th className="border-b py1 px-2">H-individual</th>
                <th className="border-b py1 px-2">H-doble</th>
                <th className="border-b py1 px-2">H-triple</th>
                <th className="border-b py1 px-2">Intinerario</th>
                <th className="border-b py1 px-2">Duracion</th>
                <th className="border-b py1 px-2">Incluye</th>
                <th className="border-b py1 px-2">No_incluye</th>
                <th className="border-b py1 px-2">Accesibilidad</th>
                <th className="border-b py1 px-2">Mascotas</th>
                <th className="border-b py1 px-2">Salidas</th>
                <th className="border-b py1 px-2">Punto_encuentro</th>
                <th className="border-b py1 px-2">Reembolsable</th>
                <th className="border-b py1 px-2">Pais</th>
                <th className="border-b py1 px-2">Ciudad</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-500">
                <td className=" py1 px-2">Nombre</td>
                <td className=" py1 px-2">Precio</td>
                <td className=" py1 px-2">Hotel</td>
                <td className=" py1 px-2">si</td>
                <td className=" py1 px-2">si</td>
                <td className=" py1 px-2">si</td>
                <td className=" py1 px-2">Intinerario</td>
                <td className=" py1 px-2">Duracion</td>
                <td className=" py1 px-2">Incluye</td>
                <td className=" py1 px-2">No_incluye</td>
                <td className=" py1 px-2">Accesibilidad</td>
                <td className=" py1 px-2">Mascotas</td>
                <td className=" py1 px-2">Salidas</td>
                <td className=" py1 px-2">Punto_encuentro</td>
                <td className=" py1 px-2">Reembolsable</td>
                <td className=" py1 px-2">Pais</td>
                <td className=" py1 px-2">Ciudad</td>
              </tr>
              <tr className="bg-slate-500">
                <td className=" py1 px-2">Nombre</td>
                <td className=" py1 px-2">Precio</td>
                <td className=" py1 px-2">Hotel</td>
                <td className=" py1 px-2">si</td>
                <td className=" py1 px-2">si</td>
                <td className=" py1 px-2">si</td>
                <td className=" py1 px-2">Intinerario</td>
                <td className=" py1 px-2">Duracion</td>
                <td className=" py1 px-2">Incluye</td>
                <td className=" py1 px-2">No_incluye</td>
                <td className=" py1 px-2">Accesibilidad</td>
                <td className=" py1 px-2">Mascotas</td>
                <td className=" py1 px-2">Salidas</td>
                <td className=" py1 px-2">Punto_encuentro</td>
                <td className=" py1 px-2">Reembolsable</td>
                <td className=" py1 px-2">Pais</td>
                <td className=" py1 px-2">Ciudad</td>
              </tr>
            </tbody>
          </table>
        </section>
      
      : (
        <section className="w-full h-full flex justify-center items-center">
          <form className="w-1/2">
          {/* titulo */}
            <div className="mb-4 w-1/2">
              <InputText type="text" nombre="Titulo del Tour" valueInput={nombre} setValue={setNombre}/>
            </div>

            <div className="mb-4 w-1/3">
              <InputNumber nombre="Precio" setValue={setPrecio} valueInput={precio} type="number"/>
            </div>
            <div className="mb-4 w-1/2">
              <InputText nombre="Hotel" valueInput={nombre_hotel} setValue={setNombreHotel} type="text"/>
            </div>
            <section className="flex flex-row items-center justify-center gap-2">
              <div className="flex flex-row  items-center  justify-center gap-5 border p-2">
                <label className="block text-gray-300 " htmlFor="destination">
                  habitacion individual
                </label>
                <input
                  checked={habitacion_individual}
                  onChange={()=>setHabitacionIndividual(!habitacion_individual)}
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
                  onChange={()=>setHabitacionTriple(!habitacion_triple)}
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
                  onChange={(e)=>setHabitacionDoble(!habitacion_doble)}
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
              <TextAreaFormat setText={setIntinerario}/>   
            </div>

            <div className="mb-4">
              <InputText nombre={'Duracion'} setValue={setDuracion} valueInput={duracion} type="text" />
            </div>

            {/* Incluye */}
            <div className="mb-4 mt-5">
              <p>Incluye</p>
              <TextAreaFormat setText={setIncluye}/>   
            </div>
           
            {/* accesibilidad */}
            <div className="mb-4 mt-5">
              <p>Accesibilidad</p>
              <TextAreaFormat setText={setAccesibilidad}/>   
            </div>

            {/* Salidas */}
            <div className="mb-4 mt-5">
              <p>Salidas</p>
              <TextAreaFormat setText={setSalidas}/>   
            </div>

            <div className="mb-4">
              <InputText nombre="Punto de encuentro" setValue={setPuntoDeEncuentro} valueInput={punto_encuentro} type="text"/>
            </div>
            <div className="mb-4">
              <InputText nombre="Pais" setValue={setPais} valueInput={pais} type="text"/>
            </div>
            <div className="mb-4">
              <InputText nombre="Ciudad" setValue={setCiudad} valueInput={ciudad} type="text"/>
            </div>
            <div className="flex flex-row  items-center  justify-center gap-5 border p-2">
                <label className="block text-gray-300 " htmlFor="destination">
                  Mascotas
                </label>
                <input
                  checked={mascotas}
                  onChange={()=>setMascotas(!mascotas)}
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
                  onChange={()=>setReembolsable(!reembolsable)}
                  type="checkbox"
                  id="destination"
                  className="  text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder="Nombre hotel"
                />
            </div>
            <div className="flex flex-col  items-center  justify-center gap-5  text-white p-2">
                <label className="block text-gray-300 " >
                  Fotos
                </label>
                <input
                  checked={reembolsable}
                  onChange={()=>setReembolsable(!reembolsable)}
                  type="file"
                  multiple
                  max={20}
                  id="destination"
                  className="  text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder="Nombre hotel"
                />
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
      )}
    </div>
  );
};
