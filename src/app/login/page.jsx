'use client'

import '../../../css/login.css'

import user from '../../../public/images/user.png'
import password_icon from '../../../public/images/lock.png'
import show_password_icon from '../../../public/images/eye.png'
import hidden_password_icon from '../../../public/images/hidden.png'

import { useState } from 'react'
import swal from 'sweetalert';
import axios from 'axios'

import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie'


import { useRouter } from 'next/navigation'


export default function login() {
const router = useRouter()
const [number , setNumber ] = useState('');
const [password , setPassword ] = useState('');
const [showPassword , setShowPassword] = useState(false);


(async function(){
  const token = await Cookies.get('token')
  if(token){
      await router.push('/')
  }
})()


const validator_password = (e)=>{
setPassword(e.target.value)
}
const validator_number = (e)=>{
    setNumber(e.target.value)
}
const sumbit_login = (e)=>{
e.preventDefault();
  if(number.length == 11 && (number.toString()).startsWith('01') && number.trim() != '' && Number.isInteger(+number) && number != '' && password.length > 8 && password.trim() != '' && password != ''){
    axios.post("https://academy-backend-mu.vercel.app/api/login",{
      number:number,
      password:password
    }).then((res)=>{
      const farFutureDate = new Date('2100-01-01');
      Cookies.set('token',res.data.data[0],{ expires: farFutureDate })
    swal({
      title: "جدع يا بطيخة",
      text: "سجلت الدخول",
      icon: "success",
      dangerMode: true,
      time:2000
  })
  router.push(`/profile/${res.data.data[1]}`)
    })
    .catch((err)=>{
        swal({
      title: "ركز يا بطيخة",
      text: "رقم التلفون او كلمة السر غلط أو الحساب موجود على اكتر من جهازين",
      icon: "error",
      dangerMode: true,
      time:2000
    })
    })
  }else{
      swal({
        title: "ركز يا بطيخة",
        text: "رقم التلفون او كلمة السر غلط أو الحساب موجود على اكتر من جهازين",
        icon: "error",
        dangerMode: true,
        time:2000
      })
  }
}




  return (
    <>
    <div dir='rtl' className="w-[100%]">
        <div className="mx-auto flex">
            <div className="w-[100%] sm:w-[50%] h-[100vh] justify-center font-extralight p-[20px] flex flex-col">
                <p className='font-home text-[20px] pt-[20px]'>تسجيل الدخول</p>
                <div className='w-[70px] mr-[36px] h-[3px] mt-[5px] bg-black'></div>
            <form action="" className='mt-[50px] flex flex-col gap-[10px]'>
                <div className='w-[100%] relative'>
                <Image src={user} className='w-[20px] h-[20px] absolute top-[50%] translate-y-[-50%] right-[10px]'/>
                <input type="text" placeholder='رقم التلفون' min={11} required onChange={(e)=>{validator_number(e)}} className='w-[100%] pr-[40px] pl-[20px] border-b-[2px] border-b-[#f2f2f2] focus:bg-[#f2f2f2] duration-300 py-[10px] outline-none' />
                </div>
                <div className='w-[100%] relative mt-[10px]'>
                <Image src={password_icon} className='w-[20px] h-[20px] absolute top-[50%] translate-y-[-50%] right-[10px]'/>
                <input type={showPassword ? 'text' : 'password'} placeholder='كلمة السر' min={8} required onChange={(e)=>{validator_password(e)}} className='w-[100%] pr-[40px] pl-[20px] border-b-[2px] border-b-[#f2f2f2] focus:bg-[#f2f2f2] duration-300 py-[10px] outline-none'/>
                {showPassword ? 
                <Image src={show_password_icon} onClick={()=>{setShowPassword(!showPassword)}} className='w-[20px] h-[20px] absolute top-[50%] translate-y-[-50%] left-[10px] cursor-pointer'/>
                :
                <Image src={hidden_password_icon} onClick={()=>{setShowPassword(!showPassword)}} className='w-[20px] h-[20px] absolute top-[50%] translate-y-[-50%] left-[10px] cursor-pointer'/>
                }
                </div>
                <button onClick={(e)=>{sumbit_login(e)}} className='mt-[18px] rounded-[8px] bg-[#4f81bd] self-center w-[200px] px-[20px] py-[10px] text-white text-[20px] font-home'>تسجيل الدخول</button>
            <Link href={'/register'} className='self-end'>إنشاء حساب ؟</Link>
            </form>
            </div>
            <div className="login_image sm:w-[50%] h-[100vh] relative before:absolute before:left-0 before:bottom-0 before:bg-black before:w-[100%] before:h-[100%] before:opacity-[0.7]"></div>
        </div>
    </div>
    </>
  )
}
