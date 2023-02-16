import React from 'react'

function Contactos() {

    return (
        <div name="contacto" className="w-full py-6 bg-primario mt-[40px] font-poppins bg-stone-100">
            <div className="max-w-[1350px] mx-auto px-4">
                <h2 className="font-roboto text-center text-gray-800 text-3xl mb-4">Contactame</h2>
                <div className="max-w-[1000px] mx-auto">
                    <form>
                        <div>
                            <input type='text' placeholder='Nombre y Apellido' className='border border-gray-400 rounded-md outline-none focus:outline-none w-full h-10 px-5 my-4 focus:ring-2 focus:ring-secundario' />
                            <input type='text' placeholder='Email' className='border border-gray-400 rounded-md outline-none focus:outline-none w-full h-10 px-5 my-4 focus:ring-2 focus:ring-secundario' />
                            <textarea placeholder='Mensaje' className='border border-gray-400 rounded-md outline-none focus:outline-none w-full h-64 p-5 my-4 resize-none focus:ring-2 focus:ring-secundario' />
                            <div className="w-full flex justify-center">
                                <div className='border-gray-400 rounded-lg w-[30%] font-poppins text-[18px] bg-white flex items-center justify-center border border-secundario py-1 hover:cursor-pointer hover:scale-105 duration-300 hover:shadow-lg'>
                                    <p>Enviar</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactos;