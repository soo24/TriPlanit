import Link from 'next/link';
import Image from 'next/image'
import Logo from '../public/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';

export default function TopBar() {
  const router = useRouter();

  return (
    <div className='bg-blue-200 pt-6 pl-6w-full'>
      <div className="grid grid-cols-12  grid-rows-2 ml-5 zf:grid-cols-4 ">

        <div className='col-start-1 col-span-2 ml-3'>
          <Link href='/'>
            <Image src={Logo} alt="logo" height={30} width={150} />
          </Link>
        </div>


        <div className='col-start-3 col-span-3'>
          <form>
            <input type="text" id="search" name="search" required minlength="1"
              placeholder=" 🔎 검색" style={{ width: 350, height: 30 }} />

          </form>
        </div>


          <div className="col-start-11 zf:col-start-3 text-center"> 
            <button type='button' onClick={() => router.push('/login')}> 
              로그인
            </button>
          </div>

          <div className="col-start-12 rounded-[5px] bg-white text-center w-9/12 mb-5 zf:hidden"> 
            <button > 
              회원가입
            </button>
          </div>

        <div className='col-start-1 ml-3 hover:cursor-pointer' >
          <Link href='/travelRegister'>
            <div>
              <FontAwesomeIcon icon={faCalendarDays} size='lg' className='mr-2' />
              여행 등록
            </div>
          </Link>
        </div>

        <div className='col-start-2 ml-3 hover:cursor-pointer'>
          <Link href='/recommendation'>
            <div>
              <FontAwesomeIcon icon={faLocationDot} size='lg' className='mr-2' />
              여행지 추천
            </div>
          </Link>
        </div>
        <div className='col-start-3 ml-5 hover:cursor-pointer'>
          <Link href="">
            <div>
              <FontAwesomeIcon icon={faUsersLine} size='lg' className='mr-2' />
              커뮤니티
            </div>
          </Link>
        </div>

      </div>
    </div>

  );
}
