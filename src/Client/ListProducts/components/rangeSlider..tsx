import React, { useState, useEffect } from 'react';
import './rangeSlider.css';
import arrow from '../assets/arrow.svg'; // Asegúrate de que la ruta de la imagen sea correcta


interface RangeProps {
    opcion: string;
}

const RangeSlider = ({ opcion }: RangeProps) => {
    const [leftValue, setLeftValue] = useState(1);
    const [rightValue, setRightValue] = useState(1);
    const [isOpen, setIsOpen] = useState(true);
    const [porcentRig,setporcentRig] = useState(50);
    const [porcentlef,setporcentlef] = useState(50);

    let wr = 100
    let wl = 100

    const handleLeftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value < rightValue && value >=1) {
            setporcentlef(value);

        }
    };

    const handleRightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value > leftValue && value >= 1) {
            setporcentRig(value);
        }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    

    return (
        <div className="p-2">
            <div
                onClick={toggleDropdown}
                className="pl-2 px-4 rounded-sm bg-slate-200 flex flex-row cursor-pointer font-bold mb-4"
            >
                {opcion}
                <img src={arrow} className="w-6 pl-2" />
            </div>

            {isOpen && (
                <div>
                    <div className=" relative pt-1 mb-4 flex flex-row  ">
                        <input
                            type="range"
                            min="0"
                            max="24"
                            step="1"
                            // value={leftValue}
                            // onChange={handleLeftChange}
                            className={`absolute w-[100%] h-2 opacity-1 cursor-pointer bg-green-500 z-50 `}
                            style={{
                                width:`${wl}%`
                            }}
                        />
                        <input
                            type="range"
                            min="0"
                            max="24"
                            step="1"
                            // value={rightValue}
                            // onChange={handleRightChange}
                            className={`absolute w-[100%] h-2 opacity-1 cursor-pointer bg-green-500  rotate-180  `}
                            style={{
                                width:`${wr}%`
                            }}
                        />
                        {/* <div className="slider-track absolute top-1/2 transform -translate-y-1/2 w-full"></div> */}
                        {/* <div
                            className="absolute top-1/2 transform -translate-y-1/2 h-2 bg-pink-500"
                            style={{ left: `${percentLeft}%`, right: `${100 - percentRight}%` }}
                        ></div>
                        <div
                            className="slider-thumb absolute top-1/2 transform -translate-y-1/2"
                            style={{ left: `${percentLeft}%` }}
                        ></div>
                        <div
                            className="slider-thumb absolute top-1/2 transform -translate-y-1/2"
                            style={{ left: `${percentRight}%` }}
                        ></div> */}
                    </div>

                    <div className="flex justify-between">
                        <span>{leftValue}h</span>
                        <span>{rightValue}h</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RangeSlider;
