import AboutHiyoku from "@/components/recruit/about-hiyoku";
import AboutWork from "@/components/recruit/about-work";
import Interview from "@/components/recruit/interview";
import Solicitation from "@/components/recruit/solicitation";
import FAQ from "@/components/recruit/FAQ";
import PageTitle from "@/components/shared/PageTitle";
// import { Header } from "@/components/header/Header";

export default function (){
    return(
    <main>
        {/* <Header /> */}
    <PageTitle
        japaneseTitle="採用情報"
        englishTitle="RECRUIT"
    />

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