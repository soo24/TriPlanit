import { useState } from 'react'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons'


export default function SetPlan({ toggleToParent }) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [toggleBtn, setToggle] = useState(false);

    const toggleSidebar = () => {
        setToggle(toggleBtn => !toggleBtn);
        toggleToParent(toggleBtn);
    }

    return (

        // hide되면 true, show 되면 false
        <> 

        <div className='bg-blue-200 w-[400px] h-[120px]' >
        

        <div className='grid grid-cols-8 gap-2 mx-3'>

            <form action="" method="post" className='col-start-1 col-span-7'>
                <input className="m-3 w-4/5 h-8 px-3 text-base placeholder-gray-600 border border-blue-300 focus:shadow-outline" required type="text" id="plan_name" name="plan_name" placeholder="Plan 이름"></input>
            </form>
            
            <button className='col-start-8' onClick={() => toggleSidebar()}>
                    <FontAwesomeIcon icon={faCircleLeft} size='xl' className='m-3' />
                </button>
            
                <div className='col-start-1 col-span-4'>
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

                <div className='col-start-5 col-span-4'>
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

        </>
    );
}