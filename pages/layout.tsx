import Location from '@/components/location';
import Navbar from '@/components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
export default function Layout() {
    return (
        <div className="h-screen w-screen overflow-x-hidden bg-[white]">
            <Navbar />
            <div className="m-0 grid h-[100%] grid-cols-1 bg-[white] p-0 sm:grid-cols-5 ">
                <div className="sm:col-span-3 border-black border-r p-4">
                    <div className="w-[100%] h-[70px] bg-[white]  flex border-l-8 border-pink-400 shadow-sm mb-2">
                        <div className="text-3xl pt-4 pr-6 pl-6 text-gray-700 border-r border-black">
                            <FontAwesomeIcon icon={faRoute} />
                        </div>
                        <div className="flex-1  flex items-center text-xl pl-2">
                            <p>Recorrido ruta 1</p>
                        </div>
                    </div>
                    <div className="w-full bg-cyan-300 h-[500px]">
                        AQUI VA UN MAPA
                    </div>
                    <div className="relative mt-2 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-teal-100 rounded-xl group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-teal-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>

                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                            <p className="p-4 text-xl text-gray-700 font-medium w-[100%] text-center" >Las rutas de los buses pueden variar según disponibilidad de las empresas y días festivos.</p></span>
                    </div>
                </div>
                <div className="sm:col-span-2 border-black border-r flex justify-center p-4">
                    <div className="rounded-xl w-[100%]">
                        <div className="w-full h-[60px] bg-gray-200 text-3xl text-center flex items-center justify-center">
                            <p>PARADAS Y LUGARES</p>
                        </div>
                        <Location parada="parada1" />
                        <Location parada="parada2" />
                        <Location parada="parada2" />
                    </div>
                </div>
            </div>
        </div>
    );
}