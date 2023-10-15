import React from 'react';

interface INavProps{
  isShowOptions?:boolean,
  isLoggedin?:boolean
}

export default function NavBar({isShowOptions,isLoggedin}:INavProps) {
  return (
    <nav className='bg-[#EEEEEE] p-2 flex justify-between'>
        <div className='w-16 h-16 flex'>
            <img src='/assets/img/clock.png' alt='logo'/>
            <h1 className='font-bold text-2xl mt-4'>Time&nbsp;-&nbsp;Slate</h1>
        </div>
        {isShowOptions?
        <div className='mt-4'>
            <a href='#' className='font-medium text-xl text-blue-500 hover:text-blue-400 hover:underline p-4' >Signup</a>
            
            <a href='/login' className='font-medium text-xl text-blue-500 hover:text-blue-400 hover:underline p-4'  >Login</a>

        </div>
        :null
        }
    </nav>
  )
}
