import Image from "next/image";

export default function Recommendation_menu() {
    return (
        <div className="grid grid-cols-4 gap-5 justify-center">
            <div><Image className="" src="/favicon.ico" alt="" width={150} height={150}/></div>
            <div><Image className="" src="/favicon.ico" alt="" width={150} height={150}/></div>
            <div><Image className="" src="/favicon.ico" alt="" width={150} height={150}/></div>
            <div><Image className="" src="/favicon.ico" alt="" width={150} height={150}/></div>
        </div>
    );
  }