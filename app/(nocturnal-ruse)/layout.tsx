import Nav from "./components/Navbar";
export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div>
        <Nav />
        <main className="items-center justify-center">{children}</main>
    </div>
  );
}
