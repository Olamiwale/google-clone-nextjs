
import './../globals.css'

import SearchBox from '@/components/SearchBox'



export default function SearchLayout({ children }) {
  return (
    <div>
    
      <SearchBox />   
       {children}
    </div>
  )
}
