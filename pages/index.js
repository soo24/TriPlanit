import Head from 'next/head'

// components
import TopBar from '../components/topbar';
import MyTrip from '../components/mytrip';
import Others from '../components/Others';

// auth
import { useSession, signIn, signOut, getSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  <Head>
    <title>HomePage</title>
  </Head>
  if (session) {
    return (
      <div>


        <TopBar />
        <div>
          <p className="text-right pr-5">안녕하세요, {session.user.name}님</p>
          <div className='p-4'>
            <button className="float-right h-12 px-6 text-black-700 transition-colors duration-150 bg-blue-200 rounded-lg focus:shadow-outline hover:bg-indigo-800 hover:text-slate-300" type='submit' onClick={() => signOut("google", { callbackUrl: "/" })}>로그아웃</button>
          </div>
        </div>
        <MyTrip/>
        <Others/>
        {/* <Mapscreen /> */}


      </div>
    );
  } else {
    return (
      <div>
  
  
        <TopBar />
        <MyTrip />
        <Others />
        {/* <Mapscreen /> */}
      </div>
    );
  }
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  return {
    props: {session},
  }
}