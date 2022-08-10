import Image from "next/image";
import randomPic from '../public/fff.png';

export default function Others({title}) {
    return (
        <div>
            <div className="text-xl font-bold mb-5 ml-5 p-2">
                <h1>타인의 여행</h1>
            </div>
            <div className='m-7'>
                <div className="grid grid-cols-4 gap-5 justify-items-center">
                    <div><Image className="" src='/others1.png' alt="" width={500} height={350}/><p>여름 제주 드라이브 코스</p></div>
                    <div><Image className="" src='/others2.png' alt="" width={500} height={350}/><p>부모님과 함께하는 퐝 여행</p></div>
                    <div><Image className="" src='/others3.png' alt="" width={500} height={350}/><p>노잼 아닌 유잼 대전여행</p></div>
                    <div><Image className="" src='/others4.png' alt="" width={500} height={350}/><p>전주에서 맛집 탐방</p></div>
                </div>
             </div>
        </div>
    );
  }