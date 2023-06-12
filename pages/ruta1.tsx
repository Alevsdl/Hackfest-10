
import Navbar from '@/components/navbar';
import Ruta18 from '@/components/ruta18';
import  Ruta20  from '@/components/ruta20';
import Trigales from '@/components/rutaTrigales';
import VistaBella from '@/components/rutaVistaBella';

export default function Ruta1() {
    return (
        <div className="h-screen w-screen overflow-x-hidden bg-[white]">
            <Navbar />
            <div className="m-0 grid h-[100%] grid-cols-1 bg-[white] p-0 sm:grid-cols-4 ">

                <Ruta20 />
            </div>
        </div>
    );
}