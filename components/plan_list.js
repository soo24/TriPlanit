import React, { useState } from 'react'
import Image from "next/image";
import noodlePic from '../public/noodle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Modal from '../components/modal';
import CardModal from '../components/modal/CardModal'


export default function Plan_list() {

    const [cardList, setCardList] = useState([{
        id:0,
        city: '전주',
        food_title: '베테랑 칼국수',
        time : '11:30 AM',
        food_pic: noodlePic
    },
    ])
    
    const [modal, setModal] = useState(false);


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

        //test
        //setCardList(cardList.filter((card) => card.id !== 0));
        // setCardList(cardList.filter((card) => card.index !== 0));

        setCardList(cardList.filter((card) => card.id !== 0));
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
                                <div className='grid place-items-center'><button> 
                                    <CardModal
                                        title={"정말로 삭제하시겠습니까?"}
                                        content={"일정을 삭제하면 다시 복구할 수 없습니다."}
                                        onConfirm={() => console.log('Delete Confirmed')}
                                        onCancel={() => console.log('Delete Canceled')}
                                        buttons={[
                                            { role: "cancel", onClick: () => console.log("custom test"), toClose: true, classes: "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200", label: "취소" },
                                            { role: "confirm", toClose: false, classes: "bg-blue-200 px-4 py-2 rounded-lg hover:bg-blue-400 transition-all duration-200", label: "삭제" }
                                        ]}
                                        >
                                        <FontAwesomeIcon icon={faTrashAlt} size="xs" onClick={handleRemove} /> 
                                        </CardModal> </button></div>
                            </div>

                        </div>

                    )
                })
            }


            <div className='bg-blue-100 mt-1.5 mb-1.5 ml-6 mr-6 border-white p-3'>

                    
                       
                        <button onClick={() => { setModal(true) }} > 
                            <div className='bg-white w-[100px] h-[80px] border-white p-6 rounded-md'>
                            <FontAwesomeIcon icon={faPlus} size='2xl' />
                            </div>
                
                        </button>
                        {modal ? <Modal /> : null}

                        <button className='hidden' onClick={() => { setModal(false) }} > 모달창 닫기</button>

                        
                  
            </div>

            

        </div>
    )
}
