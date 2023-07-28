"use client";

import { DefaultProps } from "@/src/types";
import { useRouter } from "next/navigation";
import { Icons } from "../icons/icons";

function Power({ className }: DefaultProps) {
    const router = useRouter();

    return (
        <button
            className="cursor-pointer rounded-full bg-white/20 p-2 backdrop:blur-lg"
            onClick={() => router.replace("/")}
        >
            <Icons.power />
        </button>
    );
}

export default Power;
