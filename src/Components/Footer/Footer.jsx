import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { IoLogoWhatsapp, IoLogoGithub, IoLogoLinkedin, IoLocationSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='bock md:flex md:justify-evenly p-2 w-full bg-stone-300 font-poppins'>
            <div className='p-2 md:flex md:justify-between'>
                <p className='flex justify-center my-2 md:mx-3 hover:text-gray-700'><IoLocationSharp size={25} className='text-red-500 mx-1'/>Rosario, Santa Fe</p>
                <p className='flex justify-center my-2 md:mx-3 hover:text-gray-700 hover:cursor-pointer'><IoLogoWhatsapp size={24} className='text-green-900 mx-1'/>3412731210</p>
            </div>
            <div className='p-2 my-auto'>
                <div className='flex justify-center'>
                    <a href='https://github.com/marceSoraire' target='_blanck'><IoLogoGithub size={28} className='mx-2'/></a>
                    <a href='https://www.linkedin.com/in/soraire-marcelo/' target='_blanck'><IoLogoLinkedin size={28} className='text-blue-800 mx-2' /></a>
                </div>
            </div>
            <div className='p-4'>
                <p className='flex justify-center hover:text-gray-700'><AiOutlineCopyrightCircle size={25} className='mx-1'/>CopyRight</p>
            </div>
        </div>
    )
}

export default Footer