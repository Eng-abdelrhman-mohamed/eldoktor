'use client'
import '../../../css/home.css'

import personHome from '../../../public/images/personHome.png'

import Image from "next/image"
import { motion } from "framer-motion"
import Link from 'next/link'
export default function HomePage() {

  return (
    <>
    <header className="w-[100%] h-[100vh] bg-[#F1F1F1] home_container">
        <div className="container m-auto px-[20px] flex flex-col sm:flex-row-reverse flex-col-reverse">
          <div className="w-[100%] sm:w-[50%] h-[100vh] flex items-center justify-center flex-col">
            <h1 className='font-navbar text-[41px] hover:text-[rgb(192,80,77)] duration-300'>منصة <span className="text-[rgb(192,80,77)] hover:text-black duration-300">الدكتور</span></h1>
            <p dir="rtl" className="text-gray-500 my-[20px] w-[300px] text-[19px]">منصة تعليمية تفاعلية تدعم الطلاب بالموارد والأدوات اللازمة لتحقيق النجاح والتفوق الدراسي.</p>
            <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:'spring',stiffness:300}} className="w-[180px] h-[51px] mt-[10px] rounded-[8px] bg-[rgb(79,129,189)] hover:bg-[rgb(79,140,200)] flex items-center justify-center cursor-pointer">
              <Link href={'/login'} className="text-white text-[17px] font-home">! سجل الأن</Link>
            </motion.div>
          </div>
          <div className="w-[0%] hidden sm:w-[50%] h-[60vh] sm:h-[100vh] sm:flex flex items-center justify-center">
            <div className="container_of_photo w-[400px] h-[400px]">
            <Image src={personHome} alt={''} width={500} height={500} className=""/>
            </div>
          </div>
        </div>
    </header>
    </>
  )
}
