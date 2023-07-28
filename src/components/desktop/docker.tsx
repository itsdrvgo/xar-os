import Music from "@/public/apple-music.svg";
import Safari from "@/public/apple-safari.svg";
import Store from "@/public/apple-store.svg";
import Calculator from "@/public/calculator.svg";
import Finder from "@/public/finder.svg";
import GitHub from "@/public/github.svg";
import Mail from "@/public/mail.svg";
import Settings from "@/public/settings.svg";
import VSCode from "@/public/visual-studio-code-icon.svg";
import { cn } from "@/src/lib/utils";
import { DefaultProps } from "@/src/types";
import { Separator } from "../ui/separator";
import DockItem from "./docker-item";

interface PageProps extends DefaultProps {}

function Docker({ className }: PageProps) {
    return (
        <div className={cn("h-full w-full cursor-default", className)}>
            <div className="absolute bottom-5 left-1/2 grid -translate-x-1/2 grid-flow-col gap-2 rounded-xl border border-gray-500 bg-white/10 p-2 backdrop-blur transition-transform">
                <DockItem src={Finder} alt="Finder" />

                <Separator orientation="vertical" className="bg-white/80" />

                <div className="grid grid-flow-col gap-2">
                    <DockItem src={Calculator} alt="Calculator" />
                    <DockItem src={Music} alt="Music" />
                    <DockItem src={Store} alt="Store" />
                    <DockItem src={Safari} alt="Safari" />
                    <DockItem src={Mail} alt="Mail" />
                </div>

                <Separator orientation="vertical" className="bg-white/80" />

                <div className="grid grid-flow-col gap-2">
                    <DockItem src={VSCode} alt="VS Code" />
                    <DockItem src={GitHub} alt="GitHub" />
                </div>

                <Separator orientation="vertical" className="bg-white/80" />

                <DockItem src={Settings} alt="Settings" />
            </div>
        </div>
    );
}

export default Docker;
