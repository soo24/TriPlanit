import Image from "next/image";
import randomPic from '../public/fff.png';

export default function Others({title}) {
    return (
        <div className="container w-4/5">
            <div className="text-lg font-bold mb-5 p-5">
                <h1>타인의 여행</h1>
            </div>
            <div className="container">
                <div className="grid grid-cols-4 gap-5 justify-items-center">
                    <div><Image className="" src={randomPic} alt="" width={500} height={350}/></div>
                    <div><Image className="" src={randomPic} alt="" width={500} height={350}/></div>
                    <div><Image className="" src={randomPic} alt="" width={500} height={350}/></div>
                    <div><Image className="" src={randomPic} alt="" width={500} height={350}/></div>
                </div>
             </div>
        </div>
    );
  }