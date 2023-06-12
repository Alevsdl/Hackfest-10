import Navbar from '@/components/navbar';
import Ruta20 from '@/components/marcadores';

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
