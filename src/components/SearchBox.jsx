'use client'

import React, {useState} from 'react'
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation'
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import SearchHeader from './SearchHeader';

export default function SearchBox() {

    const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  function handleSubmit(e) {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  }

  return (
    <div className='border-b-2'> 
    <div className='flex items-center mt-10'>
      <div className='px-4'>
        <Link href='/'> 
        <img width='90px' height='50px' src='https://www.freepnglogos.com/uploads/google-logo-png-hd-11.png'/>
        </Link>
        
       
      </div> 
    <form
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-8 mr-5 flex-grow max-w-3xl items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full focus:outline-none"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setTerm("")}
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
      
      <div>
         <AiOutlineSearch className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer" onClick={handleSubmit} />
         
          <p className='bg-black text-white font-semibold p-2 absolute right-5 top-[80px] group hidden'>Search</p>
         </div>
         
     
    </form>

   
    </div>

 <SearchHeader />
  </div>
  )
}
