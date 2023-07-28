"use client";

import useBrightnessStore from "@/src/lib/store/brightness";
import { DefaultProps } from "@/src/types";

function BrightnessProvider({ children }: DefaultProps) {
    const brightness = useBrightnessStore((state) => state.brightness);

    const wrapperStyle = {
        filter: `brightness(${brightness})`,
    };

    return <div style={wrapperStyle}>{children}</div>;
}

export default BrightnessProvider;
