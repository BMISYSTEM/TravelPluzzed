import { useState } from 'react';
import arrow from '../assets/arrow.svg'; // Asegúrate de que la ruta de la imagen sea correcta

interface dropprops {
    opcion: string;
}

const DisponibilidadDropdown= ({opcion}:dropprops) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative p-2">
            <div
                onClick={toggleDropdown}
                className="pl-2 px-4 rounded-sm bg-slate-200 flex flex-row cursor-pointer font-bold"
            >
                {opcion}
                <img src={arrow} className="w-6 pl-2" />
            </div>

            {isOpen && (
                <div className="bg-slate-100 pt-2 mb-2">
                <div className="flex rounded-full border border-gray-800 overflow-hidden">
                    <button className="hover:bg-red-500 flex-1 py-2 px-4 text-gray-600">Hoy</button>
                    <button className="hover:bg-red-500 flex-1 py-2 px-4 text-gray-600">Fechas</button>
                    <button className="hover:bg-red-500 flex-1 py-2 px-4 text-gray-600">Mañana</button>
                </div>
            </div>
            )}
        </div>
    );
};

export default DisponibilidadDropdown;
