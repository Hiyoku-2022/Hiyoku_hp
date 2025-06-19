"use client";

import React from "react";
import { FooterContact } from "./FooterContact";
import { FooterButtons } from "./FooterButtons";
import { FooterNav } from "./FooterNav";
import { FooterCopyright } from "./FooterCopyright";

export const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 pt-10 mt-16">
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
