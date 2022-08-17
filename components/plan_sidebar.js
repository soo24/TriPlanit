import Head from 'next/head'
import PlanDay from '../components/plan_day'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Plan_sidebar() {
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
                        {toggleBtn ? "" : <PlanDay toggleToParent={toggleToParent} />}
                    </div>}
            </div>
        </>
    );

}