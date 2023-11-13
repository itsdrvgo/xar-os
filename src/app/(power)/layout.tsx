import { RootLayoutProps } from "@/src/types";

function Layout({ children }: RootLayoutProps) {
    return (
        <div className="flex h-screen flex-col overflow-hidden">
            <main className="flex-1">{children}</main>
        </div>
    );
}

export default Layout;
