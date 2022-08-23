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
        <MyTrip />
        <Others />
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

/** used for getting session for google authentication - current: not used */
// export const getServerSideProps = async (context) => {
//   const session = await getSession(context);
//   const req = context.req;
//   const secret = process.env.JWT_SECRET;
//   req.cookies = cookies(context);
//   const token = await getToken({ req, secret });
//   console.log(token);

//   return {
//     props: { session, token },
//   }
// }

/** will be used for requesting the daat of the user - not yet implemented */
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://127.0.0.1:8000/triplanit/`, {
//     method='POST',
//     headers = {
//       'Content-Type' : 'application/json',
//     },
//   })
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }