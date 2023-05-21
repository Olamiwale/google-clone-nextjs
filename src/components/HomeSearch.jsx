'use client';

import React, {useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";


export default function HomeSearch() {
    const router = useRouter()

    const [input, setInput] = useState('')
    const [ranSearchLoading, setRanSearchLoading] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault()
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`)
    }

   {
    /* Working Copy....... 

    async function randomSearch (){
        const response = await fetch ('https://random-word-api.herokuapp.com/word')
        .then((res)=> res.json())
        .then((data) => data[0])
        router.push(`/search/web?search=${response}`)
    }*/
  }

    const ranSearch = async () => {
      const response = await axios.get('https://random-word-api.herokuapp.com/word')
      const data = response.data[0]
      console.log(data)
    
      router.push(`/search/web?searchTerm=${data}`)
      setRanSearchLoading(prev => !prev)
    }
  return (
    

    <form onSubmit={handleSubmit} className="mt-8">
      <div className="flex m-auto rounded-full p-4 justify-center border border-gray-400 w-[500px]">
        <AiOutlineSearch size={20} />

     
        <input 
        value={input}
        className="w-full focus:outline-none" 
        type="text"
        onChange={(e) => setInput(e.target.value)} />
      

      <BsFillMicFill size={20} />
      </div>
      
      
       <div className="flex justify-center space-x-6 m-5">
         <button onClick={handleSubmit} className ='border p-4 w-[140px]'>Google Search</button>
    <button 
    disabled={ranSearchLoading}
    onClick={ranSearch} 
    className ='border p-4 w-[140px] justify-center flex'>
      {ranSearchLoading ? 
     
     ( <img src="Spinner.gif" alt='loading ' className="h-8"/>)
      : ('Im Feeling Lucky')}
      
      </button>

     
    
    </div>
    <div className="flex justify-center m-auto">
      <p className="text-[10px]">Google offered in: 
      <span className="text-blue-500 hover:underline cursor-pointer px-1">Hausa</span>
      <span className="text-blue-500 hover:underline cursor-pointer px-1">Igbo</span>
      <span className="text-blue-500 hover:underline cursor-pointer px-1">Ede-Yoruba</span>
      <span className="text-blue-500 hover:underline cursor-pointer px-1">Nigeria Pidgin</span></p>
    </div> 

    
    
    </form>
   
  );
}
