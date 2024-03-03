"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
export default function NavTabs() {
    interface TabsItems{
        name: string;
        src: string;
    }

    const navLinks: TabsItems[] = [

        {
            name: "Projects",
            src: "/projects"
        },
    ]

    const pathname = usePathname();
    //console.log(pathname)

    const router = useRouter()
    return (<>
    {
        navLinks.map((link) => {
        const isActive = pathname.startsWith(link.src)
        return (
            <Link
                key={link.name}
                href={link.src}
                className={clsx("px-3 py-2 block rounded-md", isActive ? "bg-red-600" : "text-white hover:text-red-600 ")}
            >
                {link.name}
            </Link>
        )
    })
    }
    </>);
}