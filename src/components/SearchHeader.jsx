import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

export default function SearchHeader() {
  return (
    <div className='flex top-[10%] py-2 px-4 justify-between item-center'>
   
   <ul className='flex'>
    <li className='flex items-center p-4 hover:underline cursor-pointer'> <AiOutlineSearch /> <span > All</span> </li>
    <li className='flex items-center p-4 hover:underline cursor-pointer'> <AiOutlineSearch /> <span>Video</span> </li>
    <li className='flex items-center p-4 hover:underline cursor-pointer'> <AiOutlineSearch /> <span > Image</span> </li>
    <li className='flex items-center p-4 hover:underline cursor-pointer'> <AiOutlineSearch /> <span> New</span> </li>
    <li className='flex items-center p-4 hover:underline cursor-pointer'> <AiOutlineSearch /> <span > More</span> </li>
   </ul>
     
 
    <div>
      <div className='p-4 hover:underline cursor-pointer'><span>Tool</span></div>
    </div>
 </div>
  )
}
