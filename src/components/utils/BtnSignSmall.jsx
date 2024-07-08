'use client'
import '../../../css/btn_sign.css'

import register_icon from '../../../public/images/chemical.png';

import Link from "next/link";
import Image from "next/image";

export default function BtnSignSmall() {
  return (
    <>
     <Link dir="rtl" href="/login" className='btn-login w-[100%] flex items-center justify-center h-[45px] pl-[12px] mx-[20px] pr-[20px] text-center bg-[rgb(79,129,189)] hover:bg-transparent border-solid border-[2px] border-[rgb(79,129,189)] rounded-[5px] duration-300 text-white hover:text-[rgb(79,129,189)]'>
            <svg width={30} className='svg-login fill-white ml-[8px] duration-300' height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
              <p className="text-[17px] mt-[3px] font-navbar">تسجيل الدخول</p>
            </Link>
            <Link dir="rtl" href="/register" className='w-[100%] flex items-center justify-center h-[45px] pl-[12px] mx-[20px] pr-[12px] text-center bg-[rgb(192,80,77)] hover:bg-transparent border-solid border-[2px] border-[rgb(192,80,77)] rounded-[5px] duration-300 text-white hover:text-[rgb(192,80,77)]'>
              <Image src={register_icon} alt={''} width={30} height={30} className=" ml-[15px] duration-300" />
              <p className="text-[17px] mt-[3px] font-navbar">إنشاء حساب !</p>
    </Link>
    </>
  )
}
