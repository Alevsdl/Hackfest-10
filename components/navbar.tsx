
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import pic from '@/images/bus.png'
import pic2 from '@/images/bandera.png'
const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showText, setShowText] = useState(true);
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Verificar el tamaño inicial al cargar la página

        window.addEventListener('resize', handleResize); // Escuchar cambios en el tamaño de la ventana

        return () => {
            window.removeEventListener('resize', handleResize); // Limpieza al desmontar el componente
        };
    }, []);

    return (
        <div className="w-full h-24 bg-[white] sticky top-0">
            {isMobile ? (
                <div className="flex justify-center border-b border-t border-[black] w-full h-full">
                    <div className="flex items-center justify-center text-xl pl-6" onClick={handleMenuClick}> menu</div>
                    {showMenu && (
                        <div className="bg-[pink]">soy un menu</div>
                    )}
                    <div className="flex-1 flex items-center justify-center text-xl font-bold overflow-hidden ">
                        <Image src={pic} alt="selfie" height={40} />
                        ROUTE
                        <Image src={pic2} alt="selfie" height={20} width={30} className="" />
                        XELA
                    </div>
                </div>
            ) : (
                <div className="grid sm:grid-cols-4 bg-[white] w-full h-full ">
                    <div className="border-b border-r border-[black] flex items-center justify-center text-3xl">
                        <Image src={pic} alt="selfie" height={40} />
                        ROUTE
                        <Image src={pic2} alt="selfie" height={20} width={30} className="" />
                        XELA
                    </div>
                    <div className="col-span-2 border-b border-r border-[black] flex justify-center font-semibold">
                        <div className="flex-1 flex items-center justify-center">
                            <p className="relative group">
                                <Link href="/">PRINCIPAL</Link>
                                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-maingreen transition-all group-hover:w-full"></span>
                            </p>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <p className="relative group">
                                <Link href="/">RUTAS</Link>
                                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-maingreen transition-all group-hover:w-full"></span>
                            </p>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <p className="relative group">
                                <Link href="/">INFO.</Link>
                                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-maingreen transition-all group-hover:w-full"></span>
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



