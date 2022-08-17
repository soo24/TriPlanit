import React, { useState } from 'react'
import Head from 'next/head'
import Plan_sidebar from '../components/plan_sidebar'
import Modal from '../components/modal';

export default function TravelRegister() {

    const [modal, setModal] = useState(false);

    return (
        <>
            <div>
                <Head>
                    <title>여행 등록</title>
                </Head>
            </div>

            <div className='fixed'>
                {/* <Mapscreen /> */}
            </div>
 
            <div> <Plan_sidebar/> </div>



        </>
    );

}