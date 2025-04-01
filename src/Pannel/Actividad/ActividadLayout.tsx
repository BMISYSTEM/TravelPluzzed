import { Link, useNavigate, useParams } from "react-router-dom";
import { ClientNav } from "../../Client/Header/nav/ClientNav";
import { ClientFooter } from "../../Client/Footer/ClientFooter";
import { Star } from "../../Client/Wishlist/components/star-componente";
import ubication from "./assets/ubication.svg";
import information from "./assets/information.svg";
import ShareButton from "../../Client/activities/components/shareButton.";
import ImagesProducts from "../../Client/activities/components/ImagesProducts";
import ButtonMovility from "../../Client/activities/components/movilty";
import CalendarioLocal from "../../Client/activities/components/calendarioLocal";
import useSWR from "swr";
import { ClienteAxios } from "../../config/ClienteAxios";
import { Tour } from "./interfaces/tourInterface";
import React, { useEffect, useState } from "react";
import { Disponibilidad } from "./interfaces/disponibilidad";
import ReactModal from "react-modal";

import loading from "../../assets/footer.gif";
import { toast, ToastContainer } from "react-toastify";
import { IoStarSharp } from "react-icons/io5";
import { Comenatrios } from "./interfaces/comentarios";
export interface Fotos {
  succes: Succe[];
}

export interface Succe {
  id: number;
  url: string;
  createdAt: Date;
  updatedAt: Date;
  tourId: number;
}

