"use client";

import Link from "next/link";
import Image from "next/image";

export function HiyokuLogo () {
    return (
        <Link href="/">
            <div className="flex items-center space-x-2">
                <Image
                    src="/icon/favicon.ico"
                    alt="Site logo icon"
                    width={24}
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
                <Image
                    src="/icon/name.png"
                    alt="Site name"
                    width={100}
                    height={24}
                    className="w-24 h-auto md:w-28 lg:w-32"
                />
            </div>
        </Link>
    )
};
