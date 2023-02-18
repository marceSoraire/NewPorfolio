import { FiDatabase } from "react-icons/fi";
import { FaNpm } from "react-icons/fa";
import { ImGit } from "react-icons/im";
import { SiIbm, SiTailwindcss, SiCss3, SiSass, SiHtml5, SiJavascript, SiMysql, SiFirebase, SiPhp, SiBootstrap, SiGithub, SiReact } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles// ..

const Herramientas = () => {
    return (
        <div id='herramientas' className='w-full md:w-[70%] mx-auto p-10'>
            <h2 className="font-roboto text-center text-gray-800 text-3xl mb-4">Herramientas</h2>
            <div data-aos="zoom-in">
                <div className="w-full md:w-[70%] pt-4 md:mx-auto font-poppins text-[13px] md:text-lg flex justify-around md:justify-between md:uppercase">
                    <p>html</p>
                    <p>css</p>
                    <p>JS</p>
                </div>
                <div className='flex justify-around'>
                    <p><SiHtml5 className='text-[50px] sm:text-[70px] md:text-[100px] text-orange-600 m-4 md:m-8 lg:my-8 lg:mx-12' /></p>
                    <p><SiCss3 className='text-[50px] sm:text-[70px] md:text-[100px] text-blue-600 m-4 md:m-8 lg:my-8 lg:mx-12' /></p>
                    <p><SiJavascript className='text-[50px] sm:text-[70px] md:text-[100px] text-yellow-400 m-4 md:m-8 lg:my-8 lg:mx-12' /></p>
                </div>
            </div>
            <div data-aos="zoom-in-down">
                <div className="w-full md:w-[70%] md:mx-auto font-poppins text-[13px] md:text-lg flex justify-around md:justify-between md:uppercase">
                    <p>mysql</p>
                    <p>Bootstrap</p>
                    <p>php</p>
                </div>
                <div className='flex justify-around'>
                    <p><SiMysql className='text-[50px] sm:text-[70px] md:text-[100px] text-blue-600 m-4 md:m-8 lg:my-8 lg:mx-12' /></p>
                    <p><SiBootstrap className='text-[50px] sm:text-[70px] md:text-[100px] text-pink-700 m-4 md:m-8 lg:my-8 lg:mx-12' /></p>
                    <p><SiPhp className='text-[50px] sm:text-[70px] md:text-[100px] text-blue-900 m-4 md:m-8 lg:my-8 lg:mx-12' /></p>
                </div>
            </div>
            <div data-aos="zoom-in-left">
                <div className="w-full md:w-[70%] md:mx-auto font-poppins text-[13px] md:text-lg flex justify-around md:justify-between md:uppercase">
                    <p>react.js</p>
                    <p>tailwind</p>
                    <p>firebase</p>
                </div>
                <div className='flex justify-around'>
                    <p><SiReact className='text-[50px] sm:text-[70px] md:text-[100px] text-blue-400 m-4 md:m-8 lg:my-8 lg:mx-12' /></p>
                    <p><SiTailwindcss className='text-[50px] sm:text-[70px] md:text-[100px] text-blue-500 m-4 md:m-8 lg:my-8 lg:mx-12' /></p>
                    <p><SiFirebase className='text-[50px] sm:text-[70px] md:text-[100px] text-yellow-500 m-4 md:m-8 lg:my-8 lg:mx-12' /></p>
                </div>
            </div>
            <div data-aos="zoom-in-right">
                <div className="w-full md:w-[70%] md:mx-auto font-poppins text-[13px] md:text-lg flex justify-around md:justify-between md:uppercase">
                    <p>sass</p>
                    <p>db2</p>
                    <p>as/400</p>
                </div>
                <div className='flex justify-around'>
                    <p><SiSass className='text-[50px] sm:text-[70px] md:text-[100px] text-pink-500 m-4 md:m-8 lg:my-8 lg:mx-12' /></p>
                    <p><FiDatabase className='text-[50px] sm:text-[70px] md:text-[100px] text-green-800 m-4 md:m-8 lg:my-8 lg:mx-12' /></p>
                    <p><SiIbm className='text-[50px] sm:text-[70px] md:text-[100px] text-blue-600 m-4 md:m-8 lg:my-8 lg:mx-12' /></p>
                </div>
            </div>
            <div data-aos="zoom-out-up">
                <div className="w-full md:w-[70%] md:mx-auto font-poppins text-[13px] md:text-lg flex justify-around md:justify-between md:uppercase">
                    <p>git</p>
                    <p>github</p>
                    <p>npm</p>
                </div>
                <div className='flex justify-around'>
                    <p><ImGit className='text-[50px] sm:text-[70px] md:text-[100px] text-orange-600 m-4 md:m-8 lg:my-8 lg:mx-12' /></p>
                    <p><SiGithub className='text-[50px] sm:text-[70px] md:text-[100px] text-black m-4 md:m-8 lg:my-8 lg:mx-12' /></p>
                    <p><FaNpm className='text-[50px] sm:text-[70px] md:text-[100px] text-black m-4 md:m-8 lg:my-8 lg:mx-12' /></p>
                </div>
            </div>
        </div>
    )
}

AOS.init();
export default Herramientas















