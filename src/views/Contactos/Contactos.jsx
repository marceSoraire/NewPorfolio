import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function Contactos() {

    const mensaje = {
        name: '',
        email: '',
        msj: '',
    }

    const [values, setValues] = useState(mensaje);
    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value })
    }

    const senMessage = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2hzc51i', 'template_x6e7vi3', e.target, 'qXJYG6a6_Gc_yBh_D')
            .then((result) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Mensaje enviado con exito!',
                    showConfirmButton: false,
                    timer: 2500
                })
            }, (error) => {
                console.log(error.text);
            });

        setTimeout(() => setValues(mensaje), 2000)
    }

    return (
        <div id='contacto' name="contacto" className="w-full py-6 bg-primario mt-[40px] font-poppins bg-stone-100">
            <div className="max-w-[1350px] mx-auto px-4">
                <h2 className="font-roboto text-center text-gray-800 text-3xl mb-4">Contactame</h2>
                <div className="max-w-[1000px] mx-auto">
                    <form onSubmit={senMessage}>
                        <div>
                            <input
                                type='text'
                                placeholder='Nombre'
                                name='name'
                                value={values.name}
                                onChange={handleOnChange}
                                className='border border-gray-400 rounded-md outline-none focus:outline-none w-full h-10 px-5 my-4 focus:ring-2 focus:ring-gray-300' />
                            <input
                                type='text'
                                placeholder='Email'
                                name='email'
                                value={values.email}
                                onChange={handleOnChange}
                                className='border border-gray-400 rounded-md outline-none focus:outline-none w-full h-10 px-5 my-4 focus:ring-2 focus:ring-gray-300' />
                            <textarea
                                placeholder='Mensaje'
                                name='msj'
                                value={values.msj}
                                onChange={handleOnChange}
                                className='border border-gray-400 rounded-md outline-none focus:outline-none w-full h-64 p-5 my-4 resize-none focus:ring-2 focus:ring-gray-300' />
                            <div className="w-full flex justify-center">
                                <button className='border-gray-400 rounded-md w-full md:w-[30%] font-poppins text-[18px] bg-white flex items-center justify-center border py-1 hover:cursor-pointer hover:scale-105 duration-300 hover:shadow-lg'>
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactos;