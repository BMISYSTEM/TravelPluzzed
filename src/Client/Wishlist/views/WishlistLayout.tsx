
import { TargetSugerence } from "../components/wishlits.component";
import {  useEffect, useState } from "react";


interface actividad {
  id: number;
  nombre: string;
  pais: number;
  ciudad: number;
  imagen: string;
  valor: number;
}
export const WishlistLayout = () => {
  const [actividades, setActividades] = useState<actividad[]>([]);
  useEffect(() => {
    const actividades: actividad[] = localStorage.getItem(
      "actividadesVisitadas"
    )
      ? JSON.parse(localStorage.getItem("actividadesVisitadas") as string)
      : [];
    setActividades(actividades);
  }, []);
  return (
    <section className="w-full flex flex-col items-center justify-center pt-6 bg-slate-100">
      {actividades?.length > 0 ? (
        <>
          <div className="w-full h-16 flex justify-center items-center">
            <h1 className="text-4xl font-sans text-gray-600">
              ¿Sigues interesado?
            </h1>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-16 pt-10 justify-center">
            {actividades?.length > 0
              ? actividades?.map((actividad, index) => (
                  <TargetSugerence
                    key={index}
                    id={actividad.id}
                    IMGcarta={
                      import.meta.env.VITE_URL_BACK_IMG + actividad.imagen
                    }
                    Descripcion={actividad.nombre}
                    reviews="0"
                    rating="0"
                    Valor={actividad.valor ? actividad.valor : 0}
                    Nombre={actividad.nombre}
                  />
                ))
              : null}
          </div>
        </>
      ) : null}
    </section>
  );
};
