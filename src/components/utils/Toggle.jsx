'use client'

import { useEffect, useRef, useState } from 'react'

export default function Toggle(){
  const [ dark , setDark ] = useState(false)
  const btn1 = useRef();
  const btn2 = useRef();
  useEffect(()=>{
    if(dark){
    btn1.current.classList.add('text-[#93a2b8]')
    btn1.current.classList.remove('text-[#06b5d4]')
    btn2.current.classList.add('text-[#324154]')
    btn2.current.classList.remove('text-[#a4f4fc]')
    }
    else{
    btn1.current.classList.add('text-[#06b5d4]')
    btn1.current.classList.remove('text-[#93a2b8]')
    btn2.current.classList.add('text-[#a4f4fc]')
    btn2.current.classList.remove('text-[#324154]')
    }
  },[dark])
    return(
        <>

<label for="toggleSix" className="text-dark flex cursor-pointer select-none items-center m-[0px] sm:mr-[20px]">
  <div className="relative rounded-full bg-slate-500">
    <input onClick={()=>{setDark(!dark)}} type="checkbox" id="toggleSix" className="peer sr-only toggle" />
    <div className="box bg-[#06b5d4] peer-checked:bg-[#324154] block h-[30px] w-[65px] rounded-full"></div>

    
    <div className="dot absolute left-[4.5px] top-[2px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-white transition peer-checked:-translate-x-[-2.1rem] duration-500
    peer-checked:bg-white">
    </div>

  </div>
<div className="absolute flex items-center justify-center w-[65px] px-[5px]">

<svg ref={btn1} className="text-[#06b5d4] absolute left-[5px]" width="24" height="24" fill="none" aria-hidden="true"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" 
  stroke-linecap="round" stroke-linejoin="round"></path></svg>

<svg ref={btn2} width="24" height="24" fill="none" aria-hidden="true" className="mr-[-60px]"></svg><svg ref={btn2} width="24" height="24" fill="none" aria-hidden="true" className="flex-none text-[#a4f4fc]"><path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</div>
</label>

        </>
    )
}