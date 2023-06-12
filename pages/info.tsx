import Navbar from '@/components/navbar';
import Image from 'next/image';
import pic from '@/images/logo1.png';
export default function Info() {
    return (
        <div className="h-screen w-screen overflow-x-hidden sm:overflow-y-hidden bg-[white]">
            <Navbar />
            <div className="m-0 grid h-[100%] grid-cols-1 bg-[white] p-0 sm:grid-cols-4 ">

                <div className="sm:border-r border-[black]  p-16 overflow-hidden ">
                </div>
                <div className="sm:border-r border-[black] sm:col-span-2  grid grid-rows-2  overflow-hidden">
                    <div className="bg-[white]  grid grid-cols-1 sm:grid-cols-2 border-b border-[black]">
                        <div className="bg-[white] flex-1 flex relative group overflow-hidden font-medium text-left items-center text-black p-10">

                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-1000 ease-out transform translate-y-0 bg-maingreen group-hover:h-full opacity-90"></span>
                            <span className="relative text-sm sm:text-xl">Este sitio web tiene fines informativos y es de uso gratuito.
                                La precisión y disponibilidad de la información pueden variar,
                                ya que dependemos de los datos proporcionados por las respectivas autoridades de transporte público.
                                No nos hacemos responsables de cambios de horarios, interrupciones en el servicio o cualquier inconveniente causado por terceros.
                            </span>
                        </div>
                        <div className=" flex-1 flex items-center sm:border-l border-black">
                            <Image src={pic} alt="selfie" height={200} />
                        </div>

                    </div>
                    <div className="bg-[yellow]  grid grid-cols-1 sm:grid-cols-5 border-b text-center border-[black] h-[200px]" >
                        <div className="sm:col-span-2 bg-[#FFE14D]  sm:border-r border-black relative group overflow-hidden text-left flex items-center justify-center text-white p-10">
                            <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-1000 ease-out transform translate-x-0 bg-[#252279] group-hover:w-full opacity-90 "></span>
                            <p className="relative text-xl sm:text-5xl font-bold">Hackefest 10</p>
                        </div>

                        <div className="sm:col-span-3 bg-[white] font-medium text-left items-center text-black pt-10 pl-10 ">

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