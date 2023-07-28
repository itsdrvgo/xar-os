"use client";

import useBrightnessStore from "@/src/lib/store/brightness";
import { DefaultProps } from "@/src/types";
import { Icons } from "../icons/icons";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Slider } from "../ui/slider";
import RealTimeClock from "./clock";

function ActionBar({ className }: DefaultProps) {
    const setBrightness = useBrightnessStore((state) => state.setBrightness);

    const handleSliderChange = (newValue: number[]) => {
        setBrightness(newValue[0] / 100);
    };

    return (
        <div className="flex items-center gap-5">
            <Icons.wifi className="h-4 w-4" />
            <Popover>
                <PopoverTrigger className="cursor-default">
                    <Icons.actionbar className="h-4 w-4" />
                </PopoverTrigger>
                <PopoverContent className="flex cursor-default flex-col gap-2">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-4 rounded-md bg-white/20 p-4 backdrop-blur-md">
                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-blue-700 p-[6px] text-white">
                                    <Icons.wifi className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Wi-Fi</p>
                                    <p>Home</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-blue-700 p-[6px] text-white">
                                    <Icons.bluetooth className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">
                                        Bluetooth
                                    </p>
                                    <p>On</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-blue-700 p-[6px] text-white">
                                    <Icons.airdrop className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">
                                        Airdrop
                                    </p>
                                    <p>Everyone</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-white/20 p-3 text-center backdrop-blur-md">
                                <Icons.moon className="h-5 w-5" />
                                <p>Focus</p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-white/20 p-3 text-center backdrop-blur-md">
                                <Icons.mic className="h-5 w-5" />
                                <p>Mic Mode</p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-white/20 p-3 text-center backdrop-blur-md">
                                <Icons.layers className="h-5 w-5" />
                                <p>Stage Manager</p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-white/20 p-3 text-center backdrop-blur-md">
                                <Icons.cast className="h-5 w-5" />
                                <p>Screen Cast</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded-md bg-white/20 p-4 backdrop-blur-md">
                        <p className="text-sm font-medium">Display</p>
                        <Slider
                            max={100}
                            step={10}
                            min={40}
                            defaultValue={[100]}
                            onValueChange={(value) => handleSliderChange(value)}
                        />
                    </div>
                    <div className="flex flex-col gap-4 rounded-md bg-white/20 p-4 backdrop-blur-md">
                        <p className="text-sm font-medium">Sound</p>
                        <Slider max={100} step={1} defaultValue={[70]} />
                    </div>
                </PopoverContent>
            </Popover>
            <Icons.batteryCharging className="h-4 w-4" />
            <RealTimeClock />
        </div>
    );
}

export default ActionBar;
