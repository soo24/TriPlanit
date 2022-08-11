import React, { useState } from 'react'
import SetPlan from '../components/setPlan'
import PlanDay from '../components/plan_day'

export default function Plan_sidebar() {
    return (
        <div className='grid grid-rows-6 w-[400px] h-[720px]'>
            <div className='row-start-1'>
                    <SetPlan />
            </div>

            <div className='row-start-2 container overflow-scroll h-[770px] w-[400px] scroll-smooth bg-slate-50 '>
                <PlanDay/>
            </div>
        </div>
        
    )
}