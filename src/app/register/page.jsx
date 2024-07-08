'use client'
// css
import '../../../css/register.css'
// image and icons
import user from '../../../public/images/user.png'
import password_icon from '../../../public/images/lock.png'
import show_password_icon from '../../../public/images/eye.png'
import hidden_password_icon from '../../../public/images/hidden.png'
import email_icon from '../../../public/images/email.png'
import phone_icon from '../../../public/images/phone.png'

// library npm
import axios from 'axios'
import swal from 'sweetalert'
import Cookies from 'js-cookie'
// local library
import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'


export default function register() {
    const router = useRouter();
    const [name , setName ] = useState('');
    const [gmail , setGmail ] = useState('');
    const [number , setNumber ] = useState('');
    const [number_dad , setNumber_dad ] = useState('');
    const [grade , setGrade ] = useState('');
    const [country , setCountry ] = useState('');
    const [password , setPassword ] = useState('');
    const [showPassword , setShowPassword] = useState(false);

// check
    (async function(){
        const token = await Cookies.get('token')
        if(token){
            await router.push('/')
        }
      })()


const signup = (submit)=>{
    submit.preventDefault();
    if(name.trim() == '' || name == '' || name.length <= 4){
        return  swal({
            title: "اكتب الاسم صح",
            icon: "error",
            dangerMode: true,
            time:2000
        })
    }
    if(gmail.trim() == '' || gmail == '' || gmail.length <= 8){
        return  swal({
            title: "اكتب الايميل صح",
            icon: "error",
            dangerMode: true,
            time:2000
        })
    }
    if(number.trim() == '' || number == '' || number.length != 11){
        return  swal({
            title: "اكتب رقم التلفون صح",
            icon: "error",
            dangerMode: true,
            time:2000
        })
    }
    if(number_dad.trim() == '' || number_dad == '' || number_dad.length != 11){
        return  swal({
            title: "اكتب رقم تلفون ولي الامر صح",
            icon: "error",
            dangerMode: true,
            time:2000
        })
    }
    if(grade.trim() == '' || grade == ''){
        return  swal({
            title: "اختار السنة الدراسية",
            icon: "error",
            dangerMode: true,
            time:2000
        })
    }
    if(country.trim() == '' || country == ''){
        return  swal({
            title: "اختار المحافظة ",
            icon: "error",
            dangerMode: true,
            time:2000
        })
    }
    if(password.trim() == '' || password == '' || password.length < 8 ){
        return  swal({
            title: " اكتب كلمة السر وخليها اكتر من 8 ",
            icon: "error",
            dangerMode: true,
            time:2000
        })
    }
    axios.post("https://academy-backend-mu.vercel.app/api/register",{
        name,
        number,
        number_dad,
        gmail,
        grade,
        country,
        password
        })
        .then((res)=>{
            const farFutureDate = new Date('2100-01-01');
            Cookies.set('token',res.data.data[0] , { expires : farFutureDate})
            swal({
                icon:"success",
                title:"جدع يا بطيخة",
                text:'تم إنشاء حساب جديد',
                dangerMode:true
            })
            router.push(`/profile/${res.data.data[1]}`)
        })
        .catch((err)=>{
            console.error(new Error(err))
            swal({
                icon:"error",
                title:"احيه!!",
                text:'البيانات غلط يا بطيخة',
                dangerMode:true
            })
        })
}

  return (
    <>
    <div dir='rtl' className="w-[100%]">
        <div className="mx-auto flex">
            <div className="w-[100%] sm:w-[50%] h-[100vh] justify-center font-extralight p-[20px] flex flex-col">
                <p className='font-home text-[20px] pt-[20px]'>إنشاء حساب</p>
                <div className='w-[70px] mr-[23px] h-[3px] mt-[5px] bg-black'></div>
            <form action="" className='mt-[50px] flex flex-col gap-[10px]'>
                {/* name */}
                <div className='w-[100%] relative'>
                <Image src={user} className='w-[20px] h-[20px] absolute top-[50%] translate-y-[-50%] right-[10px]'/>
                <input type="text" placeholder='اسم الطالب' min={11} required onChange={(e)=>{setName(e.target.value)}} className='w-[100%] pr-[40px] pl-[20px] border-b-[2px] border-b-[#f2f2f2] focus:bg-[#f2f2f2] duration-300 py-[10px] outline-none' />
                </div>
                {/* gmail student */}
                <div className='w-[100%] relative mt-[10px]'>
                <Image src={email_icon} className='w-[20px] h-[20px] absolute top-[50%] translate-y-[-50%] right-[10px]'/>
                <input type='email' placeholder='الجيميل' required onChange={(e)=>{setGmail(e.target.value)}} className='w-[100%] pr-[40px] pl-[20px] border-b-[2px] border-b-[#f2f2f2] focus:bg-[#f2f2f2] duration-300 py-[10px] outline-none'/>
                </div>
                {/* phone student */}
                <div className='w-[100%] relative mt-[10px]'>
                <Image src={phone_icon} className='w-[20px] h-[20px] absolute top-[50%] translate-y-[-50%] right-[10px]'/>
                <input placeholder='رقم هاتف الطالب' required onChange={(e)=>{setNumber(e.target.value)}} className='w-[100%] pr-[40px] pl-[20px] border-b-[2px] border-b-[#f2f2f2] focus:bg-[#f2f2f2] duration-300 py-[10px] outline-none'/>
                </div>
                {/* phone parent */}
                <div className='w-[100%] relative mt-[10px]'>
                <Image src={phone_icon} className='w-[20px] h-[20px] absolute top-[50%] translate-y-[-50%] right-[10px]'/>
                <input placeholder='رقم هاتف ولى الامر' required onChange={(e)=>{setNumber_dad(e.target.value)}} className='w-[100%] pr-[40px] pl-[20px] border-b-[2px] border-b-[#f2f2f2] focus:bg-[#f2f2f2] duration-300 py-[10px] outline-none'/>
                </div>
                {/* grade */}
                <div className='w-[100%] relative mt-[10px]'>
                <select value={grade} name="" id="" required onChange={(e)=>{setGrade(e.target.value)}} className='w-[100%] pr-[20px] pl-[20px] border-b-[2px] border-b-[#f2f2f2] focus:bg-[#f2f2f2] duration-300 py-[10px] outline-none'>
                    <option value="" disabled>اختر السنة الدراسية</option>
                    <option value="grade10">الصف الاول الثانوي</option>
                    <option value="grade11">الصف الثاني الثانوي</option>
                    <option value="grade12">الصف الثالث الثانوي</option>
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
                {/* password */}
                <div className='w-[100%] relative mt-[10px]'>
                <Image src={password_icon} className='w-[20px] h-[20px] absolute top-[50%] translate-y-[-50%] right-[10px]'/>
                <input type={showPassword ? 'text' : 'password'} placeholder='كلمة السر' min={8} required onChange={(e)=>{setPassword(e.target.value)}} className='w-[100%] pr-[40px] pl-[20px] border-b-[2px] border-b-[#f2f2f2] focus:bg-[#f2f2f2] duration-300 py-[10px] outline-none'/>
                {showPassword ? 
                <Image src={show_password_icon} onClick={()=>{setShowPassword(!showPassword)}} className='w-[20px] h-[20px] absolute top-[50%] translate-y-[-50%] left-[10px] cursor-pointer'/>
                :
                <Image src={hidden_password_icon} onClick={()=>{setShowPassword(!showPassword)}} className='w-[20px] h-[20px] absolute top-[50%] translate-y-[-50%] left-[10px] cursor-pointer'/>
                }
                </div>
                {/*  */}
                <button onClick={(submit)=>{signup(submit)}} className='mt-[18px] rounded-[8px] bg-[#4f81bd] self-center w-[200px] px-[20px] py-[10px] text-white text-[20px] font-home'>تسجيل الدخول</button>
            <Link href={'/login'} className='self-end'> سجل الدخول !</Link>
            </form>
            </div>
            <div className="login_image sm:w-[50%] h-[100vh] relative before:absolute before:left-0 before:bottom-0 before:bg-black before:w-[100%] before:h-[100%] before:opacity-[0.7]"></div>
        </div>
    </div>
    </>
  )
}
