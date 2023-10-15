import React,{useState} from 'react';
import NavBar from '../../components/Navbar';
import Calender from '../../components/Calender';
import SheduleCom from '../../components/SheduleTime';
import { IUser } from '../service-providers/servicers';

export default function Home() {

  const [clickedDate,setClickedDate]=useState<string|undefined>();

  return (
    <>
    <div className='flex'>
      <Calender setDate={setClickedDate}/>
      <div className='w-1/2 p-2 text-center flex flex-col'>
        <div className='w-full text-white font-bold text-xl p-2 bg-blue-500'>Hours</div>
        <div className='font-semibold underline'>Shedule For Date: {clickedDate}</div>
        <SheduleCom/>
      </div>

    </div>
    </>
  )
}
