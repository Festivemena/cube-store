import Head from 'next/head'
import Image from 'next/image'
import { useAppContext } from '../context/context'
import Footer from '../components/Footer';
import Success from '../components/Success';
import { homeNav } from '../constants/constants';
import { BsHome, BsMoon, BsSun, BsSearch, BsArrowRight } from 'react-icons/bs'
import { Shirt1, Shirt2, Shirt3, Shirt4, Shirt5, Shirt6, Shirt7, Shirt8, Shirt9, Shirt10, Shirt11, Shirt12, Shirt13, Shirt14, Shirt15, shirt16, Shirt17, Shirt18, Shirt19, Girl1 } from '../assets'

const Home = () => {
  const { dark, userName, handleClick } = useAppContext()
  return (
    <div className={`${dark ? `bg-[#1F1F2B]` : `bg-[#F9F9FA]`} h-full w-full`}>
      <Head>
        <title>Cuboid</title>
        <meta name="description" content="The Best Online Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className='w-full h-full'>
        <div className={`${dark ? ` text-[#F9F9FA]` : `text-[#1F1F2B]`} w-full flex absolute z-10 pt-7 px-4 justify-between text-3xl`}>
            {dark ? <BsSun onClick={() => handleClick()} /> : <BsMoon onClick={() => handleClick()} />} <BsSearch />
        </div>
          <div>
            <div className='relative h-[600px] w-full'>
              <Image 
                src={Girl1}
                // height={600}
                // width={440}
                layout="fill"
              />
            </div>
            <div className={`${dark ? `text-[#F9F9FA]` : `text-[#1F1F2B]`} absolute z-10 text-5xl font-noto font-bold px-[24px] -mt-[180px]`}>
              Fashion Sale
            </div>
            <div onClick={() => handleClick()}
             className={`${dark ? `text-[#F9F9FA]` : `text-[#1F1F2B]`} absolute z-10 bg-[#FE0B4A] py-1 ml-5 text-xl -mt-[70px] px-16 rounded-3xl`}>
              Check
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <div className={`${dark ? `text-[#F9F9FA]` : `text-[#1F1F2B]`} px-3 justify-between flex w-full text`}>
            <div className={`${dark ? `text-[#F9F9FA]` : `text-[#1F1F2B]`} text-3xl font-noto`}>
              <div>New</div>
              <div className='text-[10px] -mt-3'>You've never seen it before!</div>
            </div>
            <div className={`${dark ? `text-[#F9F9FA]` : `text-[#1F1F2B]`} text-sm py-1 font-noto`}>View all</div>
          </div>
          <div className=" inset-0 flex snap-x items-center gap-4 overflow-x-scroll px-3">
                {homeNav.map((item, index) => (
                    <div key={index} className="relative h-[150px] w-[125px] flex-shrink-0 snap-center lg:h-[400px] lg:w-[400px]">
                        <Image src={item.image} layout="fill" className={`${dark ? `bg-[#F9F9FA]` : `bg-[#1F1F2B]`} rounded-2xl`} />
                        <div className={`${dark ? `bg-[#1D1D27] text-[#F9F9FA]` : `bg-[#F9F9FA] text-[#1F1F2B]`} z-10 rounded-xl absolute text-[12px] mx-2 px-2 mt-1 uppercase`}>New</div>
                    </div>
                ))}
          </div>
        </div>
        <div className='sticky bottom-0'> 
           <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
