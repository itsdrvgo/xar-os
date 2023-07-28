"use client";

import { cn, wait } from "@/src/lib/utils";
import { DefaultProps } from "@/src/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Icons } from "../icons/icons";
import Loader from "./loader";

function PowerScreen({ className }: DefaultProps) {
    const router = useRouter();
    const [isClicked, setClicked] = useState(false);
    const [isLoading, setIsloading] = useState(false);

    const handlePower = async () => {
        setClicked(true);
        await wait(500);
        setClicked(false);
        await wait(100);
        setIsloading(true);
        await wait(4100);
        router.push("/lock");
    };

    return (
        <div
            className={cn(
                "relative flex h-screen w-full items-center justify-center bg-background",
                className
            )}
        >
            {isLoading ? (
                <Loader className="absolute right-0 top-0 z-40" />
            ) : null}
            <button
                className={cn(
                    "rounded-full bg-zinc-900 p-3 shadow-lg shadow-gray-600 transition-all ease-in-out",
                    isClicked ? "scale-90" : "scale-100"
                )}
                onClick={handlePower}
            >
                <Icons.power className="h-10 w-10" />
            </button>
        </div>
    );
}

export default PowerScreen;
