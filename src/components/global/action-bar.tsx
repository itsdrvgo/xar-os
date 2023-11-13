"use client";

import { cn } from "@/src/lib/utils";
import { DefaultProps } from "@/src/types";
import { Slider } from "@nextui-org/react";
import { Icons } from "../icons/icons";
import Clock from "../ui/Clock";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";

function ActionBar({ className, ...props }: DefaultProps) {
    return (
        <div className={cn("flex items-center gap-5", className)} {...props}>
            <Icons.wifi className="h-4 w-4" />

            <Popover>
                <PopoverTrigger className="cursor-default">
                    <Icons.actionbar className="h-4 w-4" />
                </PopoverTrigger>

                <PopoverContent className="flex cursor-default flex-col gap-2">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-4 rounded-md bg-white/10 p-4 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-blue-700 p-[6px] text-white">
                                    <Icons.wifi className="h-5 w-5" />
                                </div>

                                <div className="text-xs">
                                    <p className="font-medium">Wi-Fi</p>
                                    <p>Home</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-blue-700 p-[6px] text-white">
                                    <Icons.bluetooth className="h-5 w-5" />
                                </div>

                                <div className="text-xs">
                                    <p className="font-medium">Bluetooth</p>
                                    <p>On</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-blue-700 p-[6px] text-white">
                                    <Icons.airdrop className="h-5 w-5" />
                                </div>

                                <div className="text-xs">
                                    <p className="font-medium">Airdrop</p>
                                    <p>Everyone</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-white/10 p-3 text-center backdrop-blur-sm">
                                <Icons.moon className="h-5 w-5" />
                                <p>Focus</p>
                            </div>

                            <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-white/10 p-3 text-center backdrop-blur-sm">
                                <Icons.mic className="h-5 w-5" />
                                <p>Mic Mode</p>
                            </div>

                            <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-white/10 p-3 text-center backdrop-blur-sm">
                                <Icons.layers className="h-5 w-5" />
                                <p>Stage Manager</p>
                            </div>

                            <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-white/10 p-3 text-center backdrop-blur-sm">
                                <Icons.cast className="h-5 w-5" />
                                <p>Screen Cast</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 rounded-md bg-white/20 p-4 backdrop-blur-md">
                        <p className="font-medium">Display</p>

                        <Slider
                            maxValue={100}
                            minValue={40}
                            step={10}
                            color="foreground"
                            defaultValue={100}
                        />
                    </div>

                    <div className="flex flex-col gap-4 rounded-md bg-white/20 p-4 backdrop-blur-md">
                        <p className="font-medium">Sound</p>
                        <Slider
                            defaultValue={70}
                            step={10}
                            maxValue={100}
                            color="foreground"
                        />
                    </div>
                </PopoverContent>
            </Popover>

            <Icons.batteryCharging className="h-4 w-4" />
            <Clock />
        </div>
    );
}

export default ActionBar;
