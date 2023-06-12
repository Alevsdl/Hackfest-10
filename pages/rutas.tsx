import AllRoutes from '@/components/allroutes';
import Navbar from '@/components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import Marcadores from '@/components/marcadores';

export default function Rutas() {
  return (
    <div className="h-screen w-screen overflow-x-hidden bg-[white]">
      <Navbar />
      <div className="m-0 grid h-[100%] grid-cols-1 bg-[white] p-0 sm:grid-cols-4 ">
        <div className="border-[black]  sm:border-r p-4">
          <div className="group relative inline-flex items-center justify-start overflow-hidden rounded-xl bg-teal-100 px-6 py-3 font-medium transition-all">
            <span className="absolute right-0 top-0 inline-block h-4 w-4 rounded bg-teal-700 transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white"></span>
            </span>

            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              <FontAwesomeIcon
                icon={faRoute}
                className="w-[100%] pt-4 text-[6rem] text-teal-600  opacity-80"
              />
              <p className="w-[100%] p-4 text-center text-xl font-medium text-gray-700">
                Las rutas de los buses pueden variar según disponibilidad de las empresas
                y días festivos.
              </p>
            </span>
          </div>
          <div className="group relative mt-4 inline-flex items-center justify-start overflow-hidden rounded-xl bg-yellow-200 px-6 py-3 font-medium transition-all">
            <span className="absolute right-0 top-0 inline-block h-4 w-4 rounded bg-yellow-400 transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white"></span>
            </span>

            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              <p className="w-[100%] p-4 text-center text-xl font-medium text-gray-700">
                Tarifa: Q2.50
              </p>
            </span>
          </div>
        </div>
        <div className="flex justify-center border-[black]  p-4 sm:col-span-2 sm:border-r">
          <AllRoutes />
        </div>
        <div className="text-2xl font-semibold text-gray-600 text-center">
          <p className="text-2xl font-semibold text-gray-600 p-4">Lugares Turísticos</p>
          <div className=" w-full h-full"><Marcadores /></div>
        </div>
      </div>
    </div>
  );
}
