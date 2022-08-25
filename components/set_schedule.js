import React, { useState, useRef } from 'react'
import PlanList from './plan_list'
import CardModal from '../components/modal/CardModal'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons'


export default function Set_schedule({ toggleToParent }) {
    const today = new Date();
    var lenOfDayList = 0;
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const [toggleBtn, setToggle] = useState(false);
    const [dayToggle, setDayToggle] = useState(false);

    const toggleSidebar = () => {
        setToggle(toggleBtn => !toggleBtn);
        toggleToParent(toggleBtn);
    }

    const [dayList, setCardList] = useState([]);

    //plan data 받아올 변수
    const planData=[];
    const [isClicked, setIsClicked] = useState([false]);

    const HandleChange = () => {
        console.log("state change");
        setIsClicked(!isClicked);
        console.log(isClicked);
    }


    //컴포넌트 렌더링 시 Day단위의 데이터를 나누어서 불러옴
    const passData = (data) => {
        if(isClicked==true){
            console.log("Passing Data");
            planData.push(data);
            console.log(planData);
        }
    }

    //버튼 클릭 시, 플랜을 저장하는 함수
    const savePlan = (data) => {
        console.log("Set value");
        console.log(value);
    }


    const calTheDay = () => {
        setDayToggle(dayToggle => !dayToggle);
        var tempDate = startDate.getDate();
        var cnt = 0;
        const totalDay = endDate.getDate() - startDate.getDate() + 1;
        const sdayMonth = startDate.getMonth() + 1;

        do {
            cnt++;

            const newDay = {
                day_id: cnt,
                day_date: tempDate,
                day_month: sdayMonth,
            }

            // 기간을 두달 이상 잡지 않는 다는 전제하에, 달이 넘어가는 일정을 잡게 될 경우(ex. 8/30-9/2)
            if(totalDay-1 < 0 ) {
                if(sdayMonth == 1 || sdayMonth == 3 || sdayMonth == 5 || sdayMonth == 7 ||sdayMonth == 8 ||sdayMonth == 10 ||sdayMonth == 12) {
                    if(tempDate == 31) {
                        tempDate = 1;
                        sdayMonth = sdayMonth + 1;
                    } else {
                        tempDate = tempDate + 1;
                    }
                }
                else if(sdayMonth == 4 || sdayMonth == 6 || sdayMonth == 9 || sdayMonth == 11) {
                    if(tempDate == 30) {
                        tempDate = 1;
                        sdayMonth = sdayMonth + 1;
                    } else {
                        tempDate = tempDate + 1;
                    }
                } else {
                    if(tempDate == 28) {
                        tempDate = 1;
                        sdayMonth = sdayMonth + 1;
                    } else {
                        tempDate = tempDate + 1;
                    }
                }
            } 
            else {
                tempDate = tempDate + 1;
            }
            
            
            setCardList(dayList.push(newDay));
        } while(endDate.getDate() + 1 != tempDate);

        /* 자꾸 렌더링부분에서 dayList보면 
        push의 return 값인 length만 나와서 Set 한 번 더 해줌 */
        setCardList(dayList);
        lenOfDayList = dayList.length;

    }

    return (
        <>
        <div>
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
                                InputProps={{ style: { height: 40 } }}
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
                                InputProps={{ style: { height: 40 } }}
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

            <div>
            
                <div className='grid grid-cols-1 mb-1'>
                <button className='bg-blue-300 hover:bg-blue-400 hover:text-white' onClick={() => calTheDay()}>
                    만들기
                </button>
                    {
                        
                        dayList.map((day, index) => {
                            return (
                                <div id={index} key={index} className="text-lg align-text-bottom text-stone-700  mt-6">
                                    <p className=" ml-6"> Day {day.day_id} - {day.day_month}.{day.day_date}</p>
                                    <PlanList day_id={day.day_id} passData={passData}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

        
            <CardModal
                title={"일정을 저장하시겠습니까?"}
                content={"현재까지 작성한 일정을 저장합니다."}
                onConfirm={() => HandleChange()}
                onCancel={() => console.log('Plan Saving')}
                buttons={[
                    { role: "cancel", toClose: true, classes: "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200", label: "취소" },
                    { role: "confirm", toClose: true, classes: "bg-blue-200 px-4 py-2 rounded-lg hover:bg-blue-400 transition-all duration-200", label: "저장" }
                ]}
            >
                 <button
                    onClick={HandleChange}
                    className="fixed z-50 bottom-10 right-8 items-center px-6 py-2 bg-blue-400 hover:bg-blue-700 text-white font-xl rounded-md mx-2 hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
                >플랜 저장
                </button>
            </CardModal>

        </>
    );
}
