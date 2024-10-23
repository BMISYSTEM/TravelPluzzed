import clock from '../assets/clock.svg';
import message from '../assets/message.svg';
import calendary from '../assets/calendary.svg';
import clipboard from '../assets/clipboard.svg';
import sillaRuedas from '../assets/Silla-ruedas.svg';
import sosteni from '../assets/Sosteni.svg';
import operator from '../assets/operator.svg';
import pets from '../assets/pets.svg';
import question from '../assets/Question.svg';

interface DetailsProps{
    Duration: string;
    lenguaje: string;
    TimeInformation: string;
    TypeBono: string;
    Movility: string;
    Sostenibility: string;
    OperatorInformation: string;
    PetsInformation: string;
    QuestionFrecuently: string;
}

const Details = ({Duration,Movility, OperatorInformation, PetsInformation, QuestionFrecuently, Sostenibility, TimeInformation, TypeBono, lenguaje}:DetailsProps) => {
    return (
                        <div className='pl-12'>
                            <div className='text-3xl'>
                                Detalles
                            </div>

                            <div className='flex flex-row pt-6 items-center'>
                                <div className='w-1/5 flex flex-row gap-2'>
                                    <img src={clock} className='w-6' />
                                    <p className=''>Duracion</p>
                                </div>

                                <p className='w-4/5 text-gray-800'>{Duration}</p>
    
                            </div>

                            <div className='border-b border-gray-300 my-4'></div>


                            <div className='flex flex-row pt-4 items-center'>
                                <div className='w-1/5 flex flex-row gap-2'>
                                    <img src={message} className='w-6' />
                                    <p className=''>Idioma</p>
                                </div>

                                <p className='w-4/5 text-gray-800'>{lenguaje}</p>

                            </div>

                            <div className='border-b border-gray-300 my-4'></div>


                            <div className='flex flex-row pt-4 items-center '>
                                <div className='w-1/5 flex flex-row gap-2'>
                                    <img src={calendary} className='w-6' />
                                    <p className=''>Cuando reservar</p>
                                </div>

                                <p className='w-4/5 text-gray-800'>{TimeInformation}</p>

                            </div>

                            <div className='border-b border-gray-300 my-4'></div>


                            <div className='flex flex-row pt-4 items-center'>
                                <div className='w-1/5 flex flex-row gap-2'>
                                    <img src={clipboard} className='w-6' />
                                    <p className=''>Tipo de bono</p>
                                </div>

                                <p className='w-4/5 text-gray-800'>{TypeBono}</p>
                            </div>

                            <div className='border-b border-gray-300 my-4'></div>


                            <div className='flex flex-row pt-4 items-center'>
                                <div className='w-1/5 flex flex-row gap-2'>
                                    <img src={sillaRuedas} className='w-6' />
                                    <p className=''>Accesibbilidad</p>
                                </div>

                                <p className='w-4/5 text-gray-800'>{Movility}</p>

                            </div>

                            <div className='border-b border-gray-300 my-4'></div>


                            <div className='flex flex-row pt-4 items-center'>
                                <div className='w-1/5 flex flex-row gap-2'>
                                    <img src={sosteni} className='w-6' />
                                    <p className=''>Sostenibilidad</p>
                                </div>

                                <p className='w-4/5 text-gray-800'>{Sostenibility}</p>

                            </div>

                            <div className='border-b border-gray-300 my-4'></div>


                            <div className='flex flex-row pt-4 items-center'>
                                <div className='w-1/5 flex flex-row gap-2'>
                                    <img src={operator} className='w-6' />
                                    <p className=''>Operador</p>
                                </div>

                                <p className='w-4/5 text-gray-800'>{OperatorInformation}</p>

                            </div>

                            <div className='border-b border-gray-300 my-4'></div>


                            <div className='flex flex-row pt-4 items-center'>
                                <div className='w-1/5 flex flex-row gap-2'>
                                    <img src={pets} className='w-6' />
                                    <p className=''>Mascotas</p>
                                </div>

                                <p className='w-4/5 text-gray-800'>{PetsInformation}</p>

                            </div>

                            <div className='border-b border-gray-300 my-4'></div>


                            <div className='flex flex-row pt-4 items-center'>
                                <div className='w-1/5 flex flex-row gap-2'>
                                    <img src={question} className='w-6' />
                                    <p className=''>Preguntas frecuentes</p>
                                </div>

                                <p className='w-4/5 text-gray-800'>{QuestionFrecuently}</p>
                            </div>
                            
                            <div className='border-b border-gray-300 my-4'></div>

        
                        </div>
    )
}

export default Details