"use client";

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
        <motion.div
            className="flex w-full items-center justify-between"
            initial="hide"
            animate="show"
            variants={fadeInContainer}
        >
            <NavMenu />
            <ActionBar />
        </motion.div>
    );
}

export default Taskbar;
