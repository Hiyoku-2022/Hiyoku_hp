import React from "react";
import Image from "next/image";

export const TrainingBanner  = () => {
    return (
        <div className="max-w-[1200px] mx-auto my-20 flex gap-10">

            
            <div className="w-1/2 flex justify-center">
                <Image
                    src="/service/hiyokuPamphlet.svg"
                    alt="hiyokuPamphlet.pdf"
                    width={600}
                    height={1200}
                    className="object-contain"
                />
            </div>
            
            <div>
                <iframe 
                    src="https://youtu.be/PvIrUg2c3OQ" 
                ></iframe>

                <iframe 
                    src="https://youtu.be/PrJeRe20B7I"
                ></iframe>
            </div>
        </div>
    );
};