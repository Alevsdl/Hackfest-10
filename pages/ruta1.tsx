import Navbar from '@/components/navbar';

import RutaA1 from '@/components/ruta19';


export default function Ruta1() {
  return (
    <div className="h-screen w-screen overflow-x-hidden bg-[white]">
      <Navbar />
      <div className="m-0 grid h-[100%] grid-cols-1 bg-[white] p-0 sm:grid-cols-4 ">
        <RutaA1 />
      </div>
    </div>
  );
}
