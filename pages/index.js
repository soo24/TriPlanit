import Head from 'next/head'
import Image from 'next/image'

// components
import TopBar from '../components/topbar';
import MyTrip from '../components/mytrip';
import Others from '../components/Others';

// auth
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home()   {
  const { data: session } = useSession();
  if (session) {
    
  }
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>
    
    <TopBar/>
    <MyTrip />
    <Others />
    
    
    </div>


  )
}
