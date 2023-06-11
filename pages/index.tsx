import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <div className="bg-blue-500 p-4 text-white">
        <h1 className="text-4xl font-bold">Hola Mundo</h1>
      </div>

      <p>Contenido de la página...</p>
    </div>
  );
}
