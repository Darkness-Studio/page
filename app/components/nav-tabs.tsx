import Link from "next/link";
export default function NavTabs() {
    interface TabsItems{
        name: string;
        src: string;
    }

    const tabs: TabsItems[] = [
        {
            name: "Documentation",
            src: "/documentation"
        },
        {
            name: "Nocturnal-Ruse",
            src: "/noctural-ruse"
        },
        {
            name: "Contact",
            src: "/contact"
        },{
            name: "Versions",
            src: "/versions"
        }
    ]

    return (<>
    {
        tabs.map((tab) => (
            <Link
                key={tab.name}
                href={tab.src}
                className=" text-white hover:text-red-600 px-3 py-2 block rounded-md "
            >
                {tab.name}
            </Link>
        ))
    }

    </>);
}