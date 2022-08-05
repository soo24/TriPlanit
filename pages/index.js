import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import TopBar from '../components/topbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>
    
    <TopBar/>
    
    </div>
  )
}
