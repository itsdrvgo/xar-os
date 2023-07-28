import Music from "@/public/apple-music.svg";
import Safari from "@/public/apple-safari.svg";
import Store from "@/public/apple-store.svg";
import Calculator from "@/public/calculator.svg";
import Finder from "@/public/finder.svg";
import GitHub from "@/public/github.svg";
import Mail from "@/public/mail.svg";
import Settings from "@/public/settings.svg";
import VSCode from "@/public/visual-studio-code-icon.svg";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/src/components/ui/tooltip";
import { cn } from "@/src/lib/utils";
import { DefaultProps } from "@/src/types";
import Image from "next/image";
import { Separator } from "../ui/separator";

interface PageProps extends DefaultProps {}

function Docker({ className }: PageProps) {
    return (
        <div className={cn("h-full w-full cursor-default", className)}>
            <div className="absolute bottom-5 left-1/2 grid -translate-x-1/2 grid-flow-col gap-2 rounded-xl border border-gray-500 bg-white/10 p-2 backdrop-blur transition-transform hover:scale-110">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            {" "}
                            <Image
                                src={Finder}
                                alt="Finder"
                                width={50}
                                height={50}
                            />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Finder</p>
                        </TooltipContent>
                    </Tooltip>

                    <Separator orientation="vertical" className="bg-white/80" />

                    <div className="grid grid-flow-col gap-2">
                        <Tooltip>
                            <TooltipTrigger>
                                {" "}
                                <Image
                                    src={Calculator}
                                    alt="Calculator"
                                    width={50}
                                    height={50}
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Calculator</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                {" "}
                                <Image
                                    src={Music}
                                    alt="Music"
                                    width={50}
                                    height={50}
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Music</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                {" "}
                                <Image
                                    src={Store}
                                    alt="Store"
                                    width={50}
                                    height={50}
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Store</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                {" "}
                                <Image
                                    src={Safari}
                                    alt="Safari"
                                    width={50}
                                    height={50}
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Safari</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                {" "}
                                <Image
                                    src={Mail}
                                    alt="Mail"
                                    width={50}
                                    height={50}
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Mail</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>

                    <Separator orientation="vertical" className="bg-white/80" />

                    <div className="grid grid-flow-col gap-2">
                        <Tooltip>
                            <TooltipTrigger>
                                {" "}
                                <Image
                                    src={VSCode}
                                    alt="VSCode"
                                    width={50}
                                    height={50}
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>VSCode</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                {" "}
                                <Image
                                    src={GitHub}
                                    alt="GitHub"
                                    width={50}
                                    height={50}
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>GitHub</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>

                    <Separator orientation="vertical" className="bg-white/80" />

                    <Tooltip>
                        <TooltipTrigger>
                            {" "}
                            <Image
                                src={Settings}
                                alt="Settings"
                                width={50}
                                height={50}
                            />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Settings</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    );
}

export default Docker;
