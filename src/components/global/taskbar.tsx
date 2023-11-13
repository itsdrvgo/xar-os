"use client";

import { cn } from "@/src/lib/utils";
import { DefaultProps } from "@/src/types";
import { motion, Variants } from "framer-motion";
import ActionBar from "./action-bar";
import NavMenu from "./nav-menu";

function Taskbar({ className }: DefaultProps) {
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
        <motion.header
            className={cn(
                "fixed left-0 top-0 z-40 flex w-full items-center justify-between bg-default-50 px-5 py-2",
                className
            )}
            initial="hide"
            animate="show"
            variants={fadeInContainer}
        >
            <NavMenu />
            <ActionBar />
        </motion.header>
    );
}

export default Taskbar;
