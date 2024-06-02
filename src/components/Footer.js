import xIcon from "@/../public/img/social_x.png";
import telegram from "@/../public/img/social_tg.png";
import logo from "@/../public/img/banner.png";
import Link from "next/link";
import Image from "next/image";


const index = () => {
  return (
    <>
      <div className="flex flex-col gap-10 border-t-4 border-white bg-gradient-to-br from-gray-400/20 via-gray-600/20 to-black/40 rounded-t-[60px]">
        <div className="flex lg:flex-col lg:gap-10 w-full mt-40 lg:mt-2  items-center justify-center p-20 lg:p-12">
          <div className="flex flex-col w-1/3 items-start justify-start lg:items-center lg:justify-center lg:w-full">
            <h1 className="text-[80px] sm:text-[60px]">$CABAL</h1>
            <div className="flex items-start justify-start gap-10 pt-10">
              <Link href="https://x.com/anticabalCoin" target="_blank">
                <Image src={xIcon} alt="X" className="w-16 transition transition-transform duration-400 hover:scale-105" />
              </Link>
              <Link href="https://t.me/anti_cabal" target="_blank">
                <Image src={telegram} alt="Telegram" className="w-16 transition transition-transform duration-400 hover:scale-105" />
              </Link>
            </div>
          </div>

          <div className="w-[43%] lg:w-[70%] lg:items-center lg:justify-center flex items-start justify-start">
            <div>
              <p className="text-lg sm:text-base sm:text-center">
                $CABAL is more than just a cryptocurrency, it is also a way to connect with other meme lovers and make a difference in the world. Join the $CABAL movement
                today and help us make the world a more fun and inclusive place for everyone!
              </p>
            </div>
          </div>
          <div className="flex relative w-1/3 items-center justify-center lg:hidden">
            <nav className="absolute w-[450px] flex -bottom-40">
              <Image src={logo} alt="logo" className="w-full rounded-b-full" />
            </nav>
          </div>

        </div>
        <div className="flex xs:flex-col xs:gap-2 xs:pb-5 items-center justify-between pb-10 bg-transparent border-t border-gray-200/20 pt-10">
          <nav>
            <span className="font-extrabold p-6">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
          </nav>
          <nav>Designed by <a href="https://t.me/gutoshi" target="_blank" className="text-SolanaYellow">Gutoshi Co. <b className="text-SolanaBlue">💥</b></a></nav>
          <nav className="xs:hidden">.</nav>
        </div>
      </div>
    </>

  )
};

export default index;