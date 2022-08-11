import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

export default function mytrip() {
    return (
        <div>
            <div className='grid grid-cols-2 gap-8 m-10'>
                <Image
                    src="/myTripImage.jpeg"
                    alt="mainImage"
                    width={750}
                    height={500}
                />
                <div className='bg-blue-50 rounded-xl text-center h-full'>
                    <p className='text-2xl my-12 h-1/3'><FontAwesomeIcon icon={faPlane} color='rgb(37 99 235)' /> 나만의 여행을 만들어보세요</p>
                    <button className="px-4 py-1 text-sm my-12 w-2/3 text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent">
                        일정 만들기</button>
                </div>
            </div>
        </div>



    );
}