'use client'
import Image from "next/image";
import Link from "next/link";

import back_Icon from '../../../../public/images/right-arrow.png'
import left_arrow from '../../../../public/images/left-arrow.png'
import phone_call from '../../../../public/images/phone-call.png'
import wallet from '../../../../public/images/wallet.png'
import exam from '../../../../public/images/exam.png'
import logout from '../../../../public/images/turn-off.png'

import Toggle from '../../../components/utils/Toggle'
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import edit from '../../../../public/images/edit.png'


export default function profile({params}) {
    const router = useRouter();
    const [ dataUser , setDataUser ] = useState({});
    const [ courses , setCourses ] = useState(0);
    const [photo , setPhoto ] = useState('');  
useEffect(()=>{
    (async function(){
        const id = await params.id
        const token = await Cookies.get('token')
        if(!token){
            await router.push('/login')
        }
        else{
            await axios.get(`https://academy-backend-mu.vercel.app/api/profile/${id}`,{
                headers:{
                    'Content-Type': 'application/json',
                    "token":token
                }
            })
            .then(async (res)=>{
                await setDataUser(res.data.data)
          
                res.data.data.courses && setCourses(res.data.data.courses.length)
                const response = await fetch(`https://academy-backend-mu.vercel.app/uploadsUsers/${res.data.data.avatar}`,{
                    headers:{
                        "token":token
                    }
                })
                const imageblob = await response.blob()
                const imageObjectUrl= URL.createObjectURL(imageblob)
                setPhoto(imageObjectUrl)
            })
            .catch(async (err)=>{
                await router.push('/')
            })
            
        }
       
})()
},[])
    

    
  return (
    <>
        <div  dir="rtl" className="w-[100%]">
            {/* custom nav */}
            <div className="w-[100%] h-[60px] relative">
            <Link href={'/'}>
            <Image src={back_Icon} className="w-[25px] h-[25px] absolute right-[30px] bottom-[50%] translate-y-[50%] cursor-pointer"/>
            </Link>
            </div>
            <div className="container mx-auto p-[40px] mx-[20px] w-[100%] flex flex-col border-b-[3px] border-b-[#f9f8f8]">
                <div className="flex flex-row items-center">
                    <div className="w-[75px] h-[75px] rounded-full bg-gray-300">
                        <Image src={photo} width={100} height={100} className='rounded-full border-[3px] border-gray-300'/>
                    </div>
                    <div className="flex-grow flex flex-col gap-[1px] mr-[20px]">
                    <p className="font-home text-[#4f81bd] text-[17px]">{dataUser.name}</p>
                    <p className="font-home text-gray-300 text-[12px]">طالب</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mx-[20px] flex w-[100%] items-center px-[40px] py-[20px] border-b-[3px] border-b-[#f9f8f8]">
            <div className='w-[50%] flex flex-col items-center justify-center gap-[1px]'>
                <p className="font-home text-[#4f81bd]">${dataUser.wallet}.00</p>
                <p className="font-home text-gray-300">المحفظة</p>
            </div>
            <div className='w-[50%] flex flex-col items-center justify-center gap-[1px]'>
            <p className="font-home text-[#4f81bd]">{courses}</p>
            <p className="font-home text-gray-300">الكورسات</p>
            </div>
            </div>
            <div className="container mx-auto mx-[20px] pb-[20px] my-[20px] flex w-[100%] flex-col border-b-[3px] border-b-[#f9f8f8]">
                <Link href={`/edit`} className="flex flex-row items-center py-[20px] px-[30px] w-[100%] relative cursor-pointer hover:bg-[#f1f1f1] duration-300">
                <Image src={edit} className="w-[20px] h-[20px] text-black"/>
                <p className="mr-[20px] font-home text-black">تعديل البيانات الشخصية</p>
                <Image src={left_arrow} className="w-[10px] h-[10px] text-black absolute left-[25px]"/>
                </Link>
                <Link href={`/wallet`} className="flex flex-row items-center py-[20px] px-[30px] mt-[10px] w-[100%] relative cursor-pointer hover:bg-[#f1f1f1] duration-300">
                <Image src={wallet} className="w-[20px] h-[20px] text-black"/>
                <p className="mr-[20px] font-home text-black">إضافة فلوس إالى المحفظة</p>
                <Image src={left_arrow} className="w-[10px] h-[10px] text-black absolute left-[25px]"/>
                </Link>
                <div className="flex flex-row items-center py-[20px] px-[30px] mt-[10px] w-[100%] relative cursor-pointer hover:bg-[#f1f1f1] duration-300">
                <Image src={exam} className="w-[20px] h-[20px] text-black"/>
                <p className="mr-[20px] font-home text-black">درجات الإمتحان</p>
                <Image src={left_arrow} className="w-[10px] h-[10px] text-black absolute left-[25px]"/>
                </div>
                <div className="flex flex-row items-center py-[20px] pl-[15px] pr-[30px] mt-[10px] w-[100%] justify-between relative cursor-pointer hover:bg-[#f1f1f1] duration-300">
                <p className="font-home text-black">الوضع الليلي</p>
                <Toggle/>
                </div>
            </div>
            <div className="container mx-auto mx-[20px] pb-[20px] my-[20px] flex w-[100%] flex-col">
                <div className="flex flex-row items-center py-[20px] px-[30px] w-[100%] relative cursor-pointer duration-300"
                onClick={()=>{
                    swal({
                        title:"هل انت متأكد من تسجيل الخروج",
                        icon:"warning",
                        showCanelButton:true,
                        confirmButtonText:'تسجيل الخروج',
                        confirmButtonColor: "#DD6B55",
                    }).then((isConfirmed)=>{
                        if(isConfirmed){
                            fetch('https://academy-backend-mu.vercel.app/api/logout/', {
                                method:"POST",
                                headers: {
                                'Content-Type': 'application/json',
                                'token': Cookies.get('token'), 
                                }
                            })
                            .then(()=>{
                            Cookies.remove('token')
                            swal({
                                title:'تم تسجيل الخروج بنجاح',
                                dangerMode:true
                            })
                            router.push('/login')
                            })
                            .catch((err)=>{console.log(err)})
                            }}
                        )}}
                        
                >
                <Image src={logout} className="w-[30px] h-[30px] text-black"/>
                <p className="mr-[10px] font-home text-[15px] text-[#bf504d]">تسجيل الخروج</p>
                </div>
                
            </div>
        </div>
    </>
  )
}
