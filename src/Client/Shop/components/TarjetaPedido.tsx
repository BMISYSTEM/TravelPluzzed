
import { ItemsConfig } from './ItemsConfig'
// imagenes
import bogota from '../assets/Bogotá.webp'

export default function TarjetaPedido() {
  return (
    <div className="w-96 h-auto bg-slate-200 flex flex-col gap-1 p-2 rounded-xl border hover:border-blue-950 transition-all">
                    {/* imagen */}
                    <div className="w-full h-52 ">
                        <img src={bogota} alt="" className="w-full h-full object-contain" />
                    </div>
                    {/* infromacion del paquete */}
                    <div className="w-full flex flex-col gap-1">
                        <p className="text-xl font-semibold text-blue-950"> nesciunt officia, accusamus ducimus optio.</p>
                        <p className="text-sm font-semibold text-blue-950">Fecha y Hora seleccionado: 11/12/2024 08:00 am</p>
                        {/* items */}
                        <ItemsConfig titulo="Adultos mayores de 15 años" valor={0}/>
                        <ItemsConfig titulo="Niños menores de 15 a 4 años" valor={0}/>
                        <ItemsConfig titulo="Niños menores de 3 años " valor={0}/>
                        <ItemsConfig titulo="Numero de mascotas" valor={0}/>
                        <p className="text-lg font-semibold text-blue-950">Valor Total USD 300</p>
                    </div>
                </div>
  )
}
