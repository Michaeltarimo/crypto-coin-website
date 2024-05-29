import Image from "next/image";
import React, { useEffect, useState } from 'react'
import logo from "@/../public/img/logo.png";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import { motion } from "framer-motion";


const index = () => {

  const [active, setActive] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      isActive();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>



      <div className={`flex items-center z-auto md:hidden justify-between p-10 sticky top-0 ${active ? "sticky top-0 bg-SolanaBlack/90 p-4" : ""}`}>
        <nav className="flex flex-row items-center justify-between gap-6">
          <div className="border-2 border-SolanaGreen/70 rounded-full">
            <Image src={logo} alt="logo" className="w-24 p-1 h-auto bg-gradient-to-br from-SolanaBlue/70 via-SolanaBlack/70 to-SolanaPurple/70 rounded-full" />
          </div>
          <div>
            <AnimatedText>
              <h1 className="text-4xl xl:text-2xl font-extrabold">ANTICABAL</h1>
            </AnimatedText>
          </div>
        </nav>
        <nav className="flex flex-row items-center justify-between gap-16 md:hidden">
          <Link href="#home" className="hover:text-gray-400 text-2xl xl:text-xl"><AnimatedText>Home</AnimatedText></Link>
          <Link href="#about" className="hover:text-gray-400 text-2xl xl:text-xl"><AnimatedText>About</AnimatedText></Link>
          <Link href="#tokenomics" className="hover:text-gray-400 text-2xl xl:text-xl"><AnimatedText>Tokenomics</AnimatedText></Link>
          <Link href="#socials" className="hover:text-gray-400 text-2xl xl:text-xl"><AnimatedText>Socials</AnimatedText></Link>
          <Link href="https://t.me/anti_cabal" target="_blank" className="lg:hidden border-2 border-white px-4 py-4 text-2xl xl:text-xl rounded-3xl hover:bg-white hover:text-black">Join Telegram</Link>
        </nav>
      </div>


      <div className={`hidden md:flex z-auto items-center justify-between p-10 sticky top-0 ${active ? "sticky top-0 bg-SolanaBlack/90 p-4" : ""}`}>

        <nav className="flex items-center gap-5 ml-5">
          <button className="flex-col justify-center items-center hidden md:flex" onClick={handleClick}>
            <span className={`bg-white  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-white  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </button>

          <Link href="/">
            <Image src={logo} alt="logo" className="w-12 h-12 rounded-full shadow-lg shadow-theme bg-green-200" />
          </Link>
       </nav>



        {
          isOpen ?

            <motion.div

              initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, opacity: 1 }}

              className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-theme/80  rounded-lg backdrop-blur-md py-32">
              <nav className="flex items-center flex-col justify-center">
                <Link href="#home" className='text-lg' toogle={handleClick} >Home</Link>
                <Link href="#about" className='text-lg' toogle={handleClick} >About</Link>
                <Link href="#tokenomics"  className='text-lg' toogle={handleClick} >Tokenomics</Link>
                <Link href="#socials" className='text-lg' toogle={handleClick} >Socials</Link>

                <Link href="https://t.me/anti_cabal" target="_blank" className='mt-4 border-2 border-white px-4 py-1 rounded-3xl hover:bg-white hover:text-black' toogle={handleClick} >Join Telegram</Link>
              </nav>
            </motion.div>

            : null
        }


      </div>
    </>
  )
};

export default index;