// import React from "react";
type Title = {
    children : React.ReactNode
}
export default function HeadTitle({children}: Title){
    return(
        <div className="w-200 mx-auto my-10">
        <h1 className="text-center mx-auto border-b border-black w-fit text-2xl">{children}</h1>
        </div>
    );
}