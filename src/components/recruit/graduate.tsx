// 新卒画面
type guraduateProps={
    id: number;
    colomun: string;
    detail: string;
}

const guraduateList:guraduateProps[]=[
    {id:1,colomun: '応募資格',detail: ''},
    {id:2,colomun: '職種・仕事内容',detail: 'エンジニア'},
    {id:3,colomun: '雇用形態',detail: '正社員'},
    {id:4,colomun: '求める人物像',detail: 'やる気のある人'},
    {id:5,colomun: '試用期間',detail: '6ヶ月'},
    {id:6,colomun: '給与',detail: '180,000〜'},
    {id:7,colomun: '勤務地',detail: '博多'},
    {id:8,colomun: '待遇・福利厚生',detail: ''},
    {id:9,colomun: '勤務時間',detail: '9:00〜18:00'},
    {id:10,colomun: '休日休暇',detail: '完全週休2日制 土日祝日休み 年間休日125日'},
    {id:11,colomun: '選考フロー',detail: ''},
];

// export default function Graduate(){
const Graduate = () => {
return (
<div className="border w-full">
    <h1 className="text-center mt-10 text-2xl text-bold">新卒採用</h1>
    <div className="mx-auto py-10 px-20">
    <table className="text-left mx-auto w-full">
    <tbody className="border-t">
            {guraduateList.map((guraduateList)=>(
                <tr key={guraduateList.id} className="h-20 border-b">
                <th>{guraduateList.colomun}</th>
                <td>{guraduateList.detail}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
</div>
);

}

export default Graduate;