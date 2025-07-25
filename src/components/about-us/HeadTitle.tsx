type Title = {
    children : React.ReactNode
}
export default function HeadTitle({children}: Title){
    return(
        <div>
        <h1 className="gap-2.5 pb-1.5 text-3xl font-medium tracking-wider leading-10 text-center border-b-2 border-solid border-b-gray-600 max-md:text-2xl max-md:tracking-wider max-sm:text-xl max-sm:tracking-wider">{children}</h1>
        </div>
    );
}