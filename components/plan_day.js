import React, { useState } from 'react'
import PlanList from '../components/plan_list'

export default function plan_day() {
    const [dayList, setCardList] = useState([{
        id: 0,
        day_id: 'Day1',
        day_date: '08.04'
    },{
        id: 1,
        day_id: 'Day2',
        day_date: '08.05'
    },{
        id: 2,
        day_id: 'Day3',
        day_date: '08.06' 
    }])

    return (
        <div className='grid grid-cols-1 mb-1'>
        {
            dayList.map((day) => {
                return (
                    <div id={day.id} className="text-lg align-text-bottom text-stone-700  mt-6">
                        <p className=" ml-6">{day.day_id} - {day.day_date}</p>
                        <PlanList/>
                    </div>
                )
            })
        }
        </div>
    )
  }