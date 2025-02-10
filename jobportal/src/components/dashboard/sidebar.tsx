import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Sidebar = () => {
    const menu = ["Dashboard","job","skills","applied job","Resume builder","Profile"]
  return (
    <aside>
        <div className="p-4 bg-[#5B3E81] min-h-screen py-10 w-[250px] sticky top-10 left-0">
            {menu.map((m)=>{

          return  <Link href="/dashboard" className='block' key={m}>
            <Button variant="secondary" className='bg-[#ff0b7d61] hover:bg-[#FF0B7E] w-[200px] p-6 my-2 text-white text-xl' >
                {m}</Button>
            </Link>
            })}
        
          
             
        </div>
    </aside>
  )
}

export default Sidebar