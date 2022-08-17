import React, { useState,Fragment, useEffect } from 'react';
const { Transition } = require("@headlessui/react");

export default function AddModal({
    buttons = [],
    onCancel = "",
    onAdd = "",
    children
}) {
    let [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(isOpen);
        console.log(isOpen);
        if (!isOpen) {
            document.documentElement.style.overflow = "auto";
        } else {
            document.documentElement.style.overflow = "hidden";
        }
    }, [isOpen]);

    const HandleChange = () => {
        setIsOpen(!isOpen);

    }

    return <>
        <div onClick={() => HandleChange()}>
            {children}
        </div>

        <Transition show={isOpen}>
            <Transition.Child
                as={Fragment}
                enter="transition-all duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-all duration-200"
                leaveTo="opacity-0"
                leaveFrom="opacity-100"
            >
                <div onClick={() => HandleChange()} className="z-50 w-full h-full left-0 top-0 bg-black/50 fixed" />
            </Transition.Child>
            
            <div className="z-50 absolute w-full top-1/3 left-[140%]">
                <div className='max-w-[28rem] w-full p-4 bg-white rounded-lg'>
                    
                    <div className="flex justify-between items-center mb-6">

                        <div className='p-[20px] bg-blue-100 text-start w-full'>
                            <form>장소
                                <input type="text" id="search" name="search" required minLength="1"
                                    placeholder=" 장소를 선택해주세요 " className="w-[80%] h-[30px] m-[10px]" />
                            </form>
                            <p>시간</p>
                        </div>
                    </div>


                    <div className="mt-3 flex justify-end items-center gap-2">
                        {buttons.map((button, index) => (
                            <button 
                                onClick={() => {
                                    if (button.role === "add") {
                                        onAdd();
                                    }
                                    if (button.role === "cancel") {
                                        onCancel();
                                    }

                                    if (button.toClose) {
                                        setIsOpen(false);
                                    }
                                }}
                                key={index}
                                className={button.classes}
                            >
                                {button.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

        </Transition>
    </>
}