import { SVGProps } from "react";

function XAR({ width, height, className, ...props }: SVGProps<SVGSVGElement>) {
    return (
        <svg
            id="XAR"
            data-name="XAR"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2000 2000"
            height={height || 30}
            width={width || 30}
            className={className}
            {...props}
        >
            <polygon
                fill="#fff"
                points="1707.54 1848.57 583.21 151.44 293.96 151.44 292.46 152.19 1416.29 1848.57 1707.54 1848.57"
            />
            <polygon
                fill="#fff"
                points="292.46 1848.57 583.71 1848.57 958.21 1283.28 812.58 1063.47 292.46 1848.57"
            />
            <polygon
                fill="#fff"
                points="1707.54 152.19 1706.04 151.44 1416.8 151.44 1041.65 717.7 1187.27 937.51 1707.54 152.19"
            />
        </svg>
    );
}

export default XAR;
