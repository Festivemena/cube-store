import Head from 'next/head'
import Image from 'next/image'
import { useAppContext } from '../context/context'
import { BsCartXFill, BsCartCheck } from 'react-icons/bs';

const Success = () => {
    const { dark, userName, handleClick } = useAppContext()
    return (
      <div className={`${dark ? `bg-[#2B2D39]` : `bg-secondary-white`} h-screen w-full`}>
        <Head>
          <title>Cuboid</title>
          <meta name="description" content="The Best Online Store" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={`${dark ? ` text-white-100` : `text-slate-800`} text-center justify-center h-full w-full items-center`} >
        <p className={`${dark ? ` text-secondary` : `text-slate-800`} items-center text-center justify-center  pt-36 w-full px-36 text-8xl `}>
          <BsCartCheck />
        </p>
            <div className='pt-12 text-3xl font-bungee font-bold'>Success!</div>
            <div className='font-noto pt-4 text-md'>
                <div>Your order would be delivered soon,</div>
                <div>Thank you {userName} for Shopping with Cuboid!</div>
            </div>
            <div onClick={() => handleClick()} className={`${dark ? ` bg-[#FE0A4B]` : `bg-slate-800`} mt-36 py-1 rounded-2xl uppercase text-secondary-white mx-6`}>Continue Shopping</div>
        </div>
      </div>
    )
  }
export default Success