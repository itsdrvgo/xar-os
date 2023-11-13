import Taskbar from "@/src/components/global/taskbar";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuTrigger,
} from "@/src/components/ui/ContentMenu";
import { RootLayoutProps } from "@/src/types";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Desktop",
};

function Layout({ children }: RootLayoutProps) {
    return (
        <div className="flex h-screen flex-col overflow-hidden">
            <Taskbar />

            <ContextMenu>
                <ContextMenuTrigger className="h-full w-full">
                    <main className="flex-1">{children}</main>
                </ContextMenuTrigger>

                <ContextMenuContent className="w-64">
                    <ContextMenuItem>New Folder</ContextMenuItem>

                    <ContextMenuSeparator />

                    <ContextMenuItem>Refresh</ContextMenuItem>
                    <ContextMenuItem>Change Background</ContextMenuItem>

                    <ContextMenuSeparator />

                    <ContextMenuItem>Sort</ContextMenuItem>
                    <ContextMenuItem>Clean Up</ContextMenuItem>
                    <ContextMenuItem>Clean Up by</ContextMenuItem>

                    <ContextMenuSeparator />

                    <ContextMenuItem>Preferences</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
        </div>
    );
}

export default Layout;
