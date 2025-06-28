import HeadTitle from "./head-tile";
import WorkDetail from "./hiyoku-work-detail";

export default function AboutWork(){
    return(
        <div className="bg-white overflow-hidden">
        <div className="w-250 mx-auto my-10">
        <HeadTitle>仕事について</HeadTitle>
        <WorkDetail></WorkDetail>
        </div>
        </div>
    );
}