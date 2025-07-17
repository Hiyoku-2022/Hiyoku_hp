import * as React from "react";
import { ThoughtsContent } from "./ThoughtsContent";
import HeadTitle from "./HeadTitle";

export function HiyokuThoughts() {
  return (
    <>
      <main className="box-border flex flex-col gap-16 justify-center items-center px-16 py-24 mx-auto w-full bg-white max-w-[1000px] max-md:gap-12 max-md:px-10 max-md:py-16 max-md:max-w-[991px] max-sm:gap-10 max-sm:px-5 max-sm:py-10 max-sm:max-w-screen-sm">
        <HeadTitle>Hiyokuの想い</HeadTitle>
        <ThoughtsContent />
      </main>
    </>
  );
}

export default HiyokuThoughts;
