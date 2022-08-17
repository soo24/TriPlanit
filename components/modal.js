import React, { useState } from 'react'

export default function Modal({ }) {
    const [modal, setModal] = useState(false);
	return (
		<div className='p-[20px] bg-slate-200 z-20'>
            <form>장소
                <input type="text" id="search" name="search" required minLength="1"
                placeholder=" 🔎 검색 " style={{ width: 100, height: 30, margin:5}} />
            </form>
            <p>시간</p>

            {/* <button onClick={() => { setModal(false) }} > 모달창 닫기</button> */}
        </div>

    )
    }
