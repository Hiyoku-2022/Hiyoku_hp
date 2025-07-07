// import React from "react";
type Title = {
    children : React.ReactNode
}
export default function HeadTitle({children}: Title){
    return(
        <div className="w-200 mx-auto my-[90px]">
        <h1 className="text-center mx-auto border-b-2 border-[#44585F] w-fit text-[28px]">{children}</h1>
        </div>
    );
}