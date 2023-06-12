import AllRoutes from '@/components/allroutes';
import Navbar from '@/components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';

export default function Rutas() {
    return (
        <div className="h-screen w-screen overflow-x-hidden bg-[white]">
            <Navbar />
            <div className="m-0 grid h-[100%] grid-cols-1 bg-[white] p-0 sm:grid-cols-4 ">

                <div className="sm:border-r border-[black]  p-16 overflow-hidden ">
                    <div className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-teal-100 rounded-xl group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-teal-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>

                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                            <FontAwesomeIcon icon={faRoute} className="opacity-80 text-[6rem] pt-4 text-teal-600  w-[100%]" />
                            <p className="p-4 text-xl text-gray-700 font-medium w-[100%] text-center" >Las rutas de los buses pueden variar según disponibilidad de las empresas y días festivos.</p></span>
                    </div>
                </div>
                <div className="sm:border-r border-[black] sm:col-span-2  flex justify-center p-4">
                    <AllRoutes />
                </div>
                <div className=""></div>
            </div>
        </div>
    );
}