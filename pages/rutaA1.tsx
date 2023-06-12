import Location from '@/components/location';
import Navbar from '@/components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import RutaA1 from '@/components/rutaA1';
export default function Layout() {
  return (
    <div className="h-screen w-screen overflow-x-hidden bg-[white]">
      <Navbar />
      <div className="m-0 grid h-[100%] grid-cols-1 bg-[white] p-0 sm:grid-cols-5 ">
        <div className="border-r border-black p-4 sm:col-span-3">
          <div className="mb-2 flex h-[70px]  w-[100%] border-l-8 border-[#368C40] bg-[white] shadow-sm">
            <div className="border-r border-black pl-6 pr-6 pt-4 text-3xl text-gray-700">
              <FontAwesomeIcon icon={faRoute} />
            </div>
            <div className="flex  flex-1 items-center pl-2 text-xl">
              <p>Recorrido ruta A1</p>
            </div>
          </div>
          <div className="h-[500px] w-full bg-cyan-300">
            <RutaA1 />
          </div>
          <div className="group relative mt-2 inline-flex items-center justify-start overflow-hidden rounded-xl bg-teal-100 px-6 py-3 font-medium transition-all">
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
        </div>
        <div className="flex justify-center border-r border-black p-4 sm:col-span-2">
          <div className="w-[100%] rounded-xl">
            <div className="flex h-[60px] w-full items-center justify-center bg-gray-200 text-center text-3xl">
              <p>PARADAS Y LUGARES</p>
            </div>
            <Location parada="Rotonda Tecun Uman" />
            <Location parada="MontBlanc" />
            <Location parada="Mercado la Democracia" />
            <Location parada="Oftalmologico" />
            <Location parada="Parque Central" />
            <Location parada="Estadio Mario Camposeco" />
            <Location parada="Parque Benito Juarez" />
          </div>
        </div>
      </div>
    </div>
  );
}
