import { useState } from "react";
import {  Disponibilidad } from "../interface/productDetail";


const Calendary = ({data,status}:Disponibilidad) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  // Función para obtener el número de días en el mes actual
  const getDaysInMonth = (date: Date): Date[] => {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const days: Date[] = [];
    // Generamos todos los días del mes
    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      days.push(new Date(date.getFullYear(), date.getMonth(), i));
    }

    return days;
  };

  // Cambiar el mes
  const changeMonth = (direction: "next" | "prev") => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + (direction === "next" ? 1 : -1));
      return newDate;
    });
  };

  // Generar los días del calendario
  const daysInMonth = getDaysInMonth(currentDate);
  const targetDate = new Date(selectedDate);
  const diaDespues = new Date(targetDate.getTime() + 86400000);
  const horarios = data.filter(data=> new Date(data.date).getTime() >=  targetDate.getTime() &&  new Date(data.date).getTime() <= diaDespues.getTime() )
  // Obtener el primer día del mes para alinear correctamente los días de la semana
  const startDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  console.log(data[0].date)
  return (
    <div id="calendario" className='w-96   p-1 flex flex-col rounded-xl items-center'>
      {/**Meses */}
      <div className="w-full  mx-auto bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => changeMonth("prev")} className="p-2 text-gray-600 hover:bg-gray-200 rounded w-10 h-10 text-white font-bold bg-blue-500 rounded-full">
          {"<"}
        </button>
        <h2 className="text-lg font-semibold text-center">{`${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</h2>
        <button onClick={() => changeMonth("next")} className="p-2 text-gray-600 hover:bg-gray-200 rounded w-10 h-10 text-white font-bold bg-blue-500 rounded-full">
          {">"}
        </button>
      </div>

      {/* Días de la semana */}
      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600 mb-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="py-1">{day}</div>
        ))}
      </div>

      {/* Días del mes */}
      <div className="grid grid-cols-7 gap-1">
        {/* Espacios antes del primer día del mes */}
        {Array.from({ length: startDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="h-10"></div>
        ))}
        {
        
        daysInMonth.map((day, index) => {
          const targetDate = new Date(day.getFullYear(), day.getMonth(), day.getDate());
          const diaDespues = new Date(targetDate.getTime() + 86400000);
          const exists = data?.some(dispo => new Date(dispo.date).getTime() >= targetDate.getTime() && new Date(dispo.date).getTime() < diaDespues.getTime());
          return (
            <div
              key={index}
              className={`${exists ? 'bg-blue-500 text-white' : 'bg-slate-300 text-slate-100'} h-10 flex justify-center items-center cursor-pointer rounded-full
               `}
              onClick={() =>{
                if(exists){
                  setSelectedDate(day)
                }
              } }
            >
              {day.getDate()}
            </div>
          )
        })}
      </div>
    </div>
    {/* horarios */}
     <div className="w-full flex flex-wrap gap-2 mt-2">
        {horarios.map((hora,index)=>(
          <button key={index} className="p-2 border rounded-xl bg-amber-500 text-white hover:scale-95 transition-all hover:bg-amber-200">
            <p >{`${hora.date}`}</p>
          </button>
        ))}
     </div>
    </div>
  );
};



export default Calendary