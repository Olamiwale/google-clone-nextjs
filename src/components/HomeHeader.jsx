import Link from 'next/link'
import React from 'react'
import {TbGridDots} from 'react-icons/tb'

export default function HomeHeader() {
  return (
    <header className='p-4'>
        <div className='flex justify-end space-x-4 items-center'>
            <Link href='https://mail.google.com'>Gmail</Link>
            <Link href='https://image.google.com'>
            Images
            </Link>
            <TbGridDots size={20} />
            <button className='bg-blue-400 rounded-md p-2'>Sign in</button>
            
        </div>


    </header>
  )
}
