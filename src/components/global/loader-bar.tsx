"use client";

import { Progress } from "@/src/components/ui/progress";
import { DefaultProps } from "@/src/types";
import { useEffect, useState } from "react";

function LoaderBar({ className }: DefaultProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        const startProgress = () => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + 1;

                if (newProgress <= 65) {
                    return newProgress;
                } else if (newProgress <= 100) {
                    return newProgress;
                }

                clearInterval(interval);
                return 100;
            });
        };

        interval = setInterval(startProgress, 40);

        setTimeout(() => {
            clearInterval(interval);
            setProgress(100);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return <Progress value={progress} className="h-2 w-2/12" />;
}

export default LoaderBar;
