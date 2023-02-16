import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg'
import { IoMenuSharp } from "react-icons/io5";
import { ImEmbed2 } from "react-icons/im";
import { IoLogoWhatsapp, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import 'animate.css';

const Nav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    return (
        <div name='navbar' className="w-full h-[70px] bg-gray-800 z-20 fixed bg-opacity-80">
            <div className="max-w-[1280px] h-full mx-auto px-4 flex justify-around lg:justify-between items-center">
                <Link className='flex text-titulo font-roboto uppercase hover:text-yellow-200 animate__animated animate__bounce'>Marcelo Soraire<ImEmbed2 size={20} className='my-auto mx-2' /></Link>
                <ul className='hidden md:flex p-4 m-4'>
                    <Link to='sobremi' className='text-subTitulo mx-2 hover:text-yellow-200'>Sobre mi</Link>
                    <Link className='text-subTitulo mx-2 hover:text-yellow-200'>Herramientas</Link>
                    <Link className='text-subTitulo mx-2 hover:text-yellow-200'>Proyectos</Link>
                    <Link className='text-subTitulo mx-2 hover:text-yellow-200'>Contatos</Link>
                </ul>

                <div onClick={handleNav} className='md:hidden hover:cursor-pointer z-20 text-primario'>
                    {nav ? <CgClose size={28} className='text-titulo' /> : <IoMenuSharp size={28} className='text-titulo' />}
                </div>

                <div className={nav ? 'z-10 lg:hidden fixed top-0 right-0 w-[60%] md:w-[35%] h-full bg-black ease-in duration-500' : 'z-10 lg:hidden fixed top-0 right-[-100%] w-[60%] md:w-[35%] h-full bg-black ease-in duration-500'}>
                    <ul className='pt-24 font-bold px-4 flex flex-col'>
                        <Link smooth duration={1000} onClick={handleNav} className='p-4 text-subTitulo mx-2 hover:text-yellow-200 text-center hover:cursor-pointer hover:scale-105 border-b border-b-gray-400'>Sobre mi</Link>
                        <Link smooth duration={1000} onClick={handleNav} className='p-4 text-subTitulo mx-2 hover:text-yellow-200 text-center hover:cursor-pointer hover:scale-105 border-b border-b-gray-400'>Herramientas</Link>
                        <Link smooth duration={1000} onClick={handleNav} className='p-4 text-subTitulo mx-2 hover:text-yellow-200 text-center hover:cursor-pointer hover:scale-105 border-b border-b-gray-400'>Proyectos</Link>
                        <Link smooth duration={1000} onClick={handleNav} className='p-4 text-subTitulo mx-2 hover:text-yellow-200 text-center hover:cursor-pointer hover:scale-105 border-b border-b-gray-400'>Contactos</Link>
                        <div className='mt-8 w-full px-8 flex justify-between'>
                        <a href='https://github.com/marceSoraire' target='_blanck'><IoLogoLinkedin size={28} className='hover:cursor-pointer text-blue-800'/></a>
                        <a href='https://www.linkedin.com/in/soraire-marcelo/' target='_blanck'><IoLogoGithub size={28} className='hover:cursor-pointer text-white'/></a>
                        <a href='https://web.whatsapp.com/' target='_blanck'><IoLogoWhatsapp size={28} className='hover:cursor-pointer text-green-900' /></a>
                        </div>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Nav