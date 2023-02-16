import React from 'react';
import Marce from './A3.jpg';
import cv from '../../CV Desarrollador Frontend.pdf';
import 'animate.css';
import { IoChevronDownCircleOutline } from "react-icons/io5";

const Sobremi = () => {
    return (
        <div>
            <img src={Marce} alt='yo' className='rounded-full mx-auto border-2 border-gray-800 -mt-28 h-[200px] w-[200px] md:-mt-40 md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px] animate__animated animate__heartBeat' />
            <h1 className='font-roboto text-gray-800 text-center mt-2 text-3xl animate__animated animate__bounceInDown'>Desarrollador Frontend Developer</h1>
            <div className='flex justify-center'>
                <ul className='my-4'>
                    <button className='border-2 p-1 border-gray-800 bg-white hover:bg-gray-200 hover:shadow-md hover:shadow-yellow-600 rounded-lg'>
                        <a href={cv} download='' className='flex'>Curriculum Vitae<IoChevronDownCircleOutline size={20} className='my-auto mx-1' /></a>
                    </button>
                </ul>
            </div>
            <div className='w-full md:w-[60%] md:mx-auto md:my-8 md:p-6 md:flex md:flex-col md:justify-center'>
                <p className='font-poppins md:text-[18px] md:my-2 text-justify mx-4 md:text-center'>
                    Estudiante avanzado en la carrera de <span className='hover:text-yellow-800 font-bold'>"Tecnico Superior en Desarrollo de
                    Software"</span> en la Escuela Superior de Comercio N°49 J.J. de Urquiza. En constante crecimiento, proactivo, de rapida adaptacion a trabajos grupales y/o individuales. Impulsado a seguir aprendiendo nuevas tecnologias constantemente mediante cursos realizados, de
                    manera paralela a la carrera terciaria, como los realizados en <span className='hover:text-yellow-800 font-bold'>"CoderHouse"</span> en el cual
                    obtuve la certificacion de <span className='hover:text-yellow-800 font-roboto text-gray-600'>"Desarrollador Frontend React.js"</span>
                </p>
                <p className='font-poppins md:text-[18px] md:my-2 text-justify mx-4 md:text-center'>
                    En la misma, para lograr dicha certificacion, realize la carrera de: <span className='hover:text-yellow-800 font-roboto text-gray-600'>"Desarrollador Web || JavaScript || React.js"</span>. Logrando con estos la certificacion antes mencionada.
                    En el ultimo curso logre ser parte del TOP 10, lo que me permitio acceder a una serie de beneficios, eligiendo la de un proyecto real, el mismo fue realizado con exito y como recomepensa se me retirubuye con un nuevo curso. Dicho curso,<span className='hover:text-yellow-800 font-roboto text-gray-600'>"React.Native"</span>, comenzara el 10/04/2023
                </p>
                <p className='font-poppins md:text-[18px] md:my-2 text-justify mx-4 md:text-center'>
                    Por otro lado, realice un curso en la Cooperiativa de trabajo <span className='hover:text-yellow-800 font-bold'>"Equality"</span>. La cual traba utilizando la plataforma de PUB400.COM con IBM iSeries, una plataforma de trabajo que cuenta con su propia base de datos.
                    Adquiriendo experiencia con las siguientes herraientas:
                    <span className='block text-gray-600 hover:text-yellow-800'>DBA || DB2 || SEU || QRY || AS400 || RPGLE || SDA || RLU || SQL || IBM i || PL/SQL.</span>
                    La carrera fue dictada desde Agosto/2022 hasta 01/02/2023, siendo esta dictadas por el profesor <span className='hover:text-yellow-800 font-bold'>"Oscar Tognocchi"</span>
                </p>
            </div >
        </div >
    )
}

export default Sobremi