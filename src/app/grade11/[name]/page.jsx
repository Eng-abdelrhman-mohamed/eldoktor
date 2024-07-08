import Image from 'next/image'
import '../../../../css/grade11_subject.css'

import test_image from '../../../../public/images/subjects_images/chemistry_image.jpg'

export default function page({params}) {
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
        geology:"مادة الجيولوجيا",
        geography:"مادة الجغرافيا",
        history:"مادة التاريخ",
        philosophia:"مادة الفلسفة",
        psychology:"مادة علم النفس"
    }
    const name_subject = params.name
  return (
    <>
    <div className="w-[100%] pt-[60px] bg-[#f1f1f1]">
        {/* title */}
        <div className='container_grade_11_subject w-[100%] h-[200px] py-[70px] flex items-center justify-center'>
            <p className='font-home text-[30px] z-[1] text-white'>{subjects[name_subject]}</p>
        </div>
        
    <div dir="rtl" className='container px-[20px] mx-auto w-[100%] py-[70px] flex flex-row flex-wrap items-center justify-center'>
            {/* card */}
            <div className='w-[300px] flex flex-col h-[350px] rounded-[8px] m-[10px] bg-white'>

                <Image src={test_image} alt='' className='w-[300px] h-[169px] rounded-t-[8px]'/>
                <div className='flex flex-col p-[5px] w-[100%] h-[100%] justify-between'>
                    <div dir='rtl' className='flex flex-row w-[100%] justify-between'>
                        <p className='text-center font-semibold text-slate-900 ml-[5px]'>مراجعه الباب الأول من الكيمياء الحرارية</p>
                        <p className='text-slate-400 mr-[10px] ml-[10px]'>$30.00</p>
                    </div>
                    <div dir='rtl' className='flex items-center justify-between'>
                        <button class="h-10 px-6 m-[10px] font-semibold rounded-md bg-red-600 hover:bg-red-700 duration-300 text-white" type="submit">
                            اشتري الأن
                        </button>
                        <p className='ml-[10px] font-thin'>10 يناير 2024</p>
                    </div>
                    
                </div>
            </div>
            {/* card */}
            <div className='w-[300px] flex flex-col h-[350px] rounded-[8px] m-[10px] bg-white'>

<Image src={test_image} alt='' className='w-[300px] h-[169px] rounded-t-[8px]'/>
<div className='flex flex-col p-[5px] w-[100%] h-[100%] justify-between'>
    <div dir='rtl' className='flex flex-row w-[100%] justify-between'>
        <p className='text-center font-semibold text-slate-900 ml-[5px]'>مراجعه الباب الأول من الكيمياء الحرارية</p>
        <p className='text-slate-400 mr-[10px] ml-[10px]'>$30.00</p>
    </div>
    <div dir='rtl' className='flex items-center justify-between'>
        <button class="h-10 px-6 m-[10px] font-semibold rounded-md bg-green-600 hover:bg-green-700 duration-300 text-white" type="submit">
            2 أدخل للكورس
        </button>
        <p className='ml-[10px] font-thin'>10 يناير 2024</p>
    </div>
    
</div>
            </div>
        </div>
    </div>
    </>
  )
}
