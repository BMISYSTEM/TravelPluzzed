import { useState } from "react";
import { toast } from "react-toastify";
import { ClienteAxios } from "../../../config/ClienteAxios";
import { isAxiosError } from "axios";
import useSWR from "swr";
import gif from "../../../assets/footer.gif"
import { Disponibilidades, Succe } from "../interfaces/Disponibilidad";
export default function Disponibilidad({ id }: { id: number }) {
  const [listado, setListado] = useState(true);
  const [time, setTime] = useState("");
  const [lunes, setLunes] = useState(false);
  const [martes, setMartes] = useState(false);
  const [miercoles, setMiercoles] = useState(false);
  const [jueves, setJueves] = useState(false);
  const [viernes, setViernes] = useState(false);
  const [sabado, setSabado] = useState(false);
  const [domingo, setDomingo] = useState(false);

  const {data:horarios,isLoading,mutate} = useSWR('/api/tour/horario/index',()=>
    ClienteAxios.get('/api/tour/horario/index'))

  if(isLoading){
    return (
        <section className="w-full h-full flex flex-col gap-3 justify-center items-center">
            <img src={gif} alt="" className="w-96 " />
        </section>
    )
  }
    /* crear un nuevo horario */
  const handleClickCreateHorario = async (e:React.FormEvent) => {
    e.preventDefault();
    try {
        const datos = {
            hora_inicio:time,
            lunes,
            martes,
            miercoles,
            jueves,
            viernes,
            sabado,
            domingo,
            tour_id:id
        }
        const {} = await ClienteAxios.post('/api/tour/horario/create/',datos,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        });
        toast.success("Horario creado");
        /* pasa a la pantalla de listado */
        setListado(true);
        mutate()
    } catch (error) {
        if(isAxiosError(error)){
            if(error.response?.status === 400){
                const errors = error.response.data.error.errors
                errors.map((error:any)=>{
                    toast.error(error.msg);
                })
            }
        }else{
            toast.error("Error desconocido  al crear horario");
        }
      
    }
  };
  /* Eliminar nuevo horario */
  const deleteHorario = async(id:number) =>{
    try {
        await ClienteAxios.delete('/api/tour/horario/delete/'+id,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        toast.success('Horario eliminado')
        mutate()
    } catch (error) {
        toast.error('Error al eliminar')
  }
}
 
  let disponibilidad = horarios?.data.succes
   let filtrado:Succe[] = disponibilidad.filter((horario:any)=>horario.tour_id === id)
  return (
    <>
      {listado ? (
        <section className="w-full h-full flex flex-col gap-3">
          <div className="flex justify-start">
            <button
              className="bg-blue-500 text-white p-2 rounded-sm"
              onClick={() => setListado(false)}
            >
              Agregar
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th className="border">Hora</th>
                <th className="border">Lunes</th>
                <th className="border">Martes</th>
                <th className="border">Miercoles</th>
                <th className="border">Jueves</th>
                <th className="border">Viernes</th>
                <th className="border">Sabado</th>
                <th className="border">Domingo</th>
                <th className="border">Acciones</th>
              </tr>
            </thead>
            <tbody>
                {filtrado.map((horario,index:number)=>(
                    <tr key={index}>
                        <td className="border">{horario.hora_inicio}</td>
                        <td className="border">{horario.lunes ? 'Si':'No'}</td>
                        <td className="border">{horario.martes ? 'Si':'No'}</td>
                        <td className="border">{horario.miercoles ? 'Si':'No'}</td>
                        <td className="border">{horario.jueves ? 'Si':'No'}</td>
                        <td className="border">{horario.viernes ? 'Si':'No'}</td>
                        <td className="border">{horario.sabado ? 'Si':'No'}</td>
                        <td className="border">{horario.domingo ? 'Si':'No'}</td>
                        <td className="border">
                            <button onClick={()=>deleteHorario(horario.id)} className="bg-red-500 text-white p-2 rounded-sm">
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
              
            </tbody>
          </table>
        </section>
      ) : (
        <section className="w-full h-full flex flex-col gap-3">
          <div className="flex justify-start">
            <button
              className="bg-blue-500 text-white p-2 rounded-sm"
              onClick={() => setListado(true)}
            >
              Listado
            </button>
          </div>
          <form
            action=""
            onSubmit={handleClickCreateHorario}
            className="w-full max-w-md bg-white shadow-lg rounded-md p-6 space-y-4 border border-gray-200"
          >
            <div>
              <label htmlFor="time" className="block text-gray-700 font-medium">
                Hora
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <fieldset className="space-y-2">
              <legend className="text-gray-700 font-medium">
                Selecciona días
              </legend>
              
                <div  className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="days"
                    checked={lunes}
                    onChange={()=>setLunes(!lunes)}
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                  />
                  <label className="text-gray-600">
                    Lunes
                  </label>
                </div>
                <div  className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="days"
                    checked={martes}
                    onChange={()=>setMartes(!martes)}
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                  />
                  <label className="text-gray-600">
                    Martes
                  </label>
                </div>
                <div  className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="days"
                    checked={miercoles}
                    onChange={()=>setMiercoles(!miercoles)}
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                  />
                  <label className="text-gray-600">
                    Miércoles
                  </label>
                </div>
                <div  className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="days"
                    checked={jueves}
                    onChange={()=>setJueves(!jueves)}
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                  />
                  <label className="text-gray-600">
                    Jueves
                  </label>
                </div>
                <div  className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="days"
                    checked={viernes}
                    onChange={()=>setViernes(!viernes)}
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                  />
                  <label className="text-gray-600">
                    Viernes
                  </label>
                </div>
                <div  className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="days"
                    checked={sabado}
                    onChange={()=>setSabado(!sabado)}
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                  />
                  <label className="text-gray-600">
                    Sábado
                  </label>
                </div>
                <div  className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="days"
                    checked={domingo}
                    onChange={()=>setDomingo(!domingo)}
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                  />
                  <label className="text-gray-600">
                    Domingo
                  </label>
                </div>

            </fieldset>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              Guardar
            </button>
          </form>
        </section>
      )}
    </>
  );
}
