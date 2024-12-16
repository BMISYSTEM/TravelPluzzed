import rome from '../assets/rome-italy.webp'
import Bogota from '../assets/Bogotá.webp'
import { TargetSugerence } from '../components/wishlits.component'


export const WishlistLayout = () => {
  return (
<section className="w-full flex flex-col items-center justify-center pt-6 bg-slate-100">
    <div className="w-full h-16 flex justify-center items-center">
      <h1 className="text-4xl font-sans text-gray-600">¿Sigues interesado?</h1>
    </div>

  <div className='flex flex-wrap gap-x-6 gap-y-16 pt-10 justify-center'>

  <TargetSugerence
   IMGcarta={Bogota}
   Descripcion='Ciudad de Colombia'
   reviews='8000'
   rating='4.3'
   Valor='80000'
   Nombre='Bogota, Colombia'/>

  <TargetSugerence IMGcarta={rome} Nombre='Roma, Italia' Valor='120000' rating='3.2' Descripcion='Paseo y charla de la antigua capital del mundo' reviews='6000' />

  </div>
</section>
  )
}
