import React, { useState } from 'react'
import { footers } from '../constants/constants'
import { useAppContext } from '../context/context'
import { useRouter } from "next/router";
import { BsHome, BsCart, BsBag, BsHeart, BsPersonCircle } from 'react-icons/bs'
 
function Footer() {
    const { dark, userName, handleClick } = useAppContext()
    const router = useRouter()
    
  return (
    <div className={`${dark ? ` border-slate-800 bg-[#1F1F2B]` : `border-white-100 bg-[#F9F9FA]`} bottom-0 sticky w-full h-full border-t-2 flex`}>
       <div className='flex pl-2 pt-1'>
           {footers.map((nav) => (
              <div
              key={nav.id}
              className={`${dark ? ` text-white-100 ` : `text-slate-800`}  font-bold font-noto hover:text-[#FE0A4B] px-2 text-md`}
               href={`${nav.link}`}
              > 
                {nav.name}
                </div>
          ))}
       </div>
    </div>
  )
}

export default Footer