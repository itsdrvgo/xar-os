import Taskbar from "@/src/components/global/taskbar";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuTrigger,
} from "@/src/components/ui/context-menu";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Desktop",
};

function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen flex-col overflow-hidden">
            <ContextMenu>
                <ContextMenuTrigger className="h-full w-full">
                    <header className="absolute top-0 z-40 w-full">
                        <div className="flex h-5 items-center justify-between bg-background px-5 py-4">
                            <Taskbar />
                        </div>
                    </header>
                    <main className="flex-1">{children}</main>
                </ContextMenuTrigger>
                <ContextMenuContent className="w-64 bg-white/20 text-text backdrop-blur">
                    <ContextMenuItem
                        inset
                        className="pl-2 focus:bg-background focus:text-white"
                    >
                        New Folder
                    </ContextMenuItem>

                    <ContextMenuSeparator />

                    <ContextMenuItem
                        inset
                        className="pl-2 focus:bg-background focus:text-white"
                    >
                        Refresh
                    </ContextMenuItem>
                    <ContextMenuItem
                        inset
                        className="pl-2 focus:bg-background focus:text-white"
                    >
                        Change Background
                    </ContextMenuItem>

                    <ContextMenuSeparator />

                    <ContextMenuItem
                        inset
                        className="pl-2 focus:bg-background focus:text-white"
                    >
                        Sort
                    </ContextMenuItem>
                    <ContextMenuItem
                        inset
                        className="pl-2 focus:bg-background focus:text-white"
                    >
                        Clean Up
                    </ContextMenuItem>
                    <ContextMenuItem
                        inset
                        className="pl-2 focus:bg-background focus:text-white"
                    >
                        Clean Up by
                    </ContextMenuItem>

                    <ContextMenuSeparator />

                    <ContextMenuItem
                        inset
                        className="pl-2 focus:bg-background focus:text-white"
                    >
                        Preferences
                    </ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
        </div>
    );
}

export default Layout;
