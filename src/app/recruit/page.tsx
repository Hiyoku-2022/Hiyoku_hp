import AboutHiyoku from "@/components/recruit/AboutHiyoku";
import AboutWork from "@/components/recruit/AboutWork";
import Interview from "@/components/recruit/ItemList";
import Solicitation from "@/components/recruit/Solicitation";
import FAQ from "@/components/recruit/FAQ";
import Pankuzu from "@/components/shared/Pankuzu";

export default function RecruitPage(){
    return(
    <div>
    <Pankuzu
        titleJP="採用情報"
        subtitleEN="RECRUIT"
        breadcrumbs={[
            { label: "採用情報" }
        ]}
    />

    <div className="font-Family_1 mx-auto text-center w-[90%]">
        <p>ひよくでは一緒に働いてくれるメンバーを探しています。</p>
        <p className="font-Family_1 mx-auto w-[90%] md:w-[70%]">
            一緒に働きませんか？テキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入ります
        </p>
    </div>

    <AboutHiyoku/>

    <AboutWork/>
    <div className="my-30">
        <Interview/>
    </div>

    <Solicitation/>

    <FAQ/>

    </div>
);
}