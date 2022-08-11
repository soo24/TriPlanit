import Head from 'next/head'

// auth
import { useSession, signIn, signOut } from 'next-auth/react';

const google_login_test = () => {
        const { data: session } = useSession();
        <Head>
                <title>Google Login</title>
        </Head>
        if (session) {
                return (
                        <div>
                                Welcome, {session.user.email}
                                <button onClick={() => signOut()}>Sign out</button>
                        </div>
                );
        } else {
                return (
                        <div>
                                <p>not signed in</p>
                                <button onClick={() => signIn()}>Sign in</button>
                        </div>
                );
        }
}

export default google_login_test;