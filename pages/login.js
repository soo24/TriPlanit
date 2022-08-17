
import Head from 'next/head'
import TopBar from '../components/topbar';
<<<<<<< HEAD
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { Router, useRouter } from 'next/router';
=======
import MyTrip from '../components/mytrip';
import Others from '../components/Others';

export default function Login() {
        return (
                <>
                        <div>
                                <Head>
                                        <title>Login</title>
                                </Head>
                                <TopBar/>
                        </div>
                        <div className="container mx-auto px-72 pt-32">
                                <div id="section" className="mx-auto align-center">
                                        <h2 className="text-2xl">로그인</h2>
                                </div>
                                <div className="my-10 text-gray-700 p-4">
                                        <div className='p-4'>
                                                <form action="" method="post" className='border-2 border-slate-300 p-4'>
                                                        <div id="email-column" className="p-4">
                                                                <label className="block mb-1" htmlFor="username">Email</label><br/>
                                                                <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" required type="text" id="email" name="email"></input><br />
                                                        </div>
                                                        <div id="password-column" className='p-4'>
                                                                <label className="block mb-1" htmlFor="password">password</label><br />
                                                                <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" required type="text" id="password" name="password"></input><br />
                                                        </div>
                                                        <div className="p-4">
                                                                <button className="w-full h-12 px-6 text-black-700 transition-colors duration-150 bg-blue-200 rounded-lg focus:shadow-outline hover:bg-indigo-800 hover:text-slate-300" type='submit'>로그인</button><br/>
                                                        </div>
                                                </form>
                                                <div id='other' className='p-4'>
                                                        <div className='p-4'>
                                                                <button className="w-full h-12 px-6 text-black-700 transition-colors duration-150 bg-blue-200 rounded-lg focus:shadow-outline hover:bg-indigo-800 hover:text-slate-300" type='submit'>Google ID로 로그인</button>
>>>>>>> feature/cal

export default function Login({ provider,req }) {
	const router = useRouter();
	return (
		<>
			<div>
				<Head>
					<title>Login</title>
				</Head>
				<TopBar />
			</div>
			<div className="container mx-auto px-72 pt-32">
				<div id="section" className="mx-auto align-center">
					<h2 className="text-2xl">로그인</h2>
				</div>
				<div className="my-10 text-gray-700 p-4">
					<div className='p-4'>
						<form action="" method="post" className='border-2 border-slate-300 p-4'>
							<div id="email-column" className="p-4">
								<label className="block mb-1" htmlFor="username">Email</label><br />
								<input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" required type="text" id="email" name="email"></input><br />
							</div>
							<div id="password-column" className='p-4'>
								<label className="block mb-1" htmlFor="password">password</label><br />
								<input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" required type="text" id="password" name="password"></input><br />
							</div>
							<div className="p-4">
								<button className="w-full h-12 px-6 text-black-700 transition-colors duration-150 bg-blue-200 rounded-lg focus:shadow-outline hover:bg-indigo-800 hover:text-slate-300" type='submit'>로그인</button><br />
							</div>
						</form>
						<div id='other' className='p-4'>
							<div className='p-4'>
								<button className="w-full h-12 px-6 text-black-700 transition-colors duration-150 bg-blue-200 rounded-lg focus:shadow-outline hover:bg-indigo-800 hover:text-slate-300" type='submit' onClick={() => signIn("google", {callbackUrl: "/"})}>Google ID로 로그인</button>
							</div>
							<div className='p-4'>
								<button className="w-full h-12 px-6 text-black-700 transition-colors duration-150 bg-blue-200 rounded-lg focus:shadow-outline hover:bg-indigo-800 hover:text-slate-300" type='submit'>회원가입</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
