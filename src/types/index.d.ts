import { HTMLAttributes, ReactNode } from "react";

export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    keywords: string[];
    links: {
        twitter: string;
        github: string;
        instagram: string;
        youtube: string;
        discord: string;
        source: string;
    };
};

export type DefaultProps = HTMLAttributes<HTMLElement>;

export interface RootLayoutProps {
    children: ReactNode;
}
