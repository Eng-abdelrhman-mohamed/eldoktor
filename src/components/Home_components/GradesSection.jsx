import '../../../css/grade_section.css';

import Link from 'next/link';
import Worm from '../utils/Worm';

export default function GradeSection(){
    return(
<>
<div className='flex flex-col items-center py-[100px]'>
    <p className='font-navbar text-[25px] pb-[20px]'>الصفوف الدراسية</p>
    <Worm/>
    <div dir='rtl' className="container mx-auto Grade-container mx-[20px] my-[30px]">
        <Link href='/grade10' className="Grade-10 h-[250px] flex items-center justify-center cursor-pointer shadow-md hover:shadow-gray-600 duration-300">
        <p className='font-navbar z-[3] text-white text-[30px] hover:text-[rgb(192,80,77)] duration-300'>الصف الأول الثانوي</p>
        </Link>
        <Link href='/grade11' className="Grade-11 flex h-[250px] items-center justify-center cursor-pointer shadow-md hover:shadow-gray-600 duration-300">
        <p className='font-navbar z-[3] text-white text-[30px] hover:text-[rgb(192,80,77)] duration-300'>الصف الثاني الثانوي</p>
        </Link>
        <Link href='/grade12' className="Grade-12 flex h-[250px] items-center justify-center cursor-pointer shadow-md hover:shadow-gray-600 duration-300">
        <p className='font-navbar z-[3] text-white text-[30px] hover:text-[rgb(192,80,77)] duration-300'>الصف الثالث الثانوي</p>
        </Link>
    </div>
</div>
</>
    )
}