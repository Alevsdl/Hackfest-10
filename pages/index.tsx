import Image from 'next/image'
import bgg from '@/images/bg2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[white] overflow-x-hidden">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-4 bg-[white] h-[100%] m-0 p-0 ">
        <div className="border-r border-[black]"></div>
        <div className="border-r border-[black] sm:col-span-2 flex justify-center">
          <Image src={bgg} alt="selfie" height={800} className="opacity-[40%] w-[100%]" />
          <div className="text-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
            <p className="text-[white] shadow-lg border-2 text-6xl font-semibold m-4 py-2 px-4 bg-black bg-opacity-20">¿A dónde quieres ir?</p>
            <div className="flex justify-center items-center ">
              <div className="cursor-pointer text-8xl text-[#F24C3D] transition duration-500 hover:scale-125 hover:text-maingreen ">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
            </div>
          </div>
        </div>
        <div className="">3</div>
      </div>
    </div>
  )
}

