import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Provider from "../components/global/provider";
import { Toaster } from "../components/ui/toaster";
import { siteConfig } from "../config/site";
import { cn } from "../lib/utils";
import { DefaultProps } from "../types";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `${siteConfig.name} | %s`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [
        {
            name: siteConfig.name,
            url: siteConfig.url,
        },
    ],
    creator: siteConfig.name,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL(siteConfig.url),
};

function RootLayout({ children }: DefaultProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <Provider>
                <body
                    className={cn(
                        "min-h-screen overflow-x-hidden scroll-smooth antialiased",
                        poppins.className
                    )}
                >
                    {children}
                    <Analytics />
                    <Toaster />
                </body>
            </Provider>
        </html>
    );
}

export default RootLayout;
