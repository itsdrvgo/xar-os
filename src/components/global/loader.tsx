import XARLogo from "@/public/xar-os.png";
import { cn } from "@/src/lib/utils";
import { DefaultProps } from "@/src/types";
import Image from "next/image";
import LoaderBar from "./loader-bar";

function Loader({ className }: DefaultProps) {
    return (
        <div
            className={cn(
                "flex h-screen w-full flex-col items-center justify-center gap-10 bg-background",
                className
            )}
        >
            <Image src={XARLogo} alt="XAR" width={200} height={200} priority />
            <LoaderBar />
        </div>
    );
}

export default Loader;
