import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function CardForm ({ place, time, description }) {
    const router = useRouter();
    const {handleSubmit} = useForm();

    const onEdit = (data) => {
        console.log(data);
        // id: 0,
        // city: '전주',
        // food_title: '베테랑 칼국수',
        // time: '11:30 AM',
      };

    return (
      <>
        <div className='p-[20px] text-start w-full'>
                            <form onSubmit={handleSubmit(onEdit)}>
                                <div className='mb-[10px]'>
                                    장소
                                    <FormControl className="ml-[10px]" sx={{ width: '25ch' }}>
                                        <OutlinedInput placeholder="방문할 장소" />
                                    </FormControl>
                                </div>
                                <div className='mb-[10px]'>
                                    시간
                                    <TextField
                                        className="ml-[10px]"
                                        id="time"
                                        label=""
                                        type="time"
                                        defaultValue="07:00"
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                        inputProps={{
                                        step: 300, // 5 min
                                        }}
                                        sx={{ width: 150 }}
                                    />
                                </div>
                                <div className='mb-[10px]'>
                                    설명
                                    <FormControl className="ml-[10px]" sx={{ width: '25ch', height:'5ch'}}>
                                        <OutlinedInput placeholder="메모" />
                                    </FormControl>
                                </div>
                            </form>
                        </div>
      </>
    )
}