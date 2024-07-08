import '../../../css/grade10.css';

import Image from 'next/image';
import Link from 'next/link';


export default function grade10() {
  return (
    <>
    <div className='w-[100%] pt-[60px]'>
            <div className='container_grade_10 w-[100%] h-[200px] py-[70px] flex items-center justify-center'>
                <p className='font-home text-[30px] z-[1] text-white'>الصف الأول الثانوي</p>
            </div>
            {/* المواد الأساسية */}
            <div dir='rtl' className="container mx-auto bg-[#f1f1f1] h-[60px] mt-[40px] mx-[20px] relative before:absolute before:bottom-[50%] before:translate-y-[50%] before:right-[15px] before:bg-blue-500 before:w-[7px] before:h-[35px]">
                <p className="font-home text-[15px] absolute right-[35px] bottom-[50%] translate-y-[50%]">المواد الاساسية</p>
            </div>
            <div dir='rtl' className='container container_grade10_subjects mx-auto w-[100%] px-[20px] py-[30px] gap-3 grid items-center'>
            <Link href={'grade10/arabic'} className='h-[200px] arabic_subject rounded-[8px] flex items-center justify-center relative'>
              <p className='font-home relative text-[20px] text-white'>اللغة العربية</p>
            </Link>
            <Link href={'grade10/english'} className='h-[200px] english_subject rounded-[8px] flex items-center justify-center relative'>
              <p className='font-home relative text-[20px] text-white'>اللغة الإنجليزية</p>
            </Link>
            <Link href={'grade10/french'} className='h-[200px] french_subject rounded-[8px] flex items-center justify-center relative'>
              <p className='font-home relative text-[20px] text-white'>اللغة الفرنسية</p>
            </Link>
            <Link href={'grade10/german'} className='h-[200px] german_subject rounded-[8px] flex items-center justify-center relative'>
              <p className='font-home relative text-[20px] text-white'>اللغة الألمانية</p>
            </Link>
            <Link href={'grade10/italian'} className='h-[200px] italian_subject rounded-[8px] flex items-center justify-center relative'>
              <p className='font-home relative text-[20px] text-white'>اللغة الإيطالية</p>
            </Link>
            <Link href={'grade10/math'} className='h-[200px] math_subject rounded-[8px] flex items-center justify-center relative'>
              <p className='font-home relative text-[20px] text-white'>مادة الرياضة</p>
            </Link>
            </div>
            {/* المواد العلمية */}
            <div dir='rtl' className="container mx-auto bg-[#f1f1f1] h-[60px] mt-[40px] mx-[20px] relative before:absolute before:bottom-[50%] before:translate-y-[50%] before:right-[15px] before:bg-blue-500 before:w-[7px] before:h-[35px]">
                <p className="font-home text-[15px] absolute right-[35px] bottom-[50%] translate-y-[50%]">المواد العلمية</p>
            </div>
            <div dir='rtl' className='container container_grade10_subjects mx-auto w-[100%] px-[20px] py-[30px] gap-3 grid items-center'>
            <Link href='grade10/chemistry' className='h-[200px] chemistry_subject rounded-[8px] flex items-center justify-center relative'>
              <p className='font-home relative text-[20px] text-white'>مادة الكيمياء</p>
            </Link>
            <Link href={'grade10/physics'} className='h-[200px] physics_subject rounded-[8px] flex items-center justify-center relative'>
              <p className='font-home relative text-[20px] text-white'>مادة الفيزياء</p>
            </Link>
            <Link href={'grade10/biology'} className='h-[200px] biology_subject rounded-[8px] flex items-center justify-center relative'>
              <p className='font-home relative text-[20px] text-white'>مادة الأحياء</p>
            </Link>
            </div>
            {/* المواد الأدبية */}
            <div dir='rtl' className="container mx-auto bg-[#f1f1f1] h-[60px] mt-[40px] mx-[20px] relative before:absolute before:bottom-[50%] before:translate-y-[50%] before:right-[15px] before:bg-blue-500 before:w-[7px] before:h-[35px]">
                <p className="font-home text-[15px] absolute right-[35px] bottom-[50%] translate-y-[50%]">المواد الأدبية</p>
            </div>
            <div dir='rtl' className='container container_grade10_subjects mx-auto w-[100%] px-[20px] py-[30px] gap-3 grid items-center'>
            <Link href='grade10/geography' className='h-[200px] geography_subject rounded-[8px] flex items-center justify-center relative'>
              <p className='font-home relative text-[20px] text-white'>مادة الجغرافيا</p>
            </Link>
            <Link href='grade10/history' className='h-[200px] history_subject rounded-[8px] flex items-center justify-center relative'>
              <p className='font-home relative text-[20px] text-white'>مادة التاريخ</p>
            </Link>
            <Link href='grade10/philosophia' className='h-[200px] philosophia_subject rounded-[8px] flex items-center justify-center relative'>
              <p className='font-home relative text-[20px] text-white'>مادة الفلسفة</p>
            </Link>
            </div>
    </div>
    </>
  )
}