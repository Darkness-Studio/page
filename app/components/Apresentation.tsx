import Image from "next/image"

export default function Apresentation(){
  return(
    <>
    <div className=" relative grid md:h-[40rem] w-full  flex-col items-end py-20 justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
      <div
        className="bg-fixed	 absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/games.avif')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div className="relative p-6 px-6 py-14 md:px-12">
        <h2 className="block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
         Nocturnal-Ruse
        </h2>
        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
        By Darkness Studio
        </h5>
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="test"
          className="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center"
          />
      </div>
    </div>
    </>
  )
}