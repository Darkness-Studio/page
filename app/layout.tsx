import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darkness Studio",
  description: "The official page of Darkness Studio",
  authors: [{ name: "WesleyQDeveloper" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
      <body className={clsx("bg-neutral-950 text-white",inter.className)}>
            {children}
    </body>
  );
}
