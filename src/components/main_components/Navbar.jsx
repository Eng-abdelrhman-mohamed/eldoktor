'use client'
// css
import '../../../css/progress_bar.css'
// component
import BtnSign from '../utils/BtnSign'
import BtnSignSmall from "../utils/BtnSignSmall";
// image
import user from '../../../public/images/user.png'

// library
import { useEffect ,useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Navbar() {
  const [ progress , setProgress ] = useState(false);
  const [ burgar , setBurgar ] = useState(false);
  const [ id , setId ] = useState('');

  const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });



  // check and data
(async function(){
  const token = Cookies.get('token')
  if(token){
      axios.get("https://academy-backend-mu.vercel.app/api/user/",{
        headers:{
            'Content-Type':'application/json',
            'token':Cookies.get('token')
        }
    })
    .then(async(res)=>{
        await setId(res.data.data._id)
    }).catch(()=>{setId('')})
  }
})()


// progress bar
useEffect(()=>{
  document.onscroll = (e)=>{
    if(window.scrollY >= 50){
      setProgress(true);
    }
    else{
      setProgress(false);
    }
  }
},[])
const variants = {
  open: { y:0, },
  closed: {y: 1000 },
}





return (
  <>
    <div dir='rtl' className={`w-[100%] h-[60px] duration-200 fixed z-[6] 'bg-[#F1F1F1]' ${progress ? 'bg-white' : 'bg-[#F1F1F1]'}`}>
      {/* after 600px screen*/}
      <div className="container w-[100%] h-[100%] hidden lg:flex md:flex sm:flex m-auto px-[20px] flex items-center justify-between">
        {/* part right and center */}
        <div className="flex">
        <Link href='/'>
        <Image src='' alt="logo" width={20} height={20} className='w-[30px]' />
        </Link>
        </div>  
        {/* part left */}
          {id ? 
          <> 
          <Link href={`/profile/${id}`}>
          <Image src={user} alt="logo" width={20} height={20} />
          </Link>
          </> :
          <><BtnSign/></>
          }
      </div>
        {/* before 600px screen*/}
      <div className="container w-[100%] h-[100%] flex lg:hidden md:hidden sm:hidden m-auto px-[20px] flex items-center justify-between">
      {/* part right $image */}
      <Link href='/'>
        <Image src='' alt="logo" width={20} height={20} />
        </Link>
        {/* part left login and register and profile */}
        <div>
        {id ? 
          <> 
          <Link href={`/profile/${id}`}>
          <Image src={user} alt="logo" width={20} height={20} />
          </Link>
          </> :
          <>
          {/* icon svg */}
          <svg className={`w-[30px] cursor-pointer duration-300 transition ease-linear delay-100 ${burgar ? "hidden" : "flex"} 'flex'`} onClick={()=>{setBurgar(!burgar)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="rgb(79,129,189)" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          <svg className={`w-[30px] cursor-pointer duration-300 transition ease-linear delay-100 ${burgar ? "flex" : 'hidden'} 'hidden'`} onClick={()=>{setBurgar(!burgar)}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="rgb(79,129,189)" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>  
          <motion.ul
          initial={{x:'-50%',y:1000}}
          animate={burgar ? "open" : "closed"}
          variants={variants}
          transition={{ type: "spring", stiffness: 150 , duration:0.3}}
          className="absolute top-[78px] bg-white w-[95%] flex flex-col items-center justify-center gap-3 p-[15px] rounded-[5px] left-[50%] translate-x-[-50%]">
           <BtnSignSmall/>
          </motion.ul>
          </>
          }
        
        </div>
      </div>
      {/* progress */}
          <div className={`progress-bar-content duration-300 delay-100 transition 'hidden' ${progress ? 'flex' :'hidden'}`}>
          <motion.div className="progress-bar" style={{ scaleX }} /></div>
    </div>
  </>
  )
}
