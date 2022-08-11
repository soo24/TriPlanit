import SetPlan from '../components/setPlan'
import Head from 'next/head'
import Mapscreen from '../components/Mapscreen';
import PlanDay from '../components/plan_day'

export default function TravelRegister() {
    return (
        <>
            <div>
                <Head>
                    <title>여행 등록</title>
                </Head>
            </div>
            {/* 여기 div 스타일은 진아껄로 맞추기 */}
            <div>
            {/* 오버레이 짜야함 */}
                {/* <Mapscreen /> */}
                <SetPlan />
                
                

            </div>
            <div className='container w-[400px] bg-slate-50'>
            <PlanDay/>
           
        </div>

            {/* 여기부터 수연코드 시작 */}


        </>
    );

}