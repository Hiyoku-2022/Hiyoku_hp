"use client";

import React from "react";
import { FooterContact } from "./footer-contact";
import { FooterButtons } from "./footer-buttons";
import { FooterNav } from "./footer-nav";
import { FooterCopyright } from "./footer-copyright";

export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#8AB9C7] to-[#FFD1A8] text-foreground pt-10 mt-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center md:grid md:grid-cols-2 md:gap-8 md:items-start">
                <div className="space-y-6 flex flex-col items-center md:items-start">
                    <FooterContact />
                    <FooterButtons />
                </div>
                <div className="space-y-6 flex flex-col items-center md:items-start">
                    <FooterNav />
                </div>
            </div>
            <FooterCopyright />
        </footer>
    );
};
