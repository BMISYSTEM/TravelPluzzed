import React, { useState } from 'react';
import arrow from '../assets/arrow.svg'; // Asegúrate de que la ruta de la imagen sea correcta

interface CaracteProps {
    opcion: string;
    caracteristicas: string[];
}

const CaracteristicaDropdown = ({ opcion, caracteristicas }: CaracteProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

    const handleCheckboxChange = (caracteristica: string) => {
        setCheckedItems({
            ...checkedItems,
            [caracteristica]: !checkedItems[caracteristica],
        });
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
                <div className="pt-2">
                    {caracteristicas.map((caracteristica) => (
                        <div key={caracteristica} className="flex items-center mb-2">
                            <input
                                id={caracteristica}
                                type="checkbox"
                                checked={checkedItems[caracteristica] || false}
                                onChange={() => handleCheckboxChange(caracteristica)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor={caracteristica} className="ml-2 text-sm text-gray-700">
                                {caracteristica}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CaracteristicaDropdown;
