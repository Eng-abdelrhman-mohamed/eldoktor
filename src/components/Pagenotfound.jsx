'use client'
import { motion } from "framer-motion"


export default function Pagenotfound() {
    return (
  <>
    <div className="bg-[#F1F1F1] w-[100%] h-[100vh] overflow-hidden">
      <div className="container mx-auto px-[20px] pt-[80px] h-[100%] flex items-center justify-center">
      <motion.h1
      initial={{x:-700}}
      animate={{x:0}}
      transition={{type:'spring',stiffness:300}} 
      className="font-navbar text-red-500">الصفحة دى مش موجودة</motion.h1>
      </div>
    </div>
  </>
    )
  }