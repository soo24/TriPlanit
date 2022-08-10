import React, { useState } from 'react'
import Image from "next/image";
import noodlePic from '../public/noodle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function plan_list() {

    const [cardList, setCardList] = useState([{
        id: 0,
        title: 'test0'
    },{
        id: 1,
        title: 'test1'
    },{
        id: 2,
        title: 'test2'
    }])

    const handleAddCard = () => {
        console.log('click!')
        setCardList([
            ...cardList,
            {
                // 몰달 modal 띄우는거 여기에 작성
            },
        ])
    }
    return (
        <div className='grid grid-cols-1 gap-2'>
            {
                cardList.map((card) => {
                    return (
                        <div id={card.id} className='bg-blue-200 mt-1.5 mb-1.5 ml-3 mr-3 border-white p-3'>
                            {/* shadow-xl border-solid rounded-[10px] border-[1px] border-gray-200 shadow-md'> */}
                            <Image className="" src={noodlePic} alt="" width={100} height={80}/>
                            <form>
                                <p>{card.title}</p>
                            </form>
                        </div>
                    )
                })
            }

        <div  className='bg-blue-200 mt-1.5 mb-1.5 ml-3 mr-3 border-white p-3'>
            {/* shadow-xl border-solid rounded-[10px] border-[1px] border-gray-200 shadow-md'> */}
            <button onClick={handleAddCard} className='w-full'>
                <p className='text-2xl'><FontAwesomeIcon icon={faPlus} /> 추가</p>
            </button>
            

            <form>
                <p></p>
            </form>
        </div>

    </div>
    )
  }