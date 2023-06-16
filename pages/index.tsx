import Image from 'next/image';
import { useState, useEffect } from 'react';
import bgg from '@/images/bg2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/navbar';
import Link from 'next/link';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize(); // Verificar el tamaño inicial al cargar la página

    window.addEventListener('resize', handleResize); // Escuchar cambios en el tamaño de la ventana

    return () => {
      window.removeEventListener('resize', handleResize); // Limpieza al desmontar el componente
    };
  }, []);
  return (
    <div className="h-screen w-screen overflow-hidden bg-[white]">
      <Navbar />
      {isMobile ? (
        <div className="m-0 grid h-[100%] grid-cols-1 bg-[white] p-0 sm:grid-cols-4 ">
          <div className="flex justify-center border-r border-[black] sm:col-span-2 h-[100%]">
            <Image src={bgg} alt="selfie" height={800} className="w-[100%] opacity-[40%]" />
            <div className="text-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center ">
              <p className="m-4 border-2 bg-black bg-opacity-20 px-4 py-2 text-6xl font-semibold text-[white] shadow-lg">
                ¿A dónde quieres ir?
              </p>
              <div className="flex items-center justify-center ">
                <div className="cursor-pointer text-8xl text-[#F24C3D] transition duration-500 hover:scale-125 hover:text-maingreen ">
                  <Link href="/rutas">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="m-0 grid h-[100%] grid-cols-1 bg-[white] p-0 sm:grid-cols-4 ">

          <div className="border-r border-[black]"></div>
          <div className="flex justify-center border-r border-[black] sm:col-span-2 h-[100%]">
            <Image src={bgg} alt="selfie" height={900} className="w-[100%] opacity-[40%]" />
            <div className="text-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center ">
              <p className="m-4 border-2 bg-black bg-opacity-20 px-4 py-2 text-6xl font-semibold text-[white] shadow-lg">
                ¿A dónde quieres ir?
              </p>
              <div className="flex items-center justify-center ">
                <div className="cursor-pointer text-8xl text-[#F24C3D] transition duration-500 hover:scale-125 hover:text-maingreen ">
                  <Link href="/rutas">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}
