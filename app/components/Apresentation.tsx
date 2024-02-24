import Image from "next/image"
import Link from "next/link"

export default function Apresentation(){
  return(
    <>
    <div className=" relative grid rounded flex-col items-end py-20 justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
      <div
        className="bg-fixed	 absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/back.avif')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div className="relative p-6 px-6 py-14 md:px-12">
        <h2 className="block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
         Nocturnal Ruse
        </h2>
        <h5 className="block mb-6 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
        Game in production
        </h5>
        <Link href="/noctural-ruse" className="p-3 m-2 bg-white rounded-full text-neutral-950 uppercase font-bold text-md shadow-amber-50">to participe</Link>

      </div>
    </div>
    </>
  )
}