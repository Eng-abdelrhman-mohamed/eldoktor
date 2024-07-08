'use client'
import '../../css/fonts.css'
import './globals.css'

import Contact from '@/components/main_components/Contact';
import Navbar from '@/components/main_components/Navbar';
import Footer from "@/components/main_components/Footer";

import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <body>


{path.startsWith('/profile') || path.startsWith('/wallet') || path.startsWith('/edit') ? (<>
                      <Contact/>
                      {children}
                      </>)
                    :
                      (<>
                      <Contact/>
                      <Navbar/> 
                      {children}
                      <Footer/>
                      </>)
                      }


        </body>
    </html>
  );
}
