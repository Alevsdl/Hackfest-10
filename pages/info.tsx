import Navbar from '@/components/navbar';
import Image from 'next/image';
import pic from '@/images/logo1.png';
export default function Info() {
  return (
    <div className="h-screen w-screen overflow-x-hidden bg-[white] sm:overflow-y-hidden">
      <Navbar />
      <div className="m-0 grid h-[100%] grid-cols-1 bg-[white] p-0 sm:grid-cols-4 ">
        <div className="overflow-hidden border-[black]  p-16 sm:border-r "></div>
        <div className="grid grid-rows-2 overflow-hidden  border-[black] sm:col-span-2  sm:border-r">
          <div className="grid  grid-cols-1 border-b border-[black] bg-[white] sm:grid-cols-2">
            <div className="group relative flex flex-1 items-center overflow-hidden bg-[white] p-10 text-left font-medium text-black">
              <span className="absolute left-0 top-0 mb-0 flex h-0 w-full translate-y-0 transform bg-maingreen opacity-90 transition-all duration-1000 ease-out group-hover:h-full"></span>
              <span className="relative text-sm sm:text-xl">
                Este sitio web tiene fines informativos y es de uso gratuito. La precisión
                y disponibilidad de la información pueden variar, ya que dependemos de los
                datos proporcionados por las respectivas autoridades de transporte
                público. No nos hacemos responsables de cambios de horarios,
                interrupciones en el servicio o cualquier inconveniente causado por
                terceros.
              </span>
            </div>
            <div className=" flex flex-1 items-center border-black sm:border-l">
              <Image src={pic} alt="selfie" height={200} />
            </div>
          </div>
          <div className="grid  h-[200px] grid-cols-1 border-b border-[black] bg-[yellow] text-center sm:grid-cols-5">
            <div className="group relative  flex items-center justify-center overflow-hidden border-black bg-[#FFE14D] p-10 text-left text-white sm:col-span-2 sm:border-r">
              <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-[#252279] opacity-90 transition-all duration-1000 ease-out group-hover:w-full "></span>
              <p className="relative text-xl font-bold sm:text-5xl">Hackefest 10</p>
            </div>

            <div className="items-center bg-[white] pl-10 pt-10 text-left font-medium text-black sm:col-span-3 ">
              <p className=" text-sm sm:text-xl">Verónica Santos </p>
              <p className=" text-sm sm:text-xl">Vinicio Ricci</p>
              <p className=" text-sm sm:text-xl">Diego Galán</p>
              <p className=" text-sm sm:text-xl">Axel Rodas</p>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
