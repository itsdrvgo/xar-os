"use client";

import { DefaultProps } from "@/src/types";
import { TooltipProvider } from "../ui/tooltip";

function Provider({ children }: DefaultProps) {
    return <TooltipProvider delayDuration={0}>{children}</TooltipProvider>;
}

export default Provider;
