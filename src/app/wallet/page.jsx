'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

import back_Icon from '../../../public/images/right-arrow.png'

import Cookies from 'js-cookie'
import swal from 'sweetalert';
import axios from 'axios';


export default function wallet() {
    const router = useRouter();
    const [ wallet , setWallet ] = useState(0);
    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const [ valueInput1 , setValueInput1 ] = useState('');
    const [ valueInput2 , setValueInput2 ] = useState('');
    const [ valueInput3 , setValueInput3 ] = useState('');
    const [ id , setId ] = useState('');

// check and data
(async function(){
    const token = await Cookies.get('token')
    if(!token){
        await router.push('/')
    }
    axios.get("https://academy-backend-mu.vercel.app/api/user/",{
        headers:{
            'Content-Type':'application/json',
            'token':Cookies.get('token')
        }
    })
    .then(async(res)=>{
        await setWallet(res.data.data.wallet)
        await setId(res.data.data._id)
    })
  })()



// focus inputs
function inputs(){
    let value1 = input1.current.value
    let value2 = input2.current.value
    if(value1.length == 3){
        input2.current.focus()
    }
    if(value2.length == 3 && value1.length == 3){
        input3.current.focus()
    }
}

// buy a code
function dataCode(){
    const code = valueInput1.toString() + valueInput2.toString() + valueInput3.toString()
    if(valueInput1.length == 3 && valueInput2.length == 3 && valueInput3.length == 3){
        fetch("https://academy-backend-mu.vercel.app/api/code",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                token:Cookies.get("token"),
                code:code
            }
        })
        .then((res)=>{
            if(res.status == 200){
                swal({
                    icon:"success",
                    title:"جدع يا بطيخة",
                    text:'50 جنية اضافت على رصيدك'
                })
            }else{
                swal({
                    icon:"error",
                    title:"الكود غلط يا بطيخة",
                    dangerMode:true
                })
            }
        })
        .catch((err)=>{
            swal({
                icon:"error",
                title:"الكود غلط يا بطيخة",
                dangerMode:true
            })
    })
}   
}

  return (
    <>
        <div dir="ltr" className="w-[100%]">
            {/* back button */}
            <div className="w-[100%] h-[60px] relative">
                <Link href={`profile/${id}`}>
                <Image src={back_Icon} alt={''} className="w-[25px] h-[25px] absolute right-[30px] bottom-[50%] translate-y-[50%] cursor-pointer"/>
                </Link>
            </div>
            {/* wallet */}
            <div dir="rtl" className="container mx-auto p-[40px] mx-[20px] w-[100%] flex flex-col items-center justify-center border-b-[3px] border-b-[#f9f8f8]">
                <p className='font-navbar text-[30px]'>
                {wallet} جم
                </p>
                <p className="font-navbar mt-[10px] text-[17px] text-gray-300">لشراء أكواد كلمنا واتس اب</p>
            </div>
            {/* inputs */}
            <div className='container mx-auto p-[40px] py-[80px] mx-[20px] w-[100%] flex items-center justify-center'>
                {/* input one */}
                <div className='flex flex-col w-[33%]'>
                    <input type="text" maxLength={3} 
                    onChange={(e)=>{
                        inputs()
                        setValueInput1(e.target.value)
                    }} 
                    ref={input1} required className='border-none outline-none bg-gray-300 h-[50px] rounded-[8px] m-[3px] px-[10px] font-home'/>
                    <label htmlFor="" className='text-red text-[15px]'>اكمل الفراغ...</label>
                </div>
                {/* input two */}
                <div className='flex flex-col w-[33%]'>
                    <input type="text" maxLength={3}
                    onChange={(e)=>{
                        inputs()
                        setValueInput2(e.target.value)
                    }}
                    ref={input2} required className='border-none outline-none bg-gray-300 h-[50px] rounded-[8px] m-[3px] px-[10px] font-home'/>
                    <label htmlFor="" className='text-red text-[15px]'>اكمل الفراغ...</label>
                </div>
                {/* input three */}
                <div className='flex flex-col w-[33%]'>
                    <input type="text" maxLength={3} 
                    onChange={(e)=>{
                        setValueInput3(e.target.value)
                    }} ref={input3} required className='border-none outline-none bg-gray-300 h-[50px] rounded-[8px] m-[3px] px-[10px] font-home'/>
                    <label htmlFor="" className='text-red text-[15px]'>اكمل الفراغ...</label>
                </div>
            </div>
            {/* click button for send data */}
            <div className='container mx-auto p-[40px] py-[80px] mx-[20px] w-[100%] flex flex-row items-center justify-center'>
            <button onClick={()=>{dataCode()}} className='w-[200px] h-[50px] font-home rounded-[12px] text-white bg-[#4f81bd] duration-300 hover:bg-[#2d4c72]'>شراء الكود</button>
            </div>
        </div>
    </>
  )
}
