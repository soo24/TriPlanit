import React, { useState } from 'react'
import PlanList from '../components/plan_list'

export default function Plan_day() {
    const [dayList, setCardList] = useState([{
        day_id: 'Day1',
        day_date: '08.04'
    },{
        day_id: 'Day2',
        day_date: '08.05'
    },{
        day_id: 'Day3',
        day_date: '08.06' 
    }])

    return (
        <div className='grid grid-cols-1 mb-1'>
        {
            dayList.map((day,index) => {
                return (
                    <div key={index} className="text-lg align-text-bottom text-stone-700  mt-6">
                        <p className=" ml-6">{day.day_id} - {day.day_date}</p>
                        <PlanList/>
                    </div>
                )
            })
        }
        </div>
    )
  }