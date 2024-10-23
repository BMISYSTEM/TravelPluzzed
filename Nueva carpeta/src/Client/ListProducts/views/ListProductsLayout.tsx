import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ListaTours } from "../interface/ListProductsInterface";
import { ClientFooter } from "../../Footer/ClientFooter";
import RangeSlider from "../components/rangeSlider.";
import CaracteristicaDropdown from "../components/DropdownCaracteristic";
import DisponibilidadDropdown from "../components/Dropdown";


export const ListProductsLayout = () => {
  const [products, setProducts] = useState<ListaTours>();
  const [loading, setloading] = useState<boolean>(false);
  const { uuid } = useParams();
  useEffect(() => {
    const consulta = async () => {
      try {
        setloading(true);
        const { data } = await axios.get(
          `https://apitravelnode.vercel.app/api/freetours/tours/${uuid}`
        );
        setloading(false);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    consulta();
  }, []);
  if (loading) {
    return <h1>Cargando la informacion de la api</h1>;
  }
  const lista = products?.data?.tours;
  const caracteristicas = ["Comida", "aguasnegras", "Característica 3"];

  return (
    <section className="w-full h-full gap-2 bg-slate-100">
      <div className="flex flex-row">
        {/* filtros */}
        <div className="w-1/5 h-auto flex flex-col pl-2 bg-slate-100">
          <p className="font-bold pl-24">filtros</p>

          <DisponibilidadDropdown opcion="Disponibilidad" />

          {/* 2do filtro */}
          <RangeSlider opcion="Hora de inicio" />

          {/* 3ro filtro */}
          <CaracteristicaDropdown
            opcion="categorias"
            caracteristicas={caracteristicas}
          />

          {/* 4to filtro */}
        </div>

        {/* lista productos */}
        <div className="w-full h-full flex flex-col bg-slate-100 p-4 gap-8">
          {/* trajeta */}
          {lista
            ? lista.map((tours, index) => (
                <Link to={"/activity/n"} className="hover:shadow-xl">
                  <div
                    key={index}
                    className="bg-white w-full h-full flex flex-row rounded-sm"
                  >
                    <div className=" p-1 items-center justify-center h-auto w-1/4 ">
                      <img
                        className="w-full  h-full object-contain"
                        src={tours.titleImageURL}
                        alt=""
                      />
                    </div>
                    {/* <img src={tours.images[1].URL} alt="" /> */}
                    {/* titulo */}
                    <div className="p-2 w-3/4 ">
                      <p className="text-[#F70759] text-2xl font-bold">
                        {tours.title.es}
                      </p>
                      {/* publicidad slogan */}
                      <div className="flex flex-row font-sans">
                        <div className="pr-4">
                          <p className="pt-2 text-lg">{tours.brief.es}</p>
                          {/* que incluye */}
                          <p className="pt-4 pb-4 text-sm text-gray-500 ">
                            {tours.includes}
                          </p>
                        </div>
                        <div className=" flex flex-col items-start justify-end">
                          <div className=" text-[#F70759] flex flex-row font-bold text-2xl">
                            {/* valor */}
                            <p className=" pl-2 pr-2 font-bold text-3xl">
                              {tours.price.value}
                            </p>
                            {/* moneda */}
                            <p className="font-bold text-sm pt-4">
                              {tours.price.currency}
                            </p>
                          </div>
                          <div className="p-2">
                            <p className=" border border-[#F70759] text-[#F70759] font-bold px-8 rounded-full hover:bg-[#F70759] hover:text-white transition duration-300 ease-in-out">
                              Ver detalles
                            </p>
                            <Link to={"/"}></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            : null}
        </div>

      </div>

      {/* Informacion de jefes */}
      <ClientFooter/>
    </section>
  );
};
