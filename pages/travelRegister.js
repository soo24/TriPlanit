import SetPlan from '../components/setPlan'
import Head from 'next/head'
import Mapscreen from '../components/Mapscreen';
import PlanDay from '../components/plan_day'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function travelRegister() {
    const [toggleBtn, setToggle] = useState(false);

    const toggleToParent = (x) => {
        setToggle(!x);
    }
    const toggleSidebar = () => {
        setToggle(toggleBtn => !toggleBtn);
    }

    return (
        <>
            <div>
                <Head>
                    <title>여행 등록</title>
                </Head>
            </div>

            <div>
                {toggleBtn ?
                    <button onClick={() => toggleSidebar()}>
                        <FontAwesomeIcon icon={faCircleRight} size='xl' className='m-3' />
                    </button> :
                    <div>
                        {toggleBtn ? "" : <SetPlan toggleToParent={toggleToParent} />}
                        <div className='container w-[400px] bg-slate-50'>
                            {toggleBtn ? "" : <PlanDay />}
                        </div>
                    </div>}
            </div>
        </>
    );

}