import Calculator from "@/public/calculator.svg";
import Finder from "@/public/finder.svg";
import GitHub from "@/public/github.svg";
import Mail from "@/public/mail.svg";
import Music from "@/public/music.svg";
import Safari from "@/public/safari.svg";
import Settings from "@/public/settings.svg";
import Store from "@/public/store.svg";
import VSCode from "@/public/vscode.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
// @ts-ignore
import Dock from "react-osx-dock";

interface Item {
    src: string | StaticImport;
    alt: string;
    redirect?: string;
}

const items: Item[] = [
    { src: Finder, alt: "Finder" },
    { src: Calculator, alt: "Calculator" },
    { src: Music, alt: "Music" },
    { src: Store, alt: "Store" },
    { src: Safari, alt: "Safari" },
    { src: Mail, alt: "Mail" },
    { src: VSCode, alt: "VS Code" },
    {
        src: GitHub,
        alt: "View Source",
        redirect: "https://github.com/itsdrvgo/xar-os",
    },
    { src: Settings, alt: "Settings" },
];

function Docker() {
    return (
        <Dock
            width={600}
            magnification={1.2}
            magnifyDirection="up"
            className="absolute bottom-5"
        >
            {items
                .map((x) => x.alt)
                .map((item, index) => {
                    const x = items[index];
                    return (
                        <Dock.Item
                            key={index}
                            onClick={() => {
                                x.redirect
                                    ? window.open(x.redirect, "_blank")
                                    : null;
                            }}
                        >
                            <Image src={x.src} alt={item} className="p-2" />
                        </Dock.Item>
                    );
                })}
        </Dock>
    );
}

export default Docker;
