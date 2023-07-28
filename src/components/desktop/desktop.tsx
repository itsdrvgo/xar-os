"use client";

import HomeBG from "@/public/home-background.jpg";
import { DefaultProps } from "@/src/types";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Docker from "./docker";

interface PageProps extends DefaultProps {}

function Dekstop({ className }: PageProps) {
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
                className="absolute -z-50 h-full w-full opacity-80"
                initial="hide"
                animate="show"
                variants={fadeInContainer}
            >
                <Image
                    src={HomeBG}
                    alt="HomeBG"
                    priority
                    fill
                    style={{ objectFit: "cover" }}
                />
            </motion.div>

            <Docker />
        </>
    );
}

export default Dekstop;
