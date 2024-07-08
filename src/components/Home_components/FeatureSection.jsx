'use client'
import Mark_icon from '../../../public/images/mark.png'

import { motion } from "framer-motion" 
import Worm from '../utils/Worm'
import Image from "next/image"

export default function FeatureSection(){
    return(
        <>
    <div className="container mx-auto py-[50px] relative bg-white flex flex-col items-center overflow-hidden border-b-[5px] border-b-[#f1f1f1]">
        <p
        className="position absolute text-gray-300 font-section right-[5px] text-[50px] opacity-[0.5]">ليه</p>
        <p className="font-navbar text-[25px] pb-[20px]">ليه تختار منصة الدكتور</p>
        <Worm/>
        <div className="flex flex-row-reverse mt-[30px] mr-[20px] self-end items-center">
            <Image src={Mark_icon} alt={'mark_icon'} className="w-[30px] h-[30px]" />
            <p className="mr-[10px] text-[20px] mt-[3px] font-navbar text-[#4F81BD]">وفر وقت المواصلات</p>
        </div>
        <div className="flex flex-row-reverse mt-[30px] mr-[20px] self-end items-center">
            <Image src={Mark_icon} alt={'mark_icon'} className="w-[30px] h-[30px]" />
            <p className="mr-[10px] text-[20px] mt-[3px] font-navbar text-[#4F81BD]">متابعة دورية على مدار السنة</p>
        </div>
        <div className="flex flex-row-reverse mt-[30px] mr-[20px] self-end items-center">
            <Image src={Mark_icon} alt={'mark_icon'} className="w-[30px] h-[30px]" />
            <p className="mr-[10px] text-[20px] mt-[3px] font-navbar text-[#4F81BD]">نخبة من أقوي المدرسين</p>
        </div>
    </div>
        </>
    )
}