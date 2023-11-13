"use client";

import { cn, wait } from "@/src/lib/utils";
import { DefaultProps } from "@/src/types";
import { Button, Progress } from "@nextui-org/react";
import { useAnimate } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import XAR from "../global/svgs/XAR";
import { Icons } from "../icons/icons";

function PowerScreen({ className }: DefaultProps) {
    const router = useRouter();

    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [scope, animate] = useAnimate();

    const positionMiddle =
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2";

    const changeProgress = () => {
        setProgress((prevProgress) => {
            const newProgress = prevProgress + 1;

            if (newProgress <= 65) {
                return newProgress;
            } else if (newProgress <= 100) {
                return newProgress;
            }

            return 100;
        });
    };

    if (isLoading) {
        setTimeout(() => {
            changeProgress();
        }, 40);
    }

    const handlePower = async () => {
        await wait(500);
        await animate("#power_button", {
            opacity: 0,
        });
        await animate("#xar_loader", {
            opacity: 1,
            pointerEvents: "all",
        });
        setIsLoading(true);
        await wait(3000);
        setIsLoading(false);
        await wait(500);
        await animate("#xar_loader", {
            opacity: 0,
            pointerEvents: "none",
        });
        router.push("/lock");
    };

    return (
        <section
            className={cn("h-screen w-full p-4", positionMiddle, className)}
            ref={scope}
        >
            <div className="relative h-full w-full">
                <Button
                    id="power_button"
                    isIconOnly
                    radius="full"
                    variant="shadow"
                    size="lg"
                    className={cn(
                        "h-16 w-16 bg-danger-100 shadow-gray-600",
                        positionMiddle
                    )}
                    startContent={<Icons.power className="h-10 w-10" />}
                    onPress={handlePower}
                />

                <div
                    className={cn(
                        "pointer-events-none flex w-full max-w-md flex-col items-center gap-10 opacity-0",
                        positionMiddle
                    )}
                    id="xar_loader"
                >
                    <XAR width={200} height={200} />
                    <Progress
                        color="default"
                        classNames={{
                            indicator: "bg-white",
                            track: "h-2",
                        }}
                        aria-label="Loading..."
                        size="sm"
                        value={progress}
                    />
                </div>
            </div>
        </section>
    );
}

export default PowerScreen;
