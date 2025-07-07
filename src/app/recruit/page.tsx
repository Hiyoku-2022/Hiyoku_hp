import AboutHiyoku from "@/components/recruit/about-hiyoku";
import AboutWork from "@/components/recruit/about-work";
import Interview from "@/components/recruit/interview";
import Solicitation from "@/components/recruit/solicitation";
import FAQ from "@/components/recruit/FAQ";
import Pankuzu from "@/components/shared/Pankuzu";

export default function RecruitPage(){
    return(
    <div>
    <Pankuzu
        japaneseTitle="採用情報"
        englishTitle="RECRUIT"
        breadcrumbs={[
            { label: "採用情報" }
        ]}
    />

    <div className="text-center">
        <p>ひよくでは一緒に働いてくれるメンバーを探しています。</p>
        <p className="mx-auto w-[50%]">
            一緒に働きませんか？テキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入ります
        </p>
    </div>

    <div className="my-32">
    <AboutHiyoku/>
    </div>

    <AboutWork/>
    <div className="my-30">
        <Interview/>
    </div>

    <Solicitation/>

    <FAQ/>

    </div>
);
}