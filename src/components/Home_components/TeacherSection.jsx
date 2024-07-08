'use client'
import '../../../css/teacher_section.css'

import Saged_photo from '../../../public/images/saged_photo.jpg'

import Worm from '../utils/Worm'
import { motion } from "framer-motion" 
import Image from "next/image"

export default function FeatureSection(){
    return(
        <>
    <div className="container mx-auto py-[70px] relative bg-white border-b-[#f1f1f1] border-b-[5px] flex flex-col items-center overflow-hidden">
        <motion.p
        className="position absolute text-gray-300 font-section right-[5px] text-[50px] opacity-[0.5]">المدرسين</motion.p>
        <p className="font-navbar text-[25px] pb-[20px]">مدرسين المنصة</p>
        <Worm/>
        <div className="grid teacher_container w-[100%] gap-3 pt-[40px] px-[10px]">
            {/* card */}
            
            <div className="bg-[#f1f1f1] flex flex-col items-center px-[15px] py-[20px] rounded-[5px]">
                <div className="Image_card  w-[100px] h-[100px] rounded-full">
                    <Image src={Saged_photo} alt="" className="w-[100px] h-[100px] rounded-full"/>
                </div>
                <div className="des_card flex flex-col items-center mt-[7px]">
                <p className="text-[#bf504d] font-navbar">م ساجد</p>
                <p className="font-navbar mt-[3px] text-[#4f81bd]">استاذ ماده الكيمياء</p>
                </div>
            </div>
            <div className="bg-[#f1f1f1] flex flex-col items-center px-[15px] py-[20px] rounded-[5px]">
                <div className="Image_card  w-[100px] h-[100px] rounded-full">
                    <Image src={Saged_photo} alt="" className="w-[100px] h-[100px] rounded-full"/>
                </div>
                <div className="des_card flex flex-col items-center mt-[7px]">
                <p className="text-[#bf504d] font-navbar">م ساجد</p>
                <p className="font-navbar mt-[3px] text-[#4f81bd]">استاذ ماده الكيمياء</p>
                </div>
            </div>
            <div className="bg-[#f1f1f1] flex flex-col items-center px-[15px] py-[20px] rounded-[5px]">
                <div className="Image_card  w-[100px] h-[100px] rounded-full">
                    <Image src={Saged_photo} alt="" className="w-[100px] h-[100px] rounded-full"/>
                </div>
                <div className="des_card flex flex-col items-center mt-[7px]">
                <p className="text-[#bf504d] font-navbar">م ساجد</p>
                <p className="font-navbar mt-[3px] text-[#4f81bd]">استاذ ماده الكيمياء</p>
                </div>
            </div>
            <div className="bg-[#f1f1f1] flex flex-col items-center px-[15px] py-[20px] rounded-[5px]">
                <div className="Image_card  w-[100px] h-[100px] rounded-full">
                    <Image src={Saged_photo} alt="" className="w-[100px] h-[100px] rounded-full"/>
                </div>
                <div className="des_card flex flex-col items-center mt-[7px]">
                <p className="text-[#bf504d] font-navbar">م ساجد</p>
                <p className="font-navbar mt-[3px] text-[#4f81bd]">استاذ ماده الكيمياء</p>
                </div>
            </div>
            <div className="bg-[#f1f1f1] flex flex-col items-center px-[15px] py-[20px] rounded-[5px]">
                <div className="Image_card  w-[100px] h-[100px] rounded-full">
                    <Image src={Saged_photo} alt="" className="w-[100px] h-[100px] rounded-full"/>
                </div>
                <div className="des_card flex flex-col items-center mt-[7px]">
                <p className="text-[#bf504d] font-navbar">م ساجد</p>
                <p className="font-navbar mt-[3px] text-[#4f81bd]">استاذ ماده الكيمياء</p>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}