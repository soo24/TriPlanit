import Link from 'next/link';
import Image from 'next/image'
import Logo from '../public/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faUsersLine } from "@fortawesome/free-solid-svg-icons";

export default function TopBar() {
  return (
    <div className='bg-blue-200 pt-6 pl-6w-full'>
        <div className="grid grid-cols-12  grid-rows-2 ml-5 zf:grid-cols-4 ">

          <div className='col-start-1 col-span-2'>
            <Image src={Logo} alt="logo" height={30} width={150}/>
          </div>

          <form className="col-start-3 col-span-3 w-fit justify-items-center "> 
            <input type="text" id="search" name="search" required minLength="1"
            placeholder=" 🔎 검색"/>
          </form>

          <div className="col-start-11 zf:col-start-3 text-center"> 
            <button> 
              로그인
            </button>
          </div>

          <div className="col-start-12 rounded-[5px] bg-white text-center w-9/12 mb-5 zf:hidden"> 
            <button  > 
              회원가입
            </button>
          </div>

          <div className='col-start-1 col-span-2 text-center hover:cursor-pointer'>
            <Link href="">
              <div>
                <FontAwesomeIcon icon={faCalendarDays} size='lg' className='mr-2'/>
              여행 등록
              </div>
            </Link>
          </div>

          <div className='col-start-3 col-span-2 gap-4 text-center hover:cursor-pointer'>
            <Link href="">
            <div>
                <FontAwesomeIcon icon={faLocationDot} size='lg' className='mr-2' />
                여행지 추천
              </div>
            </Link>
          </div>
          <div className='col-start-5 gap-4 col-span-2 text-center hover:cursor-pointer'>
            <Link href="">
              <div>
                <FontAwesomeIcon icon={faUsersLine} size='lg'className='mr-2' />
               커뮤니티
              </div>
            </Link>
          </div>

        </div>
    </div>
   
  );
}
