'use client'
//css
import '../../../../css/grade10_subject.css'
// local package
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { getData , getCoursesUser} from '../../../../helpers/getdata'
import { useEffect, useState } from 'react'
// image and icon
import test_image from '../../../../public/images/subjects_images/chemistry_image.jpg'
// npm package
import Cookies from 'js-cookie'
import axios from 'axios'
import swal from 'sweetalert'



export default function page({params}) {
    const [data,setData] = useState([]);
    const [again,setAgain] = useState([]);
    const router = useRouter();
    const [courses,setCourses] = useState([]);
    const [ tokenUser , setTokenUser ] = useState('');
    const [ avatar , setAvatar ] = useState([]);
    const [video , setVideo] = useState('');
useEffect(()=>{
    (async function(){
        const grade = 'grade10'
        const token = await Cookies.get('token')
        const coursesUser = await getCoursesUser(token)
        setTokenUser(token)
        await setCourses(coursesUser[1])
        await setAgain(coursesUser[0])
        const getCourses = await getData(grade,params.name)  
        await setData(getCourses)
        console.log(getCourses)
        let x = []
        for(let i = 0 ; i < getCourses.length ; i++){
            const response = await fetch(`https://academy-backend-mu.vercel.app/uploadsCourses/${getCourses[i].avatar}`)
            const imageblob = await response.blob()
            const imageObjectUrl = await URL.createObjectURL(imageblob)
            x.push(imageObjectUrl)
        } 
        setAvatar(x)
            })()
        },[])


    const subjects = {
        arabic:"اللغة العربية",
        english:"اللغة الإنجليزية",
        french:"اللغة الفرنسية",
        german:"اللغة الألمانية",
        italian:"اللغة الإيطالية",
        math:"الرياضة",
        chemistry:"مادة الكيمياء",
        physics:"مادة الفيزياء",
        biology:"مادة الاحياء",
        geography:"مادة الجغرافيا",
        history:"مادة التاريخ",
        philosophia:"مادة الفلسفة",
    }
    const name_subject = params.name;

// buy course
function buyCourse(name_course){


}



  return (
    <>
    <div className="w-[100%] pt-[60px] bg-[#f1f1f1]">
        {/* title */}
        <div className='container_grade_10_subject w-[100%] h-[200px] py-[70px] flex items-center justify-center'>
            <p className='font-home text-[30px] z-[1] text-white'>{subjects[name_subject]}</p>
        </div>
        
    <div dir="rtl" className='container px-[20px] mx-auto w-[100%] py-[70px] flex flex-row flex-wrap items-center justify-center'>
            {/* cards */}
 
                { video ? <><video width={320} height={240} controls><source src={video} type='video/mp4'/></video></> : data.map(( item , index )=>{
            return(<>
            <div key={index} className='w-[300px] flex flex-col h-[350px] rounded-[8px] m-[10px] bg-white'>

<Image src={avatar[index]} width={300} height={169} alt='item.avatar' className='w-[300px] h-[169px] rounded-t-[8px]'/>
    <div  className='flex flex-col p-[5px] w-[100%] h-[100%] justify-between'>
        <div  dir='rtl' className='flex flex-row w-[100%] justify-between'>
            <p  className='text-center font-semibold text-slate-900 ml-[5px]'>{item.title}</p>
            <p  className='text-slate-400 mr-[10px] ml-[10px]'>${item.price}.00</p>
        </div>
    <div dir='rtl' className='flex items-center justify-between'>
    {/* button */}
    {courses.includes(item._id) ? (
        <>
        <button onClick={()=>{
                    const token = Cookies.get('token')

axios.get(`https://academy-backend-mu.vercel.app/api/${item._id}`,{
    headers:{
    "Content-Type":'multipart/form-data',
    "token": token
    }
}).then(async(res)=>{
    swal({
        title:'اوعك تطلع يا بطيخة',
        text:"الفيديو بيتجاب",
        dangerMode:true,
        icon:'success'
    })
        const response = await fetch(`https://academy-backend-mu.vercel.app/uploadsCourses/${res.data.data[0].video}`)
            const videoblob = await response.blob()
            const VideoObjectUrl = await URL.createObjectURL(videoblob)
    setVideo(VideoObjectUrl)
}).catch((err)=>{
    console.error(new Error(err))
})
        }} class="h-10 px-6 m-[10px] font-semibold rounded-md bg-green-600 hover:bg-green-700 duration-300 text-white">
            {again[courses.indexOf(item._id)]} أدخل للكورس
        </button>
        </>) :(
            <>
            <button onClick={()=>{
                    const token = Cookies.get('token')
                    if(token){
                        axios.get(`https://academy-backend-mu.vercel.app/api/courses/${item._id}`,{
                            headers:{
                                "Content-Type":'multipart/form-data',
                                "token": token
                            }
                        })
                        .then((res)=>{
                            console.log(res)
                            swal({
                                icon:'success',
                                title:'جدع يا بطيخة',
                                text:'اشتريت الكورس',
                                dangerMode:true
                            })
                        })
                        .catch((err)=>{
                            console.error(new Error(err))
                            swal({
                                icon:'error',
                                title:'معكش فلوس كفاية يا بطيخة',
                                text:'اشحن محفظتك',
                                dangerMode:true
                            })
                        })
                    }else{
                        swal({
                            icon:'error',
                            title:'إنشئ حساب الأول',
                            dangerMode:true
                        })
                    }
            }} className="h-10 px-6 m-[10px] font-semibold rounded-md bg-red-600 hover:bg-red-700 duration-300 text-white">
            اشتري الأن
            </button>
        </>)}
            
        

        <p className='ml-[10px] font-thin'>10 يناير 2024</p>
    </div>
    
</div>
</div>
                </>)
            })}




        </div>
    </div>
    </>
  )
}
