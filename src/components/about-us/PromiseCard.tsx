"use client";
import * as React from "react";

interface PromiseCardProps {
    imageUrl: string;
    title: string;
    description: string;
    className?: string;
}

export const PromiseCard: React.FC<PromiseCardProps> = ({
    imageUrl,
    title,
    description,
    className = "",
}) => {
    return (
        <article
            className={`p-8 bg-white rounded-xl w-[90%] md:w-[50%] xl:w-[300px] space-y-5 ${className}`}
        >
            {/*画像の設定*/}
            <img
                src={imageUrl}
                alt=""
                className="object-contain w-full aspect-[1.55]"
            />

            {/*中間タイトルの設定*/}
            <h3 className="text-xl tracking-wider leading-8 text-center">
                {title.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        {index < title.split("\n").length - 1 && <br />}
                    </React.Fragment>
                ))}
            </h3>

            {/*詳細文の設定*/}
            <p className="text-base tracking-wider leading-7">
                {description}
            </p>
        </article>
    );
};