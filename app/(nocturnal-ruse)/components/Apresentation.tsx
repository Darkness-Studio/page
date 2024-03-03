import Link from "next/link"
import Image from "next/image"
export default function Apresentation(){
  return(
    <>
    <div className="relative gridflex-col items-end justify-center overflow-hidden bg-white bg-clip-border text-center text-gray-700">
      <div
        className=" bg-fixed absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://img.freepik.com/fotos-gratis/fundo-preto-antigo-textura-do-grunge-papel-de-parede-escuro-quadro-negro-quadro-negro-parede-da-sala_1258-28313.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1709337600&semt=ais')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div className="flex flex-col md:flex-row w-full items-center text-white">
        <div className="relative md:p-6 px-6 md:py-14 md:px-12 md:w-1/2">
          <h2 className="block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
          Welcome to the sewer
          </h2>
          <main className="md:py-5 ">
          <p className="py-2">Long ago, in a land forgotten by many, a knight arrived with hopes of finding a safe haven for his people from the ravages of war. Upon returning home, he regaled his king with tales of this promising land, where he vowed to shoulder the responsibility for its inhabitants. Encouraged by his words, the king proclaimed him ruler of this newfound refuge....</p>
        </main>
        </div>
        <div className="relative p-6 px-6 py-14 md:px-12 md:w-1/2">
          <h1 className="block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">By Darkness Studio</h1>
          <Image src="/logo.png" width={200} height={200} alt="logo" className="relative inline-block  border-2 border-white object-cover object-center "/>
        </div>
      </div>
    </div>
    </>
  )
}