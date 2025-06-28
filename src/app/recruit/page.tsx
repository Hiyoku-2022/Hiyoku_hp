import AboutHiyoku from "@/components/recruit/about-hiyoku";
import AboutWork from "@/components/recruit/about-work";
import Interview from "@/components/recruit/interview";
import Solicitation from "@/components/recruit/solicitation";
import FAQ from "@/components/recruit/FAQ";

export default function (){
    return(
    <main>
    <div className="p-36">   
    <h1 className="text-center text-3xl">採用情報</h1>
    <h2 className="text-center text-base font-bold">RECRUIT</h2>
    </div> 

    <div className="text-center">
        <p>ひよくでは一緒に働いてくれるメンバーを探しています。</p>
        <p>一緒に働きませんか？</p>
    </div>

    <AboutHiyoku/>

    <AboutWork/>
    <div className="my-30">
        <Interview/>
    </div>

    <Solicitation/>

    <FAQ/>

    </main>
);
}