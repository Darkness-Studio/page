import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darkness Studio",
  description: "Games",
};

export default function NocturnalRuseLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
        <main className="pt-16 items-center justify-center">{children}</main>
  );
}
