import Head from 'next/head'
import Image from 'next/image'
import Recommendation_menu from '../components/Recommendation_menu'
import NavBar from '../components/topbar'
export default function Recommendation() {
  return (
    <>
      <div><NavBar /></div>
      <main>
        <div className="flex flex-row p-16 items-center" id='country'>
          <Image src="/korea.png" alt="temporary" width={100} height={100}></Image>
          <h3 className='p-4 font-extrabold text-4xl'>대한민국</h3>
        </div>
        <div id="region" className="p-16 pt-0 ">
          <div id="famous" className="grid grid-cols-4 gap-4 p-6 ">
            <h1 className='col-start-1 bg-blue-300 text-center text-2xl font-bold p-4'>인기 도시</h1>
            <div className='col-start-1 col-span-4 text-center'>
              <Recommendation_menu/>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 p-6">
            <h1 className="col-start-1 bg-blue-300 text-center text-2xl font-bold p-4">전라도</h1>
            <div className='col-start-1 col-span-4 text-center'>
              <Recommendation_menu/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}