import { siteConfig } from "@/src/config/site";
import { SVGProps } from "react";

function DRVGO({
    width,
    height,
    className,
    ...props
}: SVGProps<SVGSVGElement>) {
    return (
        <svg
            id={siteConfig.name}
            data-name={siteConfig.name}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2000 2000"
            height={height || 30}
            width={width || 30}
            className={className}
            {...props}
        >
            <path
                fill="#abcff9"
                d="M527.38,876.77,736,695.5c51.23-44.52,51.23-124.06,0-168.58L527.38,345.65c-72.28-62.81-184.91-11.47-184.91,84.29V792.48C342.47,888.24,455.1,939.58,527.38,876.77Z"
            />
            <path
                fill="#abcff9"
                d="M1470.29,1121.06l-208.61,181.27c-51.23,44.52-51.23,124.07,0,168.58l208.61,181.28c72.28,62.8,184.91,11.46,184.91-84.3V1205.35C1655.2,1109.59,1542.57,1058.25,1470.29,1121.06Z"
            />
            <path
                fill="#abcff9"
                d="M777.67,735.52,569.06,916.79c-51.23,44.52-51.23,124.07,0,168.58l208.61,181.27c72.29,62.81,184.91,11.47,184.91-84.29V819.81C962.58,724.05,850,672.71,777.67,735.52Z"
            />
            <path
                fill="#abcff9"
                d="M1428.61,916.79,1220,735.52c-72.29-62.81-184.91-11.47-184.91,84.29v362.54c0,95.76,112.62,147.1,184.91,84.29l208.61-181.27C1479.84,1040.86,1479.84,961.31,1428.61,916.79Z"
            />
            <path
                fill="#abcff9"
                d="M1472.62,347.82,1264,529.09c-51.23,44.51-51.23,124.06,0,168.58l208.61,181.27c72.28,62.81,184.91,11.47,184.91-84.29V432.11C1657.53,336.35,1544.9,285,1472.62,347.82Z"
            />
            <path
                fill="#abcff9"
                d="M738.32,1304.5,529.71,1123.23c-72.28-62.81-184.91-11.47-184.91,84.29v362.54c0,95.76,112.63,147.1,184.91,84.29l208.61-181.27C789.55,1428.56,789.55,1349,738.32,1304.5Z"
            />
        </svg>
    );
}

export default DRVGO;
