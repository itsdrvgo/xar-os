"use client";

import { useState } from "react";
import Loader from "../global/loader";
import LockScreen from "./lock-screen";

function LockScreenLoad() {
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => setIsLoading(false), 4100);

    return (
        <>
            {isLoading ? (
                <Loader className="absolute right-0 top-0 z-40" />
            ) : null}
            <LockScreen />
        </>
    );
}

export default LockScreenLoad;
