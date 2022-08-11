import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function SetPlan() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    return (

        <div className='bg-blue-200 w-[400px] h-[120px]'>
            <form action="" method="post" >
                <input className="m-3 w-3/4 h-8 px-3 text-base placeholder-gray-600 border border-blue-300 focus:shadow-outline" required type="text" id="plan_name" name="plan_name" placeholder="Plan 이름"></input>
            </form>

            <div className='grid grid-cols-4 gap-2 mx-3'>
                <div className='col-start-1 col-span-2'>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="언제부터"
                            InputProps={{style: {height: 40}}}
                            value={startDate}
                            onChange={(newValue) => {
                                setStartDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            inputFormat={"yyyy-MM-dd"}
                            mask={"____-__-__"}
                        />
                    </LocalizationProvider>
                </div>

                <div className='col-start-3 col-span-2'>
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                        <DatePicker
                            label="언제까지"
                            InputProps={{style: {height: 40}}}
                            value={endDate}
                            onChange={(newValue) => {
                                setEndDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            inputFormat={"yyyy-MM-dd"}
                            mask={"____-__-__"}
                        />
                    </LocalizationProvider>
                </div>
            </div>



        </div>

    );
}