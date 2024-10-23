import { useEffect, useState } from "react";

const Calendary = () => {

  const [respuesta,setRespuesta] = useState(null)
  /**
   * Mes seleccionado
   */
  const [mesSeleccion, setMesseleccion] = useState(new Date().getMonth() + 1);

  const [diaseleccion, setDiaSeleccion] = useState();

  /**
   * Fecha actual
   */
  const [fecha, setFecha] = useState(new Date());
  const [ano, setAno] = useState(fecha.getFullYear());
  const [dia, setDia] = useState(fecha.getDate());
  const [mes, setMes] = useState(fecha.getMonth());

  /**
   * Arreglos para el calendario
   */
  let semanauno:number[] = [];
  let semanados:number[] = [];
  let semanatres:number[] = [];
  let semanacuatro:number[] = [];
  let semanasinco:number[] = [];
  let primero = 1;
  useEffect(() => {
    const fechaFin = new Date(ano, mesSeleccion, 0);
    const diaFin = fechaFin.getDate();

    /**Fecha fin  */
    const fechaInicio = new Date(ano, mesSeleccion - 1, 1);
    const diaSemana = fechaInicio.getDay();
    /** recorrio para llenar los array por semana */
    for (let index = 0; index < 35; index++) {
      /** index mayor que el dia de la semana para iniciar a colocar los dias  */
      if (index >= diaSemana && index <= diaFin + (diaSemana - 1)) {
        if (index >= diaSemana && index < 7) {
          semanauno.push(...[primero++]);
        }
        if (index >= 7 && index < 14) {
          semanados.push(...[primero++]);
        }
        if (index >= 14 && index < 21) {
          semanatres.push(...[primero++]);
        }
        if (index >= 21 && index < 28) {
          semanacuatro.push(...[primero++]);
        }
        if (index >= 28 && index <= 40) {
          semanasinco.push(...[primero++]);
        }
      }
      // cuando no entra en las condiciones del if es por que no es un dia de este mes entonces coloca 0
      else {
        if (index >= 0 && index < 7) {
          semanauno.push(...[0]);
        } else if (index >= 7 && index < 14) {
          semanados.push(...[0]);
        } else if (index >= 14 && index < 21) {
          semanatres.push(...[0]);
        } else if (index >= 21 && index < 28) {
          semanacuatro.push(...[0]);
        } else if (index >= 28 && index < 35) {
          semanasinco.push(...[0]);
        }
      }
    }
    setDiasCalendario([
      semanauno,
      semanados,
      semanatres,
      semanacuatro,
      semanasinco,
    ]);
  }, [mesSeleccion]);

  const [diasCalendario, setDiasCalendario] = useState([
    semanauno,
    semanados,
    semanatres,
    semanacuatro,
    semanasinco,
  ]);



  useEffect(() => {
    setDiaSeleccion(dia);
    setFechaNota(ano + "0" + (mes + 1) + "" + (dia > 9 ? dia : "0" + dia));
  }, []);
  console.log(respuesta)
  return (
    <div className="md:w-full w-full h-full flex flex-col p-2  rounded-xl relative">
      <h1>Seguimientos x Mes</h1>
      {/* seleccion de mes */}
      <select
        className=" border p-2 border-indigo-500 rounded-sm"
        name=""
        id=""
        onChange={(e) => setMesseleccion(e.target.value)}
        value={mesSeleccion}
      >
        <option value="1">Enero</option>
        <option value="2">Febrero</option>
        <option value="3">Marzo</option>
        <option value="4">Abril</option>
        <option value="5">Mayo</option>
        <option value="6">Junio</option>
        <option value="7">Julio</option>
        <option value="8">Agosto</option>
        <option value="9">Septiembre</option>
        <option value="10">Obtubre</option>
        <option value="11">Noviembre</option>
        <option value="12">Diciembre</option>
      </select>
      {/* lunes martes miercoles ... */}
      <div className="w-full h-full bg-sky-800 text-white flex flex-row justify-between overflow-hidden border-2 rounded-sm p1 items-center cursor-pointer">
        <div
          key={7}
          className={` hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`}
        >
          Do
        </div>
        <div
          key={1}
          className={` hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`}
        >
          Lu
        </div>
        <div
          key={2}
          className={` hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`}
        >
          Ma
        </div>
        <div
          key={3}
          className={` hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`}
        >
          Mi
        </div>
        <div
          key={4}
          className={` hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`}
        >
          Ju
        </div>
        <div
          key={5}
          className={` hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`}
        >
          Vi
        </div>
        <div
          key={6}
          className={` hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`}
        >
          Sa
        </div>
      </div>
      {diasCalendario.map((diasCalendario) => (
        <div className="w-full h-full flex flex-row justify-between p1 items-center ">
          <button
            onClick={() => seleccionfecha(diasCalendario[0])}
            className={`${
              diaseleccion === diasCalendario[0]
                ? "bg-sky-600/60 text-white font-bold "
                : "text-sm font-bold text-slate-600   border hover:bg-slate-600/60 cursor-pointer   hover:scale-110 transition  hover:text-white"
            } p-1 w-14 h-14 rounded-sm text-center`}
          >
            {diasCalendario[0]}
          </button>
          <button
            onClick={() => seleccionfecha(diasCalendario[1])}
            className={`${
              diaseleccion === diasCalendario[1]
                ? "bg-sky-600/60 text-white font-bold "
                : "text-sm font-bold text-slate-600   border hover:bg-slate-600/60 cursor-pointer   hover:scale-110 transition hover:text-white"
            } p-1 w-14 h-14 rounded-sm text-center`}
          >
            {diasCalendario[1]}
          </button>
          <button
            onClick={() => seleccionfecha(diasCalendario[2])}
            className={`${
              diaseleccion === diasCalendario[2]
                ? "bg-sky-600/60 text-white font-bold "
                : "text-sm font-bold text-slate-600   border hover:bg-slate-600/60 cursor-pointer   hover:scale-110 transition hover:text-white"
            } p-1 w-14 h-14 rounded-sm text-center`}
          >
            {diasCalendario[2]}
          </button>
          <button
            onClick={() => seleccionfecha(diasCalendario[3])}
            className={`${
              diaseleccion === diasCalendario[3]
                ? "bg-sky-600/60 text-white font-bold "
                : "text-sm font-bold text-slate-600   border hover:bg-slate-600/60 cursor-pointer   hover:scale-110 transition hover:text-white"
            } p-1 w-14 h-14 rounded-sm text-center`}
          >
            {diasCalendario[3]}
          </button>
          <button
            onClick={() => seleccionfecha(diasCalendario[4])}
            className={`${
              diaseleccion === diasCalendario[4]
                ? "bg-sky-600/60 text-white font-bold "
                : "text-sm font-bold text-slate-600   border hover:bg-slate-600/60 cursor-pointer   hover:scale-110 transition hover:text-white"
            } p-1 w-14 h-14 rounded-sm text-center`}
          >
            {diasCalendario[4]}
          </button>
          <button
            onClick={() => seleccionfecha(diasCalendario[5])}
            className={`${
              diaseleccion === diasCalendario[5]
                ? "bg-sky-600/60 text-white font-bold "
                : "text-sm font-bold text-slate-600   border hover:bg-slate-600/60 cursor-pointer   hover:scale-110 transition hover:text-white"
            } p-1 w-14 h-14 rounded-sm text-center`}
          >
            {diasCalendario[5]}
          </button>
          <button
            onClick={() => seleccionfecha(diasCalendario[6])}
            className={`${
              diaseleccion === diasCalendario[6]
                ? "bg-sky-600/60 text-white font-bold "
                : "text-sm font-bold text-slate-600   border hover:bg-slate-600/60 cursor-pointer   hover:scale-110 transition hover:text-white"
            } p-1 w-14 h-14 rounded-sm text-center`}
          >
            {diasCalendario[6]}
          </button>
        </div>
      ))}

       
    </div>
  );
};



export default Calendary