// import React from "react";
type Title = {
    children : React.ReactNode
}
export default function HeadTitle({children}: Title){
    return(
        <div className="w-200 mx-auto my-[90px]">
        <h1 className="font-Family_1 font-bold text-center mx-auto border-b-2 border-foreground w-fit text-[23px] md:text-[28px]">{children}</h1>
        </div>
    );
}