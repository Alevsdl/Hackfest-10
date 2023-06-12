import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import pic from '@/images/bus.png';
import pic2 from '@/images/bandera.png';
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showText, setShowText] = useState(true);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
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
    <div className="sticky top-0 h-24 w-full bg-[white]">
      {isMobile ? (
        <div className="flex h-full w-full justify-center border-b border-t border-[black]">
          <div
            className="flex items-center justify-center pl-6 text-xl"
            onClick={handleMenuClick}
          >
            {' '}
            menu
          </div>
          {showMenu && <div className="bg-[pink]">soy un menu</div>}
          <div className="flex flex-1 items-center justify-center overflow-hidden text-xl font-bold ">
            <Image src={pic} alt="selfie" height={40} />
            ROUTE
            <Image src={pic2} alt="selfie" height={20} width={30} className="" />
            XELA
          </div>
        </div>
      ) : (
        <div className="grid h-full w-full bg-[white] sm:grid-cols-4 ">
          <div className="flex items-center justify-center border-b border-r border-[black] text-3xl">
            <Image src={pic} alt="selfie" height={40} />
            ROUTE
            <Image src={pic2} alt="selfie" height={20} width={30} className="" />
            XELA
          </div>
          <div className="col-span-2 flex justify-center border-b border-r border-[black] bg-[white] font-semibold">
            <div className="flex flex-1 items-center justify-center">
              <p className="group relative">
                <Link href="/">PRINCIPAL</Link>
                <span className="absolute -bottom-1 left-0 h-1 w-0 bg-maingreen transition-all group-hover:w-full"></span>
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <p className="group relative">
                <Link href="/rutas">RUTAS</Link>
                <span className="absolute -bottom-1 left-0 h-1 w-0 bg-maingreen transition-all group-hover:w-full"></span>
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <p className="group relative">
                <Link href="/info">INFO.</Link>
                <span className="absolute -bottom-1 left-0 h-1 w-0 bg-maingreen transition-all group-hover:w-full"></span>
              </p>
            </div>
          </div>

          <div className="border-b border-[black]">pmtq</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
