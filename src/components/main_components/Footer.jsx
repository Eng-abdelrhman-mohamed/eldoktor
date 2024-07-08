import youtube_icon from '../../../public/images/youtube.png'
import facebook_icon from '../../../public/images/facebook.png'

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <>
    <footer className="w-[100%] h-[200px] bg-[#1b3f74]">
        <div className="container mx-auto flex flex-col items-center justify-center">
            <div className='flex items-center justify-center gap-[15px] pt-[30px]'>
                <Link href='#'>
                <Image src={youtube_icon} alt={''} className="w-[50px] h-[50px] rounded-full"/>
                </Link>
                <Link href='#'>
                <Image src={facebook_icon} alt={''} className="w-[50px] h-[50px] rounded-full"/>
                </Link>
            </div>
            <p className="flex items-center justify-center font-extrabold pt-[20px] text-gray-200">Made With Love By <Link href='#' className='text-[#4f81bd] ml-[5px]'> Abdelrhman Mohamed</Link></p>
            <p className="flex items-center justify-center font-medium pt-[20px] text-gray-200">جميع الحقوق محفوظة © لمنصة الدكتور</p>
        </div>
    </footer>
    </>
  )
}
