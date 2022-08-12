import React, { useState } from 'react'
import Image from "next/image";
import noodlePic from '../public/noodle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


export default function Plan_list() {

    const [cardList, setCardList] = useState([{
        city: '전주',
        food_title: '베테랑 칼국수',
        time : '11:30 AM',
        food_pic: noodlePic
    },
    ])

    const handleAddCard = () => {
        console.log('click!')
        setCardList([
            ...cardList,
            {
                // 몰달 modal 띄우는거 여기에 작성
            },
        ])
    }

    const handleRemove = (cardId) => {
        console.log('delete_click!')
    };
    
    return (
        <div className='grid grid-cols-1 text-stone-900'>
            {
                cardList.map((card, index) => {
                    return (
                        <div key={index} className='flex flex-row bg-blue-200 mt-1.5 mb-1.5 ml-6 mr-6 border-white pl-3 pt-3 pb-3 shadow-lg'>
                            <Image className="rounded-md" src={card.food_pic} alt="" width={100} height={80}/>
                            <div className='grid grid-cols-5 w-4/5'>
                                <form className='col-start-1 col-span-4 flex flex-col ml-6'>
                                    <p>{card.city}</p>
                                    <p>{card.food_title}</p>
                                    <br></br>
                                    <p>{card.time}</p>
                                </form>
                                <button className='col-start-5 col-span-1 justify-items-center' onClick={handleRemove}> <FontAwesomeIcon icon={faTrashAlt} size="xs" onClick={handleRemove} /></button>
                            </div>

                        </div>

                    )
                })
            }


            <div className='bg-blue-100 mt-1.5 mb-1.5 ml-6 mr-6 border-white p-3'>
                <button onClick={handleAddCard} className='w-full'>
                    <div className='bg-white w-[100px] h-[80px] border-white p-6 rounded-md'>
                        <FontAwesomeIcon icon={faPlus} size='2xl' />
                    </div>
                </button>
            </div>

        </div>
    )
}
