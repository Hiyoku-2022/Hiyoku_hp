import React from "react";

export function FooterContact ()  {
    return (
        <div className="space-y-4 max-w-md text-center text-white md:text-start">
            <p className="text-4xl font-bold mb-5">CONTACT US</p>
            <div className="w-[80%] md:w-full mx-auto">
                <p className={`
                    text-base font-bold
                    text-center md:text-start
                    leading-relaxed
                `}>
                    ご相談・ご質問、各種サービス導入、採用については
                    <span className="hidden md:inline"><br /></span>
                    こちらよりお問い合わせください。
                </p>
            </div>
        </div>
    )
}