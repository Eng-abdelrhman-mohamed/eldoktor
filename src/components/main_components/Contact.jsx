import whatsapp_icon from '../../../public/images/whatsapp.png'

import Image from "next/image"
import Link from "next/link"

export default function Contact() {
  return (
    <>
    <Link  href={'https://api.whatsapp.com/send/?phone=%2B201025312358&text&type=phone_number&app_absent=0'}>
    <Image src={whatsapp_icon} alt={'تواصل معنا'} className="w-[50px] z-[1000] hover:shadow-lg hover:shadow-black-500 duration-300 h-[50px] rounded-full fixed bottom-[20px] right-[20px] cursor-pointer"/>
    </Link>
    </>
  )
}
