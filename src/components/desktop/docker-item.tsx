"use client";

import { cn } from "@/src/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface PagePros {
    src: string | StaticImport;
    alt: string;
    className?: string;
    redirect?: string;
}

const DockItem = ({ src, alt, className, redirect }: PagePros) => {
    return (
        <Tooltip>
            <TooltipTrigger
                className={cn(
                    "cursor-default transition-all duration-150 ease-in-out hover:mx-5 hover:-translate-y-6 hover:scale-150",
                    className
                )}
                onClick={() => (redirect ? window.open(redirect) : null)}
            >
                {" "}
                <Image src={src!} alt={alt!} width={50} height={50} />
            </TooltipTrigger>
            <TooltipContent>
                <p>{alt}</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default DockItem;
