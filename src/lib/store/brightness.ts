import { create } from "zustand";

interface BrightnessState {
    brightness: number;
    setBrightness: (value: number) => void;
}

const useBrightnessStore = create<BrightnessState>((set) => ({
    brightness: 1,
    setBrightness: (value) => set({ brightness: value }),
}));

export default useBrightnessStore;
