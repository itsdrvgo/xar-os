"use client";

import LockScreenBG from "@/public/lock-background.jpg";
import UserPfp from "@/public/user-pfp.jpg";
import LoginForm from "@/src/components/desktop/login-form";
import Power from "@/src/components/desktop/power";
import { Avatar } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import Restart from "./restart";

function LockScreen() {
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

    const slideUp: Variants = {
        hide: {
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const slideDown: Variants = {
        hide: {
            opacity: 0,
            y: -20,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
            <div
                className="absolute h-full w-full opacity-80"
                style={{
                    backgroundImage: `url(${LockScreenBG.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(10px)",
                    transform: "scale(1.1)",
                }}
            />

            <motion.div
                className="z-10 flex h-full w-full max-w-[40rem] flex-col items-center justify-center gap-3"
                initial="hide"
                whileInView={"show"}
                variants={fadeInContainer}
            >
                <motion.div
                    className="p-5"
                    initial="hide"
                    whileInView={"show"}
                    variants={slideUp}
                >
                    <Avatar
                        src={UserPfp.src}
                        alt="ProfilePicture"
                        classNames={{
                            base: "h-32 w-32",
                        }}
                        radius="full"
                    />
                </motion.div>

                <motion.div
                    className="flex flex-col items-center gap-3"
                    initial="hide"
                    whileInView={"show"}
                    variants={slideDown}
                >
                    <p className="text-xl font-semibold">XAR</p>

                    <LoginForm />
                </motion.div>
            </motion.div>

            <div className="absolute bottom-0 left-0 flex w-full items-center justify-center gap-10">
                <div className="flex flex-col items-center justify-center gap-3 p-20">
                    <Power />
                    <p className="text-sm">Shut Down</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-20">
                    <Restart />
                    <p className="text-sm">Restart</p>
                </div>
            </div>
        </div>
    );
}

export default LockScreen;
