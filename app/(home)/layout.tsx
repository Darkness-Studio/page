import type { Metadata } from "next";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
        <Nav />
        <main className="pt-16 items-center justify-center">{children}</main> 
        <Footer />
    </>
  );
}
