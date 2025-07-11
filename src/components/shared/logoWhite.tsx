"use client";

import Link from "next/link";
import Image from "next/image";

export function LogoWhite () {
    return (
        <Link href="/">
            <div className="flex items-center space-x-2">
                <Image
                    src="/icon/logoWhite.svg"
                    alt="Site logo icon"
                    width={24}
                    height={24}
                    className="w-10 h-10 md:w-12 md:h-12"
                />
                <Image
                    src="/icon/nameWhite.svg"
                    alt="Site name"
                    width={100}
                    height={24}
                    className="w-24 h-auto md:w-28 lg:w-32"
                />
            </div>
        </Link>
    )
};
