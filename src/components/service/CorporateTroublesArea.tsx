import React from "react";
import Image from "next/image";
import { SpeechBubble, texts } from "../ui/SpeechBubbles";

export function CorporateTroublesArea () {
    return (
        <div className="bg-background">
            <div className="flex justify-center items-center text-center mb-[100px]">
                <p className="relative text-3xl text-sub03">
                    企業でこのようなお悩みを<span className="md:hidden"><br /></span>抱えていませんか？
                    <span className="absolute bottom-0 left-0 w-full border-b-[1.5px] border-dashed border-black translate-y-[5px]"></span>
                </p>
            </div>
            <div className={`
                relative
                flex flex-col justify-center items-center
                gap-y-5
            `}>
                <div className={`
                    flex flex-col md:flex-row
                    justify-center items-center
                    w-full gap-y-5
                    md:gap-x-[300px] md:gap-y-0
                `}>
                    <SpeechBubble bgImage="/service/speechBubbleLeft.svg" text={texts.type1} />
                    <SpeechBubble bgImage="/service/speechBubbleRight.svg" text={texts.type2}  />
                </div>


                <div className={`
                    relative
                    flex flex-col md:flex-row
                    justify-center items-center
                    w-full gap-y-5
                    md:gap-x-[200px] md:gap-y-0
                `}>
                    <SpeechBubble bgImage="/service/speechBubbleLeft.svg" text={texts.type3}  />
                    <SpeechBubble bgImage="/service/speechBubbleRight.svg" text={texts.type4}  />

                    <div className="md:hidden mt-6">
                        <Image
                            src="/service/imagePeople.svg"
                            alt=""
                            width={200}
                            height={400}
                            className="w-[200px] h-[400px]"
                        />
                    </div>
                </div>

                <Image
                    src="/service/imagePeople.svg"
                    alt=""
                    width={250}
                    height={500}
                    className={`
                        absolute
                        hidden md:block
                        left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                        w-[250px] h-[500px]
                    `}
                />
            </div>
        </div>
    )
}