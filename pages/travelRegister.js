import PlanDay from '../components/plan_day'

export default function travelRegister() {
  return (
    <div>
        {/* 여기 div 스타일은 진아껄로 맞추기 */}
        <div className='bg-blue-200 pt-[100px] w-[400px]'> </div>
        
        {/* 여기부터 수연코드 시작 */}
        <div className='container w-[400px] bg-slate-50'>
            <PlanDay/>
           
        </div>

    </div>
    // 수연코드 끝
    

  )
}