"use client";

import { DefaultProps } from "@/src/types";
import { useRouter } from "next/navigation";
import { Icons } from "../icons/icons";

function Restart({ className }: DefaultProps) {
    const router = useRouter();

    return (
        <button
            className="cursor-pointer rounded-full bg-white/20 p-2 backdrop:blur-lg"
            onClick={() => window.location.reload()}
        >
            <Icons.restart onClick={() => router.replace("/lock")} />
        </button>
    );
}

export default Restart;
