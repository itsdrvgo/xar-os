"use client";

import { cn } from "@/src/lib/utils";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Icons } from "../icons/icons";

function Power({
    className,
    ...props
}: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>) {
    const router = useRouter();

    return (
        <button
            className={cn(
                "cursor-pointer rounded-full bg-white/20 p-2 backdrop-blur-sm",
                className
            )}
            onClick={() => router.replace("/")}
            {...props}
        >
            <Icons.power />
        </button>
    );
}

export default Power;
