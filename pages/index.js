import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link';
import TopBar from '../components/topbar';
import MyTrip from '../components/mytrip';
import Others from '../components/Others';
import Mapscreen from '../components/Mapscreen';

export default function Home() {
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>
    
    <TopBar/>
    <MyTrip />
    <Others />
    <Mapscreen />
    
    
    </div>


  )
}
