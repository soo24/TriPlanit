import Head from 'next/head'
import Plan_sidebar from '../components/plan_sidebar'

export default function TravelRegister() {

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