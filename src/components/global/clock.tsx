import React, { useEffect, useState } from "react";

const RealTimeClock: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedDate = currentDate.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
    });

    const formattedTime = currentDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });

    return (
        <div className="flex cursor-default items-center gap-2 text-xs">
            <p>{formattedDate}</p>
            <p>{formattedTime}</p>
        </div>
    );
};

export default RealTimeClock;