export default function ActividadLayout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [diaSelect, setDiaSelect] = useState<Date>();
  const [formattedDate, setFormattedDate] = useState<string>("");
  const [modalConfirm, setModalConfirm] = useState(false);
  const [dia, setDia] = useState<string>("");
  const [dayOfWeek, setDayOfWeek] = useState<string>("");
  const [email, setEmail] = useState<string>();
  const [comentario, setComentario] = useState<string>("");
  const [puntuacion, setPuntuacion] = useState(0);
  /* consultar galeria */
  const { data: disponibilidad, isLoading: loadingDispo } = useSWR(
    "/api/tour/horario/find/" + id,
    () => ClienteAxios.get("/api/tour/horario/find/" + id),
  );
  const { data: fotos, isLoading: loadingFotos } = useSWR(
    "/api/tour/index/fotos/" + id,
    () => ClienteAxios.get("/api/tour/index/fotos/" + id),
  );
  const { data: tourdata, isLoading: loadingData } = useSWR(
    "/api/tour/find/" + id,
    () => ClienteAxios.get("/api/tour/find/" + id),
  );
  // comentarios
  const {
    data: comentariosData,
    isLoading: loadingComentario,
    mutate: mutateComentario,
  } = useSWR("/api/tour/comentario/index/" + id, () =>
    ClienteAxios.get("/api/tour/comentario/index/" + id),
  );
  const comentarioAll: Comenatrios = comentariosData?.data;
  const foto: Fotos = fotos?.data;
  const tour: Tour = tourdata?.data;
  const disponi: Disponibilidad = disponibilidad?.data;
  let disponibilidadDia = disponi?.succes;
  if (dayOfWeek !== "") {
    switch (dayOfWeek) {
      case "lunes":
        disponibilidadDia = disponibilidadDia.filter(
          (dispo) => dispo.lunes === true,
        );
        break;
      case "martes":
        disponibilidadDia = disponibilidadDia.filter(
          (dispo) => dispo.martes === true,
        );
        break;
      case "miercoles":
        disponibilidadDia = disponibilidadDia.filter(
          (dispo) => dispo.miercoles === true,
        );
        break;
      case "jueves":
        disponibilidadDia = disponibilidadDia.filter(
          (dispo) => dispo.jueves === true,
        );
        break;
      case "viernes":
        disponibilidadDia = disponibilidadDia.filter(
          (dispo) => dispo.viernes === true,
        );
        break;
      case "sabado":
        disponibilidadDia = disponibilidadDia.filter(
          (dispo) => dispo.sabado === true,
        );
        break;
      case "domingo":
        disponibilidadDia = disponibilidadDia.filter(
          (dispo) => dispo.domingo === true,
        );
        break;
      default:
        break;
    }
  }
  const processDate = (dateStr: string) => {
    const days = [
      "domingo",
      "lunes",
      "martes",
      "miercoles",
      "jueves",
      "viernes",
      "sabado",
    ];

    // Crear la instancia de Date
    const date = new Date(dateStr);

    // Obtener el día de la semana
    const day = days[date.getDay()];

    // Formatear la fecha
    const formatted = `${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date
      .getDate()
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;

    // Actualizar los estados
    setDayOfWeek(day);
    setFormattedDate(formatted);
  };
  // crear comentarios
  const createComentario = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!(email && comentario && puntuacion && id)) {
      toast.error(
        "Para generar un comentario diligencie el formulario completo...",
      );
      return;
    }
    const dataComentario = {
      email: email,
      comentario: comentario,
      start: puntuacion,
      id_tour: id,
    };
    try {
      toast.success("Guardando comentario");
      await ClienteAxios.post("/api/tour/comentario", dataComentario);
      toast.success("Se registro el comentario de forma correcta");
    } catch {
      toast.error("No se pudo registrar el comentario");
    } finally {
      toast.success("Proceso finalizado");
      mutateComentario();
    }
  };
  useEffect(() => {
    if (diaSelect) {
      processDate(diaSelect.toISOString());
    }
  }, [diaSelect]);
  useEffect(() => {
    if (tour?.succes[0]) {
      // Leer actividadesVisitadas del localStorage (o inicializar un arreglo vacío si no existe)
      const actividadesVisitadas = JSON.parse(
        localStorage.getItem("actividadesVisitadas") || "[]",
      );

      // Verificar si el tour ya está en la lista
      const isAlreadyVisited = actividadesVisitadas?.some(
        (actividad: Succe) => actividad.id === tour?.succes?.[0]?.id,
      );

      if (!isAlreadyVisited) {
        // Agregar el tour actual a las actividadesVisitadas
        const newActivity = {
          id: tour?.succes[0].id,
          nombre: tour?.succes[0].nombre,
          pais: tour?.succes[0].pais,
          imagen: foto?.succes[0].url,
          ciudad: tour?.succes[0].ciudad,
          valor: tour?.succes[0].precio,
        };

        actividadesVisitadas.push(newActivity);

        // Guardar la lista actualizada en el localStorage
        localStorage.setItem(
          "actividadesVisitadas",
          JSON.stringify(actividadesVisitadas),
        );
      }
    }
  }, [tour]);

  if (loadingDispo || loadingFotos || loadingData || loadingComentario) {
    return (
      <section className="w-full h-screen flex justify-center items-center bg-slate-800">
        <img src={loading} alt="" />
      </section>
    );
  }
  const addCart = async () => {
    const datos = {
      tour_id: tour?.succes?.[0].id,
      nombre: tour?.succes?.[0].nombre,
      dia: dia,
      precio: tour?.succes?.[0].precio,
      imagen: foto?.succes?.[0].url,
      mayores_15: 0,
      de_4_15: 0,
      menores_3: 0,
      mascotas: 0,
      precio_total: 0,
    };

    // Recuperar el carrito actual del localStorage
    const cartString = localStorage.getItem("carttravel");
    const cart = cartString ? JSON.parse(cartString) : [];

    // Validar si el tour ya existe
    const isTourInCart = cart.some(
      (item: any) => item.tour_id === datos.tour_id,
    );

    if (isTourInCart) {
      // Mostrar advertencia si ya existe
      toast.warning("Ya existe este tour en tu carrito");
    } else {
      // Agregar al carrito y guardar de nuevo
      cart.push(datos);
      localStorage.setItem("carttravel", JSON.stringify(cart));
      toast.success("El tour fue agregado al carrito");
      setModalConfirm(false);
      navigate("/shop");
    }
  };
  const formaterFecha = (fechas = new Date()) => {
    const fecha = new Date(fechas); // O cualquier otra fecha
    const dia = String(fecha.getDate() + 1).padStart(2, "0"); // Obtener el día y agregar ceros a la izquierda
    const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Obtener el mes (0-indexado)
    const año = fecha.getFullYear(); // Obtener el año

    return `${año}-${dia}-${mes}`;
  };
  return (
    <section className="w-full h-full">
      <ClientNav />

      <section className="w-full h-full bg-slate-100 overflow-hidden ">
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row p-4 pl-8 pr-8 justify-between w-full ">
            <div className="flex flex-row gap-4 w-1/2 pl-8">
              <Link to={`/country/${1}`}>
                <p className="rounded-sm px-2 bg-slate-200 text-[rgb(193,41,9)]">
                  Volver
                </p>
              </Link>
            </div>

            <div>
              <ShareButton />
            </div>
          </div>

          <div className="flex flex-row justify-between pl-4 items-center">
            <div className="md:text-4xl text-xl font-bold text-[rgb(0,141,255)] pl-12 p-4" style={{fontFamily: 'Caveat, sans-serif'}}> 
              {tour?.succes?.[0].nombre}
            </div>
            <div className="flex flex-col pr-12 gap-2">
              <div className="flex flex-row gap-2 justify-end items-end">
                <p className="text-sm text-gray-500 justify-end items-end">
                  Desde USD
                </p>
                <div className="md:text-4xl text-xl font-bold text-[rgb(193,41,9)]">
                  {" "}
                  {tour?.succes?.[0].precio} USD
                </div>
              </div>
              <a href={"#calendario"}>
                <div className="text-white bg-[rgb(193,41,9)] md:text-lg text-xs  rounded-full hover:bg-red-900 flex justify-center items-center">
                  <p className="text-xm">Ver disponibilidad</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Images of the product */}
        <ImagesProducts succes={foto?.succes} />

        {/* Buttons for movility in the page */}

        <ButtonMovility />

        {/* Informations relacionated an buttons the movility before*/}
        <div className="w-full h-full">
          <div className="flex md:flex-row flex-col">
            <div className="md:p-4 p-1  md:w-2/3 w-full bg-gray-100 gap-8">
              <section id="descripcion">
                <p
                  dangerouslySetInnerHTML={{
                    __html: tour?.succes?.[0].descripcion,
                  }}
                  className="md:pl-12 p-1 text-xl text-justify"
                />

                {/* Information general */}
                <div>
                  <div className="md:pl-12 p-1 flex flex-col gap-2 items-start pt-4">
                    <p className="text-2xl flex flex-row gap-2">
                      <img src={information} className="w-6" />
                      Incluido
                    </p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: tour?.succes?.[0].incluye,
                      }}
                      className="md:pl-12 p-1 text-xl text-justify"
                    />
                  </div>
                  <div className="md:pl-12 p-1 flex flex-col gap-2 items-start pt-4">
                    <p className="text-2xl flex flex-row gap-2">
                      <img src={information} className="w-6" />
                      Intinerario
                    </p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: tour?.succes?.[0].intinerario,
                      }}
                      className="md:pl-12 p-1 text-xl text-justify"
                    />
                  </div>

                  <div className="md:pl-12 p-1 ">
                    <p className="text-2xl flex flex-row gap-2">
                      <img src={information} className="w-6" />
                      No incluido
                    </p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: tour?.succes?.[0].no_incluye,
                      }}
                      className="md:pl-12 p-1 text-xl text-justify"
                    />
                    <div className="border-b border-gray-300 my-4"></div>
                  </div>
                  <div className="md:pl-12 p-1 ">
                    <p className="text-2xl flex flex-row gap-2">
                      <img src={information} className="w-6" />
                      Salidas
                    </p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: tour?.succes?.[0].salidas,
                      }}
                      className="md:pl-12 p-1 text-xl text-justify"
                    />
                    <div className="border-b border-gray-300 my-4"></div>
                  </div>
                  <div className="md:pl-12 p-1">
                    <p className="text-2xl flex flex-row gap-2">
                      <img src={information} className="w-6" />
                      Accesibilidad
                    </p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: tour?.succes?.[0].accesibilidad,
                      }}
                      className="md:pl-12 p-1 text-xl "
                    />
                    <div className="border-b border-gray-300 my-4"></div>
                  </div>
                </div>
              </section>

              {/* Caracteristics*/}
              <section id="detalles">{/* <Details />  */}</section>

              {/* Informacion de cancelaciones comentado por que freetours no devuelve la politica de cancelacion */}
              {/* <section id='cancelaciones'>
                            <div className='pl-12 gap-2'>
                                <p className='text-3xl font-normal text-gray-900 pb-2'>Cancelacion</p>
                                <p className='text-xl font-normal text-gray-700'> Aqui informacion de prueba</p>
                            </div>
                        </section> */}
            </div>

            {/* Calendary */}
            <div className="flex flex-col md:justify-start justify-center  gap-5">
              <CalendarioLocal setSelectedDate={setDiaSelect} dia={diaSelect} />
              <div className="border-2 flex flex-col gap-2 p-2">
                <p className="text-2xl font-bold text-gray-800">
                  Disponibilidad {formattedDate}
                </p>
                <div className="flex flex-col gap-2">
                  {diaSelect
                    ? disponibilidadDia?.map((dispo, index) => (
                        <button
                          onClick={() => {
                            setDia(formattedDate + "-" + dispo.hora_inicio);
                            setModalConfirm(true);
                          }}
                          key={index}
                          className="flex bg-[rgb(0,141,255)] flex-row gap-2 items-center p-2 text-center justify-center hover:opacity-25 "
                        >
                          <p className="text-sm text-white font-semibold">
                            {dispo.hora_inicio}
                          </p>
                        </button>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-12 pl-14 pr-12">
          <div className="border-b border-gray-300 pt-8 "></div>
        </div>

        {/* Informacion de ubicacion y opiniones */}
        <section id="opiniones">
          <div className="md:p-4 p-1 pt-2 gap-2">
            <p className="md:pl-12 p-1 text-3xl text-gray-800">
              Punto de encuentro
            </p>
            <div className="md:pl-12 p-1 pt-4 gap-2 flex flex-row">
              <img src={ubication} className="w-6" />
              <p className="text-gray-600 text-justify">
                {tour?.succes?.[0].punto_encuentro}
              </p>
            </div>
          </div>

          <div className="w-full h-12 pl-14 pr-12">
            <div className="border-b border-gray-300 pt-8 "></div>
          </div>

          {/* Button Opinions */}
          <div className="md:p-4 p-1 pt-2 gap-2 w-full flex md:flex-row flex-col">
            <div className="md:w-4/5 w-full">
              <p className="md:pl-12  p-1 text-3xl text-gray-800">
                Opiniones de nuestros clientes
              </p>
              <div className="md:pl-12 p-1 pt-4 gap-2 flex flex-row items-center justify-center">
                <img src={ubication} className="w-6" />
                <p className="text-gray-600">Informacion de ubicacion</p>
              </div>
            </div>

            <div className=" flex items-center justify-center">
              <div className="gap-2">
                {/* <div className="gap-2 flex flex-row">
                  <p className="font-bold text-red-600 text-2xl items-center">
                    Comentarios {300}
                  </p>
                  <p className="flex items-end">
                    <Star number={5} />
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          <section className="w-full h-full  px-12 mb-5">
            <p className="text-3xl font-semibold text-slate-800">Comentarios</p>
            <form
              onSubmit={createComentario}
              action=""
              className="flex flex-col gap-2"
            >
              <label htmlFor="" className="text-xl">
                Deja tu comentario
              </label>
              <textarea
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                name=""
                id=""
                className="border border-blue-500 py-2 px-3"
              />
              <label htmlFor="" className="text-xl">
                Correo electronico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-blue-500 py-1 px-3"
              />
              <label htmlFor="" className="text-xl">
                Puntuacion de tu experiencia
              </label>
              <div className="w-full flex flex-row gap-2">
                <button type="button" onClick={() => setPuntuacion(1)}>
                  <IoStarSharp
                    size={30}
                    color={puntuacion >= 1 ? "orange" : "black"}
                  />
                </button>
                <button type="button" onClick={() => setPuntuacion(2)}>
                  <IoStarSharp
                    size={30}
                    color={puntuacion >= 2 ? "orange" : "black"}
                  />
                </button>
                <button type="button" onClick={() => setPuntuacion(3)}>
                  <IoStarSharp
                    size={30}
                    color={puntuacion >= 3 ? "orange" : "black"}
                  />
                </button>
                <button type="button" onClick={() => setPuntuacion(4)}>
                  <IoStarSharp
                    size={30}
                    color={puntuacion >= 4 ? "orange" : "black"}
                  />
                </button>
                <button type="button" onClick={() => setPuntuacion(5)}>
                  <IoStarSharp
                    size={30}
                    color={puntuacion === 5 ? "orange" : "black"}
                  />
                </button>
              </div>
              <div>
                <button className="py-2 px-3  bg-blue-500 text-white mt-5">
                  Guardar comentario
                </button>
              </div>
            </form>
          </section>
          <section className="w-full flex flex-col gap-2">
            {comentarioAll?.succes?.map((comentario, index) => (
              <div key={index} className="flex flex-col gap-2 p-2 px-12">
                <p className="text-sm font-semibold">
                  {formaterFecha(comentario.createdAt)}
                </p>
                <p className="text-xl font-semibold">
                  Email:{comentario.email}
                </p>
                <p className="text-sm text-slate-600">
                  Comentario: {comentario.email}
                </p>
                <Star number={comentario.start} />
              </div>
            ))}
          </section>
        </section>
      </section>
      <ClientFooter />

      <ReactModal
        isOpen={modalConfirm}
        ariaHideApp={false} // Evitar error durante el desarrollo
        className="w-full h-full flex justify-center items-center backdrop-blur-lg bg-slate-800/40"
      >
        <section className="w-1/2 max-w-md h-auto bg-white rounded-lg shadow-lg p-6 flex flex-col gap-6">
          {/* Título */}
          <h2 className="text-lg font-semibold text-gray-700 text-center">
            ¿Quieres agregar este tour al horario seleccionado?
          </h2>
          <p>{dia}</p>
          {/* Botones */}
          <div className="flex justify-between gap-4">
            <button
              onClick={() => addCart()}
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Sí, ir al carrito
            </button>
            <button
              onClick={() => setModalConfirm(false)}
              className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
            >
              Cancelar
            </button>
          </div>
        </section>
      </ReactModal>
      <ToastContainer />
    </section>
  );
}
