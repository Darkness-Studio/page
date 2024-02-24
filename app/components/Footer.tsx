import Image from "next/image";
import logo from "/Leonorlogo.png"
export default function Footer(){
  return(
    <>

<footer className="bg-white border shadow">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Image width={100} height={100} src="/logo.png" className="relative inline-block  border-2 border-white object-cover object-center" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">Darkness Studio</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">© 2024 <a href="https://github.com/Darkness-Studio" className="hover:underline">Darkness Studio</a>. Open source project.</span>
    </div>
</footer>


    </>
  )
}