"use client";

import React from "react";
import { FooterContact } from "./FooterContact";
import { FooterButtons } from "./FooterButtons";
import { FooterNav } from "./FooterNav";
import { FooterCopyright } from "./FooterCopyright";

export function Footer() {
    return (
        <footer className={`
            min-h-[500px] md:min-h-[400px]
            bg-gradient-to-b from-[#8AB9C7] to-[#FFD1A8]
            flex items-center
            pt-[50px] pb-[50px]
        `}>
            <div className={`
                max-w-7xl mx-auto w-full px-8
                md:flex md:flex-col md:items-center
            `}>
                <div className={`
                    flex flex-col md:flex-row
                    items-center md:items-start
                    md:w-[80%]
                    justify-center md:justify-between
                    space-y-5 md:space-y-0
                    mb-[50px]
                `}>
                    <FooterContact />
                    <FooterButtons />
                </div>
                <div className={`
                    flex flex-col md:flex-row
                    items-center md:items-end
                    md:w-[80%]
                    justify-center md:justify-between
                    space-y-10 md:space-y-0
                `}>
                    <FooterNav />
                    <FooterCopyright />
                </div>
            </div>
        </footer>
    );
};
