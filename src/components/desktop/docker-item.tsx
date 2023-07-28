"use client";

import { cn } from "@/src/lib/utils";
import Image from "next/image";
import React, { ImgHTMLAttributes } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const DockItem = ({
    src,
    alt,
    className,
}: ImgHTMLAttributes<HTMLImageElement>) => {
    return (
        <Tooltip>
            <TooltipTrigger
                className={cn(
                    "transition-all duration-150 ease-in-out hover:mx-5 hover:-translate-y-6 hover:scale-150",
                    className
                )}
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
