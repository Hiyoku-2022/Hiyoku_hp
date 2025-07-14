"use client";
import * as React from "react";
import { PhilosophyContent } from "./PhilosophyContent";

export function HiyokuPhilosophy() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Ryo+Gothic+PlusN:wght@400;500&family=Noto+Sans+JP:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <main className="box-border flex flex-col gap-16 justify-center items-center px-16 py-24 mx-auto my-0 w-full bg-white max-w-[1000px] max-md:gap-12 max-md:px-10 max-md:py-16 max-md:max-w-[991px] max-sm:gap-10 max-sm:px-5 max-sm:py-10 max-sm:max-w-screen-sm">
        <header className="gap-2.5 pb-1.5 text-3xl font-medium tracking-wider leading-10 text-center text-gray-600 border-b-2 border-solid border-b-gray-600 max-md:text-2xl max-md:tracking-wider max-sm:text-xl max-sm:tracking-wider">
          <h1>Hiyokuの想い</h1>
        </header>
        <PhilosophyContent />
      </main>
    </>
  );
}

export default HiyokuPhilosophy;
