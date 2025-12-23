import React from "react";
import Image from "next/image";

export function PamphletSectionArea() {
    return(
        <div className = "bg-white">
            <Image 
            src="/service/hiyokuPamphlet.svg"
            alt="hiyokuPamphlet.pdf"
            width={800}
            height={1600}
            className="mx-auto"
            />

            <Image 
            src="/service/hiyokuPamphlet2.svg"
            alt="hiyokuPamphlet.pdf"
            width={800}
            height={1600}
            className="mx-auto mt-10"
            />
        </div>
    );
}