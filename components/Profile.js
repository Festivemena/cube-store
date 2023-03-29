import React from 'react'
import Image from 'next/image'
import { useAppContext } from '../context/context'
import { BsHome, BsMoon, BsSun, BsSearch, BsArrowRight } from 'react-icons/bs'
import Mart from '../assets/IMG.jpg'
import { useRouter } from 'next/router'

const Profile = () => {
    const { dark, userName, userEmail, handleClick } = useAppContext()
    const router = useRouter()

  return (
    <div className={`${dark ? `bg-[#1F1F2B]` : `bg-[#F9F9FA]`} h-full pt-4 px-4 w-full`}>
        <div className={`${dark ? ` text-secondary` : `text-slate-800`} w-full flex justify-between text-3xl`}>
            {dark ? <BsSun onClick={() => handleClick()} /> : <BsMoon onClick={() => handleClick()} />} <BsSearch />
        </div>
        <div className={`${dark ? ` text-secondary` : `text-slate-800`} text-2xl font-noto ml-3 mt-3`}>My Profile</div>
        <div className='ml-3 flex mt-4'>
            <Image 
                src={Mart}
                height={75}
                width={75}
                className='rounded-full '
            /> 
            <div className='ml-4 mt-2'>
                <div className={`${dark ? ` text-white-100` : `text-tertiary`} font-noto text-xl font-semibold`}>{userName}</div>
                <div className={`${dark ? ` text-white-100` : `text-tertiary`} font-noto text-[14px] font-semibold`}>{userEmail}</div>
            </div>
        </div>
        <div
        // onClick={()=> router.push()}
         className={`${dark ? ` border-secondary border-b-2` : `border-b-2 border-primery-black`} mt-6 pl-3 pb-2 justify-between flex`}> 
            <div>
                <div className={`${dark ? ` text-white-100` : `text-tertiary`} font-noto text-[16px] font-semibold`}>My Orders</div>
                <div className={`${dark ? ` text-white-100` : `text-tertiary`} font-noto text-[11px] font-semibold`}>Already have 12 orders</div>
            </div>
             <BsArrowRight className={`${dark ? ` text-white-100` : `text-tertiary`} mr-4`} />
        </div>
        <div
        // onClick={()=> router.push()}
         className={`${dark ? ` border-secondary border-b-2` : `border-b-2 border-primery-black`} mt-4 pl-3 pb-2 justify-between flex`}> 
            <div>
                <div className={`${dark ? ` text-white-100` : `text-tertiary`} font-noto text-[16px] font-semibold`}>Shipping Addresses</div>
                <div className={`${dark ? ` text-white-100` : `text-tertiary`} font-noto text-[11px] font-semibold`}>3 shipping addresses</div>
            </div>
             <BsArrowRight className={`${dark ? ` text-white-100` : `text-tertiary`} mr-4`} />
        </div>
        <div
        // onClick={()=> router.push()}
         className={`${dark ? ` border-secondary border-b-2` : `border-b-2 border-primery-black`} mt-4 pl-3 pb-2 justify-between flex`}> 
            <div>
                <div className={`${dark ? ` text-white-100` : `text-tertiary`} font-noto text-[16px] font-semibold`}>Payment method</div>
                <div className={`${dark ? ` text-white-100` : `text-tertiary`} font-noto text-[11px] font-semibold`}>Visa **34</div>
            </div>
             <BsArrowRight className={`${dark ? ` text-white-100` : `text-tertiary`} mr-4`} />
        </div>
        <div
        // onClick={()=> router.push()}
         className={`${dark ? ` border-secondary border-b-2` : `border-b-2 border-primery-black`} mt-4 pl-3 pb-2 justify-between flex`}> 
            <div>
                <div className={`${dark ? ` text-white-100` : `text-tertiary`} font-noto text-[16px] font-semibold`}>Promocodes</div>
                <div className={`${dark ? ` text-white-100` : `text-tertiary`} font-noto text-[11px] font-semibold`}>You have special promo codes</div>
            </div>
             <BsArrowRight className={`${dark ? ` text-white-100` : `text-tertiary`} mr-4`} />
        </div>
        <div
        // onClick={()=> router.push()}
         className={`${dark ? ` border-secondary border-b-2` : `border-b-2 border-primery-black`} mt-4 pl-3 pb-2 justify-between flex`}> 
            <div>
                <div className={`${dark ? ` text-white-100` : `text-tertiary`} font-noto text-[16px] font-semibold`}>My Reviews</div>
                <div className={`${dark ? ` text-white-100` : `text-tertiary`} font-noto text-[11px] font-semibold`}>Reviews for 4 items</div>
            </div>
             <BsArrowRight className={`${dark ? ` text-white-100` : `text-tertiary`} mr-4`} />
        </div>
        <div
        // onClick={()=> router.push()}
         className={`${dark ? ` border-secondary border-b-2` : `border-b-2 border-primery-black`} mt-4 pl-3 pb-2 bg-[#FEOA4A] justify-between flex`}> 
            <div>
                <div className={`${dark ? ` text-white-100` : `text-tertiary`} font-noto text-[16px] font-semibold`}>Settings</div>
                <div className={`${dark ? ` text-white-100` : `text-tertiary`} font-noto text-[11px] font-semibold`}>Notification, Password</div>
            </div>
             <BsArrowRight className={`${dark ? ` text-white-100` : `text-tertiary`} mr-4`} />
        </div>
    </div>
  )
}

export default Profile