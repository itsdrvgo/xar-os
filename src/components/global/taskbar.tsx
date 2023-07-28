"use client";

import DRVGOLogo from "@/public/drvgo-logo.png";
import { DefaultProps } from "@/src/types";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Icons } from "../icons/icons";
import {
    Menubar,
    MenubarContent,
    MenubarGroup,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "../ui/menubar";
import RealTimeClock from "./clock";

function Taskbar({ className }: DefaultProps) {
    const router = useRouter();

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
            <Menubar className="gap-5">
                <MenubarMenu>
                    <MenubarTrigger className="p-1 focus:bg-transparent data-[state=open]:bg-transparent">
                        <Image
                            src={DRVGOLogo}
                            alt="XAR"
                            width={20}
                            height={20}
                        />
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>About This XAR</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>System Preferences</MenubarItem>
                        <MenubarItem>App Store</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onSelect={() => router.push("/lock")}>
                            Sleep
                        </MenubarItem>
                        <MenubarItem onSelect={() => router.push("/lock")}>
                            Restart
                        </MenubarItem>
                        <MenubarItem onSelect={() => router.push("/")}>
                            Shut Down
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onSelect={() => router.push("/lock")}>
                            Lock Screen
                        </MenubarItem>
                        <MenubarItem onSelect={() => router.push("/lock")}>
                            Log Out
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="p-1 focus:bg-black/10 data-[state=open]:bg-black/10">
                        Seeker
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>About Seeker</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Preferences</MenubarItem>
                        <MenubarItem>Seek</MenubarItem>
                        <MenubarItem>Hide Seeker</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Empty Trash</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                <MenubarGroup className="flex items-center gap-3">
                    <MenubarMenu>
                        <MenubarTrigger className="p-1 font-normal focus:bg-black/10 data-[state=open]:bg-black/10">
                            File
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>New Seeker</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>New Tab</MenubarItem>
                            <MenubarItem>New Folder</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem disabled>Open</MenubarItem>
                            <MenubarItem disabled>Open with</MenubarItem>
                            <MenubarItem disabled>Print</MenubarItem>
                            <MenubarItem disabled>Close Window</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem disabled>Rename</MenubarItem>
                            <MenubarItem disabled>Compress</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Find</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem disabled>Eject</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger className="p-1 font-normal focus:bg-black/10 data-[state=open]:bg-black/10">
                            Edit
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem disabled>Undo</MenubarItem>
                            <MenubarItem disabled>Redo</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem disabled>Cut</MenubarItem>
                            <MenubarItem disabled>Copy</MenubarItem>
                            <MenubarItem disabled>Paste</MenubarItem>
                            <MenubarItem disabled>Select All</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Show Clipboard</MenubarItem>
                            <MenubarItem>Emojis & Symbols</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger className="p-1 font-normal focus:bg-black/10 data-[state=open]:bg-black/10">
                            View
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem disabled>As Icons</MenubarItem>
                            <MenubarItem disabled>As List</MenubarItem>
                            <MenubarItem disabled>As Columns</MenubarItem>
                            <MenubarItem disabled>As Gallery</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Use Stacks</MenubarItem>
                            <MenubarItem disabled>Sort by</MenubarItem>
                            <MenubarItem disabled>Clean Up</MenubarItem>
                            <MenubarItem disabled>Clean Up by</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem disabled>Hide Toolbar</MenubarItem>
                            <MenubarItem disabled>Show All Tabs</MenubarItem>
                            <MenubarItem disabled>Show Tab Bar</MenubarItem>
                            <MenubarItem disabled>Show Pathbar</MenubarItem>
                            <MenubarItem disabled>Show Status Bar</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem disabled>
                                Customize Tool Bar
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger className="p-1 font-normal focus:bg-black/10 data-[state=open]:bg-black/10">
                            Go
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem disabled>Back</MenubarItem>
                            <MenubarItem disabled>Forward</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Recents</MenubarItem>
                            <MenubarItem>Documents</MenubarItem>
                            <MenubarItem>Downloads</MenubarItem>
                            <MenubarItem>Home</MenubarItem>
                            <MenubarItem>Computer</MenubarItem>
                            <MenubarItem>Network</MenubarItem>
                            <MenubarItem>xCloud</MenubarItem>
                            <MenubarItem>Applications</MenubarItem>
                            <MenubarItem>Utilities</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Go to Folder</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger className="p-1 font-normal focus:bg-black/10 data-[state=open]:bg-black/10">
                            Window
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem disabled>Minimize</MenubarItem>
                            <MenubarItem disabled>Zoom</MenubarItem>
                            <MenubarItem disabled>Move to Left</MenubarItem>
                            <MenubarItem disabled>Move to Right</MenubarItem>
                            <MenubarItem>Cycle Through Windows</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem disabled>
                                Show Previous Tab
                            </MenubarItem>
                            <MenubarItem disabled>Show Next Tab</MenubarItem>
                            <MenubarItem disabled>
                                Move Tab to New Window
                            </MenubarItem>
                            <MenubarItem disabled>
                                Merge All Windows
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Bring All to Front</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger className="p-1 font-normal focus:bg-black/10 data-[state=open]:bg-black/10">
                            Help
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>Send Seeker Feedback</MenubarItem>
                            <MenubarItem>XAR Help</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Contact Developer</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </MenubarGroup>
            </Menubar>
            <div className="flex items-center gap-5">
                <Icons.actionbar className="h-4 w-4" />
                <Icons.batteryCharging className="h-4 w-4" />
                <RealTimeClock />
            </div>
        </motion.div>
    );
}

export default Taskbar;
