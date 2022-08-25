import React, { useState } from 'react'
import Head from 'next/head'
import Plan_sidebar from '../components/plan_sidebar'
import Mapscreen from '../components/MapScreen';

export default function TravelRegister() {

    return (
        <>
            <div>
                <Head>
                    <title>여행 등록</title>
                </Head>
            </div>
            <div className='fixed z-50'> 
                <Plan_sidebar /> 

            </div>

            <div className='z-10'>
                <Mapscreen />
            </div>


        </>
    );

}