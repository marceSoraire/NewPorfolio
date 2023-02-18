import { useState } from 'react';
import rick from './img/rickandmorty.jpg';
import acuario from './img/acuario2.jpg';
import futbol from './img/canchas.png';
import abm from './img/ambientar.png'
import cine from './img/new.jpg'
import calcu from './img/calculadora.jpg'
import ahorcado from './img/ahorcado.png'
import imgAc from './img/img02.jpg'
import mentoria from './img/mentoria.png'
import rpg from './img/1.png'
import sda from './img/2.png'
import cl from './img/3.png'
import Cards from '../../Components/Cards/Cards';
import { IoArrowDownSharp, IoArrowUp } from "react-icons/io5";

const Proyectos = () => {

  const [ver, setVer] = useState(true);
  const handleOnChange = () => setVer(!ver)

  return (
    <div id='proyectos' className='w-full md:w-[80%] md:mx-auto my-6 md:p-6'>
      <h2 className="font-roboto text-center text-gray-800 text-3xl my-6">Proyectos</h2>
      <div className='flex flex-wrap justify-between'>
        <Cards
          img={futbol}
          art='proyect'
          title='FutbolEstadium'
          text='Aplicacion Destokp y mobile. Realizado en React y Firebase'
          codigo='https://github.com/marceSoraire/futbolEstadium'
          proyecto='https://espontanea-trufa-c8b622.netlify.app'
        />
        <Cards
          img={acuario}
          art='proyect'
          title='Pequeño Ser'
          text='Ecommerce, trabajo final de CoderHouse realizado con JavaScript'
          codigo='https://github.com/marceSoraire/trabajoFinalAcuariojs'
          proyecto='https://marcesoraire.github.io/trabajoFinalAcuariojs/'
        />
        <Cards
          img={abm}
          art='proyect'
          title='Ambientar'
          text='Ecommerce, trabajo final de CH realizado con React y firebase'
          codigo='https://github.com/marceSoraire/React.js-Ambientar'
          proyecto='https://marcesoraire.github.io/React.js-Ambientar/'
        />
      </div>
      {ver ?
        <div className="w-full flex justify-center">
          <button onClick={handleOnChange} className='mt-5 border border-gray-400 rounded-md w-[280px] mx-auto sm:w-[325px] font-poppins text-[18px] bg-white flex items-center justify-center py-1 hover:cursor-pointer hover:scale-105 duration-300 hover:shadow-lg'>
            Ver Mas<IoArrowDownSharp size={20} />
          </button>
        </div>
        :
        <>
          <div className='flex flex-wrap justify-between'>
            <Cards
              img={cine}
              art='proyect'
              title='Cine'
              text='API de peliculas realizado en React.js, proyecto personal'
              codigo='https://github.com/marceSoraire/API-Peliculas'
              proyecto='https://espontanea-trufa-c8b622.netlify.app'
            />
            <Cards
              img={rick}
              art='proyect'
              title='proyect'
              text='API de Rick and Morty realizado en React.js, proyecto personal'
              codigo='https://github.com/marceSoraire/RickAndMorty'
              proyecto='https://espontanea-trufa-c8b622.netlify.app'
            />
            <Cards
              img={calcu}
              art='proyect'
              title='Calculadora'
              text='De mis primeros proyectos realizados en JavaScript, para trabajar con logica'
              codigo='https://github.com/marceSoraire/Calculadora'
              proyecto='https://marcesoraire.github.io/Calculadora/'
            />
          </div>
          <div className='flex flex-wrap justify-between'>
            <Cards
              img={ahorcado}
              art='proyect'
              title='Ahorcado'
              text='Mi primer proyecto realizado para la asignatura Logica y Estructura de Datos'
              codigo='https://github.com/marceSoraire/Ahorcado'
              proyecto='https://espontanea-trufa-c8b622.netlify.app'
            />
            <Cards
              img={imgAc}
              art='proyect'
              title='Pequeño Ser'
              text='Acuario realizado solo en HTML, CSS y SASS'
              codigo='https://github.com/marceSoraire/DesarrolloWeb-Acuario'
              proyecto='https://marcesoraire.github.io/DesarrolloWeb-Acuario/'
            />
            <Cards
              img={mentoria}
              art='proyect'
              title='Mentoria'
              text='Proyecto producto del top 10 en la carrera de React en CoderHouse'
              codigo='none'
              proyecto='https://mentoriait.netlify.app/'
            />
          </div>
          <div className='flex flex-wrap justify-between'>
            <Cards
              img={rpg}
              art='proyect'
              title='RPGLE || sin codigo'
              text='Proyecto realizado en PUB400, representa la logica de un programa'
            // codigo='none'
            // proyecto='none'
            />
            <Cards
              img={sda}
              art='proyect'
              title='SDA || sin codigo'
              text='El sda es utilizado para genrear las pantallas y/o ventanas del rpgle'
            // codigo='none'
            // proyecto='none'
            />
            <Cards
              img={cl}
              art='proyect'
              title='CL || sin codigo'
              text='Los archivos cl son generados en el SEU para generar interaccion con el usuario'
            // codigo='none'
            // proyecto='none'
            />
          </div>
          <div className="w-full flex justify-center">
            <button onClick={handleOnChange} className='mt-5 border border-gray-400 rounded-md w-[280px] mx-auto sm:w-[325px] font-poppins text-[18px] bg-white flex items-center justify-center py-1 hover:cursor-pointer hover:scale-105 duration-300 hover:shadow-lg'>
              Ver Menos<IoArrowUp size={20} />
            </button>
          </div>
        </>
      }
    </div>
  )
}

export default Proyectos