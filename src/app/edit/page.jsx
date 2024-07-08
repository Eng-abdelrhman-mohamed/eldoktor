'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import user from '../../../public/images/user.png'
import { useState , useEffect } from 'react';

import back_Icon from '../../../public/images/right-arrow.png'

import Cookies from 'js-cookie'
import swal from 'sweetalert';
import axios from 'axios';
import phone_icon from '../../../public/images/phone.png'


export default function edit() {
    const router = useRouter();
    const [ userData , setUserData ] = useState({});
    const [ id , setId ] = useState('');
    const [ image , setImage ] = useState('');

    const [ newimage , setNewImage ] = useState('');
    const [name , setName ] = useState('');
    const [number , setNumber ] = useState('');
    const [grade , setGrade ] = useState('');
    const [country , setCountry ] = useState('');


// check and data
useEffect(()=>{
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
            await setUserData(res.data.data)
            await setId(res.data.data._id)
            await setName(res.data.data.name)
            await setNumber(res.data.data.number)
            await setNewImage(res.data.data.avatar)
            await setGrade(res.data.data.grade)
            await setCountry(res.data.data.country)
            const response = await fetch(`https://academy-backend-mu.vercel.app/uploadsUsers/${res.data.data.avatar}`,{
                headers:{
                    "token":Cookies.get('token')
                }
            })
            const imageblob = await response.blob()
            const imageObjectUrl= URL.createObjectURL(imageblob)
            setImage(imageObjectUrl)
        })
      })()
},[])




// focus inputs

// buy a code
function edit_profile(){
    if(name == "" || name.length < 8 || name.trim() == ''){
        return swal({
            icon:"error",
            title:'حط الاسم صح',
            dangerMode:true
        })
    }
    if(number == "" || number.length != 11 || number.trim() == '' ){
        return swal({
            icon:"error",
            title:'حط  الرقم صح',
            dangerMode:true
        })
    }
    if(grade == "" || grade.trim() == ''){
        return swal({
            icon:"error",
            title:'اختار السنة الدراسية',
            dangerMode:true
        })
    }
        if(country == "" || country.trim() == ''){
        return swal({
            icon:"error",
            title:'اختار محافظة',
            dangerMode:true
        })
    }
    axios.patch('https://academy-backend-mu.vercel.app/api/users/edit',{
            name,
            number,
            avatar:newimage,
            grade,
            country
    },{
        headers:{
            'Content-Type':'multipart/form-data',
            'token':Cookies.get('token')
        }
    }).then((res)=>{
        if(res.status == 200){
            swal({
                title:'تم تعديل البيانات بنجاح',
                icon:"success",
                dangerMode:true
            })
        }
        if(res.status == 404 ){
            swal({
                title:'تايباس البيانات غلط',
                icon:"error",
                dangerMode:true
            })
        }
    }).catch(()=>{
        swal({
            title:'البيانات غلط',
                icon:"error",
                dangerMode:true
        })
    })
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
            {/* photo */}
            <div dir="rtl" className="container mx-auto p-[40px] mx-[20px] w-[100%] flex flex-col items-center justify-center border-b-[3px] border-b-[#f9f8f8]">
            <Image src={image} alt={''} width={100} height={100} className="w-[75px] h-[75px] rounded-full p-[3px] border-[2px] border-gray-300"/>
            <input type="file" onChange={(e)=>{setNewImage(e.target.files[0])}} className='pt-[10px]'/>
            </div>
            {/* inputs */}
            <div dir='rtl' className="mx-auto flex">
            <div className="w-[100%] justify-center font-extralight py-[10px] px-[20px] flex flex-col">
            <form action="" className='mt-[30px] flex flex-col gap-[10px]'>
                {/* name */}
                <div className='w-[100%] relative'>
                <Image src={user} className='w-[20px] h-[20px] absolute top-[50%] translate-y-[-50%] right-[10px]'/>
                <input type="text" placeholder='اسم الطالب' value={name} min={11} required onChange={(e)=>{setName(e.target.value)}} className='w-[100%] pr-[40px] pl-[20px] border-b-[2px] border-b-[#f2f2f2] focus:bg-[#f2f2f2] duration-300 py-[10px] outline-none' />
                </div>
                {/* phone student */}
                <div className='w-[100%] relative mt-[10px]'>
                <Image src={phone_icon} className='w-[20px] h-[20px] absolute top-[50%] translate-y-[-50%] right-[10px]'/>
                <input placeholder='رقم هاتف الطالب' value={number} required onChange={(e)=>{setNumber(e.target.value)}} className='w-[100%] pr-[40px] pl-[20px] border-b-[2px] border-b-[#f2f2f2] focus:bg-[#f2f2f2] duration-300 py-[10px] outline-none'/>
                </div>
                {/* grade */}
                <div className='w-[100%] relative mt-[10px]'>
                <select value={grade} name="" id="" required onChange={(e)=>{setGrade(e.target.value)}} className='w-[100%] pr-[20px] pl-[20px] border-b-[2px] border-b-[#f2f2f2] focus:bg-[#f2f2f2] duration-300 py-[10px] outline-none'>
                    <option value="" disabled>اختر السنة الدراسية</option>
                    <option value="10">الصف الاول الثانوي</option>
                    <option value="11">الصف الثاني الثانوي</option>
                    <option value="12">الصف الثالث الثانوي</option>
                </select>
                </div>
                {/* Country */}
                <div className='w-[100%] relative mt-[10px]'>
                <select value={country} name="" id="" required onChange={(e)=>{setCountry(e.target.value)}} className='w-[100%] pr-[20px] pl-[20px] border-b-[2px] border-b-[#f2f2f2] focus:bg-[#f2f2f2] duration-300 py-[10px] outline-none'>
                    <option value="" disabled>المحافظة</option>
                    <option value="Cairo">القاهرة</option>
                    <option value="Alexandria">الإسكندرية</option>
                    <option value="Gizeh">الجيزة</option>
                    <option value="Shubra El-Kheima">شبرا الخيمة</option>
                    <option value="Port Said">بور سعيد	</option>
                    <option value="Suez">السويس</option>
                    <option value="Luxor">الأقصر</option>
                    <option value="al-Mansura">المنصورة</option>
                    <option value="El-Mahalla El-Kubra">المحلة الكبرى</option>
                    <option value="Tanta">طنطا</option>
                    <option value="Asyut">أسيوط</option>
                    <option value="Ismailia">الإسماعيلية</option>
                    <option value="Fayyum">الفيوم</option>
                    <option value="Aswan">أسوان</option>
                    <option value="Damietta">دمياط</option>
                    <option value="Damanhur">دمنهور</option>
                    <option value="al-Minya">المنيا</option>
                    <option value="Beni Suef">بنى سويف</option>
                    <option value="Qena">قنا</option>
                    <option value="Sohag">سوهاج</option>
                    <option value="Qena">قنا</option>
                    <option value="Hurghada">الغردقة</option>
                    <option value="Banha">بنها</option>
                    <option value="Kafr el-Sheikh">كفر الشيخ</option>
                    <option value="Arish">العريش</option>
                    <option value="Marsa Matruh">مرسى مطروح</option>
                </select>
                </div>
            </form>
            </div>
        </div>
            {/* click button for send data */}
            <div className='container mx-auto p-[40px] py-[80px] mx-[20px] w-[100%] flex flex-row items-center justify-center'>
            <button onClick={()=>{edit_profile()}} className='w-[200px] h-[50px] font-home rounded-[12px] text-white bg-[#4f81bd] duration-300 hover:bg-[#2d4c72]'>تعديل البيانات</button>
            </div>
        </div>
    </>
  )
}
