import * as React from "react";
import { ThoughtsContent } from "./ThoughtsContent";
import HeadTitle from "./HeadTitle";

export function HiyokuThoughts() {
return (
    <>
    <main className={`
        box-border bg-white mx-auto
        flex flex-col gap-16 justify-center items-center
        gap-10 px-5 py-10 w-[90%]
        md:px-16 md:py-24 md:max-w-[70%]
    `}>
        <HeadTitle>Hiyokuの想い</HeadTitle>
        <ThoughtsContent />
    </main>
    </>
);
}

export default HiyokuThoughts;