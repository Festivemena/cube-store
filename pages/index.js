import Head from 'next/head'
import Image from 'next/image'
import { useAppContext } from '../context/context'
import Footer from '../components/Footer';
import Success from '../components/Success';
import Home from '../components/Home';

const App = () => {
  const { dark, userName, handleClick } = useAppContext()
  return (
    <div className={`${dark ? `bg-[#1F1F2B]` : `bg-[#F9F9FA]`} h-full w-full`}>
      <Head>
        <title>Cuboid</title>
        <meta name="description" content="The Best Online Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Home />
      </div>
    </div>
  )
}

export default App
