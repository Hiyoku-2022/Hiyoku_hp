"use client";

import Link from "next/link";
import Image from "next/image";

export function HiyokuLogo () {
    return (
        <Link href="/">
            <div className="flex items-center space-x-2">
                <Image src="/icon/favicon.ico" alt="Site logo icon" width={24} height={24} style={{ width: 'auto', height: 'auto' }} />
                <Image src="/icon/name.png" alt="Site name" width={100} height={24} style={{ width: 'auto', height: 'auto' }} />
            </div>
        </Link>
    )
};
