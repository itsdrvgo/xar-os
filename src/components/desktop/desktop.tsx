"use client";

import HomeBG from "@/public/home-background.jpg";
import { cn } from "@/src/lib/utils";
import { DefaultProps } from "@/src/types";
import { motion, Variants } from "framer-motion";
import Docker from "./docker";

function Dekstop({ className }: DefaultProps) {
    const fadeInContainer: Variants = {
        hide: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };
    return (
        <>
            <motion.div
                className={cn("h-full w-full opacity-80", className)}
                initial="hide"
                animate="show"
                variants={fadeInContainer}
                style={{
                    backgroundImage: `url(${HomeBG.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />

            <Docker />
        </>
    );
}

export default Dekstop;
