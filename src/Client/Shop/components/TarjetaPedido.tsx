
import { ItemsConfig } from './ItemsConfig'
// imagenes
import { Link } from 'react-router-dom';


interface Props {
  nomnbre: string;
  fecha: string;
  mayores_15: number;
  de_4_15: number;
  menores_3: number;
  mascotas: number;
  precio: number;
  imagen: string;
  id:number;
}
export default function TarjetaPedido({nomnbre,fecha,mayores_15,menores_3,mascotas,precio,imagen,de_4_15,id}: Props) {

  


  return (
    <div className="w-96 h-auto bg-slate-200 flex flex-col gap-1 p-2 rounded-xl border hover:border-blue-950 transition-all">
                    {/* imagen */}
                    <div className="w-full h-52 ">
                        <img src={import.meta.env.VITE_URL_BACK_IMG+imagen} alt="" className="w-full h-full object-contain" />
                    </div>
                    {/* infromacion del paquete */}
                    <div className="w-full flex flex-col gap-1">
                        <p className="text-xl font-semibold text-blue-950"> {nomnbre}</p>
                        <p className="text-sm font-semibold text-blue-950">Fecha y Hora seleccionado: {fecha}</p>
                        {/* items */}
                        <ItemsConfig titulo="Adultos mayores de 15 años" valor={mayores_15} id={id} option={1} />
                        <ItemsConfig titulo="Niños menores de 15 a 4 años" valor={de_4_15} id={id} option={2}/>
                        <ItemsConfig titulo="Niños menores de 3 años " valor={menores_3} id={id} option={3}/>
                        <ItemsConfig titulo="Numero de mascotas" valor={mascotas} id={id} option={4}/>
                        <p className="text-lg font-semibold text-blue-950">Valor Total USD {precio}</p>
                        <div className='w-full flex flex-row justify-center gap-5'>
                          <button className='bg-red-500 text-white p-2 rounded-sm'>
                            Eliminar
                          </button>
                          <Link to={`/actividades/detalle/local/${id}`} className='bg-blue-950 text-white p-2 rounded-sm'>
                            Ver detalle del tour
                          </Link>
                        </div>
                    </div>
                </div>
  )
}
