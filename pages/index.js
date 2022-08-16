import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link';
import TopBar from '../components/topbar';
import MyTrip from '../components/mytrip';
import Others from '../components/Others';
import Mapscreen from '../components/Mapscreen';
import styled from "@emotion/styled"

const MyDiv = styled.div`
  background: gold;
  font-size: 5rem;
  margin-top: 10px;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>
    
    <TopBar/>
    <MyTrip />
    <Others />
    {/* <Mapscreen /> */}
    
    <MyDiv>이모션 테스트</MyDiv>
    </div>


  )
}
