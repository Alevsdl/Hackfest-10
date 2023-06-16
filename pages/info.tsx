import Navbar from '@/components/navbar';
import Image from 'next/image';
import pic from '@/images/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
export default function Info() {
  return (
    <div className="h-screen w-screen overflow-x-hidden bg-[white] sm:overflow-y-hidden">
      <Navbar />
      <div className="m-0 grid h-[100%] grid-cols-1 bg-[white] p-0 sm:grid-cols-4 ">
        <div className="sm:overflow-hidden border-[black]  pb-4 pr-12 pl-12 pt-4 sm:pb-4 sm:p-16 sm:border-r ">
          <div className="group relative inline-flex items-center justify-start sm:overflow-hidden rounded-xl bg-teal-100 px-6 py-3 font-medium transition-all">
            <span className="absolute right-0 top-0 inline-block h-4 w-4 rounded bg-teal-700 transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white"></span>
            </span>

            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">

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
              <p className="w-[100%] sm:p-4 text-center text-xl font-medium text-gray-700">
                ©CopyRight 2023
              </p>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:overflow-hidden h-[100%] border-[black] sm:col-span-2  sm:border-r bg-[white]">
          <div className="grid grid-cols-1 border-yellow-400 border-t-8 sm:border-b sm:border-[black] sm:border-t-0 bg-[white] sm:grid-cols-2 h-full">
            <div className="group relative flex flex-1 items-center overflow-hidden bg-[white] p-10 text-justify font-medium text-gray-600">
              <span className="absolute left-0 top-0 mb-0 flex h-0 w-full translate-y-0 transform bg-maingreen opacity-90 transition-all duration-1000 ease-out group-hover:h-full"></span>
              <span className="relative text-sm sm:text-lg">
                Este sitio web tiene fines informativos y es de uso gratuito. La precisión
                y disponibilidad de la información pueden variar, ya que dependemos de los
                datos proporcionados por las respectivas autoridades de transporte
                público. No nos hacemos responsables de cambios de horarios,
                interrupciones en el servicio o cualquier inconveniente causado por
                terceros.
              </span>
            </div>
            <div className=" flex flex-1 items-center border-black sm:border-l justify-center pt-4 pb-4 sm:p-0">
              <Image src={pic} alt="selfie" height={200} className=" w-[60%] sm:w-[100%]" />
            </div>
          </div>
          <div className="grid  h-[200px] grid-cols-1 border-b border-[black]  text-center sm:grid-cols-4 ">
            <div className="group relative  flex items-center justify-center overflow-hidden border-black bg-[#FFE14D] p-10 text-left text-white sm:col-span-2 sm:border-r">
              <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-[#252279] opacity-90 transition-all duration-1000 ease-out group-hover:w-full "></span>
              <p className="relative text-xl font-bold sm:text-5xl">Hackfest 10</p>
            </div>

            <div className="flex items-center justify-center sm:justify-start bg-[white] pt-4 pb-4 sm:p-0 sm:pl-10  sm:text-left text-left font-medium text-lg text-gray-500 sm:col-span-2">
              <div className="">
                <p className="text-sm sm:text-xl"><FontAwesomeIcon icon={faChevronRight} /> Verónica Santos</p>
                <p className="text-sm sm:text-xl"><FontAwesomeIcon icon={faChevronRight} /> Vinicio Ricci</p>
                <p className="text-sm sm:text-xl"><FontAwesomeIcon icon={faChevronRight} /> Diego Galán</p>
                <p className="text-sm sm:text-xl"><FontAwesomeIcon icon={faChevronRight} /> Axel Rodas</p>
              </div>
            </div>


          </div>
        </div>
        <div className="p-4 bg-[white] ">
          <div className="group relative mt-4 w-full inline-flex items-center justify-start overflow-hidden rounded-xl bg-purple-200 px-6 py-3 font-medium transition-all">
            <span className="absolute right-0 top-0 inline-block h-4 w-4 rounded bg-purple-700 transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white"></span>
            </span>

            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              <p className="w-[100%] p-4 text-center text-xl font-medium text-gray-700">
                <a href="https://github.com/Alevsdl/Hackfest-10">Repositorio Github</a>
              </p>
            </span>
          </div>
          <div className="group mt-4 relative inline-flex items-center justify-start overflow-hidden rounded-xl bg-green-100 px-6 py-3 font-medium transition-all">
            <span className="absolute right-0 top-0 inline-block h-4 w-4 rounded bg-green-700 transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white"></span>
            </span>

            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">

              <p className="w-[100%] p-4 text-center text-xl font-medium text-gray-700">
                Esta página se encuentra en crecimiento, mantente atento a los próximos cambios.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div >
  );
}
