import Head from "next/head";
import react from "react";
import banner from "@/../public/img/banner.png";
import Image from "next/image";
import { LinkArrow } from "@/components/Icons";
import purribal from "@/../public/img/purribal.jpg";
import bitsol from "@/../public/img/bitsol.jpg";
import capitain from "@/../public/img/capitain.jpg";
import monoc from "@/../public/img/monoc.jpg";
import shebal from "@/../public/img/shebal.jpg";
import about from "@/../public/img/demo3.png";
import base_picture from "@/../public/img/how_to.png";
import solanec from "@/../public/img/solanec.jpg";
import xIcon from "@/../public/img/social_x.png";
import telegram from "@/../public/img/social_tg.png";
import panthalol from "@/../public/img/panthalol.jpg";
import { toast, Toaster } from 'react-hot-toast';
import { useState } from 'react';
import Link from "next/link";
import { BeakerIcon, ClipboardDocumentCheckIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import AnimatedText from "@/components/AnimatedText";


const Index = () => {
  const tokenAddress = 'hsdkskadfjkasjdakld923ksdajf23ksdfnasmc';

  const handleCopy = () => {
    navigator.clipboard.writeText(tokenAddress);
    toast.success('Copied successfully');
  };


  return (
    <>
      <Head>

        <title>Anti cabal | The Sputin monk on Solana</title>
        <meta name='description' content='Who give orders in ranks? ' />
      </Head>
      <main className="flex flex-col items-center justify-center px-20 md:px-5 pt-20 md:pt-10">
        <div id="home" className="flex h-screen flex- md:flex-col w-full items-center justify-between gap-3">
          <div className="left w-1/2 md:w-full md:items-center md:justify-center items-start justify-start flex flex-col">
            <div className="text-[70px] xl:text-[50px] sm:text-[30px]"><AnimatedText>Welcome to <b className="text-SolanaGreen">☠︎</b></AnimatedText></div>
            <div className="text-[120px] xl:text-[80px] sm:text-[60px] font-extrabold text-SolanaBlue transition transition-transform duration-300 hover:scale-105 hover:cursor-pointer"><AnimatedText>Anticabal</AnimatedText></div>
            <div className="pt-10">
              <div className="text-xl sm:text-center xs:text-lg"><AnimatedText>Meet <b className="text-SolanaYellow">Purribal</b>: The world&apos;s most anti cabal cat. Gathered her squard to lead the solana memes</AnimatedText></div>
            </div>
            <div className="pt-20 lg:pt-10 flex xs:flex-col xs:gap-5 gap-10">
              <button className="bg-white hover:bg-gray-500 hover:duration-500 flex text-black px-2 py-3 sm:py-1 rounded-3xl gap-4">
                <h1 className="text-2xl lg:text-xl sm:text-base">Buy on Raydium</h1> <LinkArrow className="w-[30px] h-auto" />
              </button>
              <button className="border-2 border-white px-2 text-2xl lg:text-xl sm:text-base rounded-3xl hover:bg-gray-500 hover:duration-500 hover:text-dark">
                Learn More
              </button>

            </div>
          </div>
          <div className="right w-1/2 md:w-full  pt-10 md:pt-4 sm:pt-0 flex items-start justify-start">
            <div className="">
              <Image src={banner} alt="banner" className="w-[850px] md:w-[600px] rounded-b-full" />
            </div>
          </div>
        </div>


        <div className="flex flex-row items-center justify- lg:hidden overflow-hidden pt-32">
          <div className="flex animate-scroll gap-10 text-sm text-SolanaGreen">
            <div className="flex w-[200px] flex-col gap-4 items-start justify-start">
              <Image src={purribal} alt="mana" className="h-auto rounded-3xl" />
              <div className=" bottom-2 left-2">
                <h1>Purribal: Head of squad</h1>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[200px] items-start justify-start">
              <Image src={bitsol} alt="bitsol" className=" h-auto rounded-3xl" />
              <div className=" bottom-2 left-2">
                <h1>Bitsol: Maniac squasher</h1>
              </div>
            </div>
            {/**<div className="flex relative w-[300px] flex-col gap-4 items-start justify-start">
              <Image src={capitain} alt="capitain" className="w-[300px] h-auto rounded-3xl" />
              <div className="flex w-full absolute bottom-2 left-2">
                <h1>Capitain: Marine general</h1>
              </div>
            </div> */}
            <div className="flex  w-[200px] flex-col gap-4 items-start justify-start">
              <Image src={monoc} alt="monoc" className=" h-auto rounded-3xl" />
              <div className="flex w-full  bottom-2 left-2">
                <h1>Monoc: Desert sniper</h1>
              </div>
            </div>
            <div className="flex  w-[200px] flex-col gap-4 items-start justify-start">
              <Image src={shebal} alt="shebal" className=" h-auto rounded-3xl" />
              <div className="flex w-full bottom-2 left-2">
                <h1>Shebal: Queen of the north</h1>
              </div>
            </div>
            {/**<div className="flex relative w-[300px] flex-col gap-4 items-start justify-start">
              <Image src={solanec} alt="solanec" className="w-[300px] h-auto rounded-3xl" />
              <div className="flex w-full absolute bottom-2 left-2">
                <h1>Solanec: The Russian general</h1>
              </div>
            </div> */}
            <div className="flex  w-[200px] flex-col gap-4 items-start justify-start">
              <Image src={panthalol} alt="panthalol" className=" h-auto rounded-3xl" />
              <div className="flex w-full">
                <h1>Panthalol: King of the South</h1>
              </div>
            </div>

          </div>
        </div>



        <div id="about" className="w-full h-screen xs:gap-10 flex md:flex-col md:pt-30 items-center justify-center pt-32 lg:pt-5 gap-4">
          <div className="w-1/2 flex items-center justify- xs:order-last">
            <Image src={about} alt="image" className="w-[80%]" />
          </div>
          <div className="w-1/2 flex flex-col items-start justify-start md:items-center md:justify-center md:w-full">
            <div className="text-[70px]  lg:text-[50px] md:text-center"><>About $CABAL</></div>
            <div className="flex items-start justify-start pt-10 md:items-center md:justify-center">
              <>
                <div className="text-xl lg:text-base md:text-center">
                  Introducing $Cabal, the latest meme token on the Solana blockchain, designed to capture the spirit of camaraderie and
                  rebellion. $Cabal honors the vibrant crypto community that thrives on innovation and disruption. With Solana’s cutting-edge technology, $Cabal aims to bring a fresh narrative to the meme token space, one that is both engaging and impactful.

                </div>
              </>
            </div>
            <div className="flex items-start justify-start pt-10">
              <p className="text-xl lg:text-base md:text-center">
                <>
                  $Cabal is more than just a meme token; it's a symbol of collective empowerment. We believe in Solana’s potential to revolutionize digital assets, making them accessible to everyone. $Cabal's mission is to foster unity
                  and creativity within the crypto community. Join us in celebrating the fun and irreverent side of cryptocurrency while contributing meaningfully to the Solana ecosystem.
                </>
              </p>
            </div>
          </div>

        </div>


        <div className="flex items-center justify-center pt-32 lg:pt-5">
          <div className="flex sm:flex-col sm:items-center sm:justify-center gap-10 items-start justify-start w-2/3 sm:w-[90%] border-4 p-10 sm:p-4 border-white rounded-3xl">
            <h1 className="text-[60px]"><>✍</></h1>
            <nav className="flex flex-col items-start justify-start">
              <div className="flex items-start justify-start pt-2">
                <>
                  <p className="text-lg lg:text-base sm:text-sm">

                    With $Cabal, we have created a revolutionary meme token on the Solana blockchain designed for simplicity, security, and accessibility.

                  </p>
                </>
              </div>
              <div className="flex items-start justify-start pt-10">
                <>
                  <p className="text-lg lg:text-base sm:text-sm">

                    Our goal is to provide a seamless crypto experience for everyone. Whether you're an experienced trader or a curious beginner, $Cabal is here to meet your needs and help you explore the world of digital currencies. Join us in celebrating
                    the fun and dynamic side of cryptocurrency while contributing to the vibrant Solana ecosystem.

                  </p>
                </>
              </div>
            </nav>
          </div>
        </div>


        <div className="w-full flex items-center justify-center pt-32 xs:gap-10 md:flex-col md:pt-30 lg:pt-5">
          <div className="w-1/2 flex items-center justify-center md:pt-10">
            <Image src={base_picture} alt="image" className="" />
          </div>
          <div className="w-1/2 flex flex-col items-start justify-start">
            <h1 className="text-[70px] lg:text-[50px] md:text-center"><>How to buy $CABAL</></h1>
            <div className="flex items-start justify-start pt-10">
              <>
                <p className="text-xl lg:text-base md:text-center">

                  To buy $CABAL, download phantom wallet, purchase $SOL from an exchange or bridge $SOL and send it to your Phantom wallet then buy $CABAL on Jupiter or Raydium. You will also be able to buy $CABAL on a wide variety
                  of centralised exchanges, including Crypto.com, Kraken, Kucoin, Bybit, Binance and others in the later future.

                </p>
              </>
            </div>
            <Link href="https://phantom.app/" target="_blank" className="pt-10">
              <button className="flex gap-4 border border-white px-3 py-3 sm:py-1 rounded-3xl hover:bg-white hover:text-black">
                <h1 className="text-xl lg:text-base">Get Phantom</h1> <LinkArrow className="w-[30px] sm:w-[20px]" />
              </button>
            </Link>
          </div>

        </div>


        <div className="w-full flex items-center justify-center pt-32 xs:gap-10 md:flex-col md:pt-30 lg:pt-10">
          <div className="w-1/2 flex items-center justify-center md:pt-10">
            <Image alt="image" className="" />
          </div>
          <div className="w-1/2 flex flex-col items-start justify-start order-first">
            <h1 className="text-[70px] lg:text-[50px] md:text-center"><>Or buy using Jupiter:</></h1>
            <div className="flex items-start justify-start pt-10">
              <>
                <p className="text-xl lg:text-base md:text-center">
                  Then simply swap $SOL to $CABAL on Jupiter.
                </p>
              </>
            </div>
          </div>

        </div>

        <div className="w-full flex items-center justify-center pt-32 xs:gap-10 md:flex-col md:pt-30 lg:pt-10">
          <div className="w-1/2 flex items-center justify-center md:pt-10">
            <Image alt="image" className="" />
          </div>
          <div className="w-1/2 flex flex-col items-start justify-start md:order-first">
            <h1 className="text-[70px] lg:text-[50px] md:text-center"><>Or buy using Mayan:</></h1>
            <div className="flex items-start justify-start pt-10">
              <>
                <p className="text-xl lg:text-base md:text-center text-black sm:text-white">
                Swap seamlessly from ETH, BSC, ARB, AVAX or Solana chain to buy $CABAL. Low fees, cross chain.
                </p>
              </>
            </div>
          </div>

        </div>


        

        <div className="w-full z-0 pt- xl:pt-10 flex flex-col items-start justify-start">
          <h1 className="text-[70px] xl:text-[50px] xs:text-[40px]"><>Features <b className="text-SolanaYellow">🔥</b></></h1>
          <div className=" lg:flex-col flex items-center justify-center pt-20 gap-10">



            <div className="relative flex flex-col items-start w-1/3 lg:w-[80%] h-[650px] lg:h-[300px] sm:h-[400px] xl:h-[400px] xs:h-[450px] bg-gray-200/20 justify-start border-4 border-white rounded-3xl p-10 xs:p-5">
              <BeakerIcon className="w-14 xl:w-8" />
              <h1 className="text-[40px] xl:text-[20px] pt-2"><>$Cabal Dex Bot</></h1>
              <div className="flex items-start justify-start pt-2">
                <>
                  <p className="text-lg xl:text-sm">
                    Introducing Solana's first public DEX Bot on Telegram, $Cabal DEX Bot. This innovative tool promotes cross-pollination within the crypto community and
                    offers free exposure through "CABAL Trending".  Revenue
                    generated from this service will be transparently allocated to the Treat Jar (Treasury), supporting the growth and sustainability of $Cabal.
                  </p>
                </>
              </div>
              <div className="absolute bottom-10 xl:bottom-2.5 lg:bottom-5">
                <button className="flex gap-5 border-2 border-white p-3 xl:p-1 rounded-3xl hover:bg-white hover:text-black">
                  <h1 className="text-xl xl:text-lg">Coming Soon...</h1> <LinkArrow className="w-[30px] xl:w-[20px]" />
                </button>
              </div>

            </div>

            <div className="relative flex flex-col items-start w-1/3 lg:w-[80%] h-[650px] lg:h-[300px] xl:h-[400px] sm:h-[400px] xs:h-[450px] bg-gray-200/20 justify-start border-4 border-white rounded-3xl p-10 xs:p-5">
              <ShieldCheckIcon className="w-14 xl:w-8" />
              <h1 className="text-[40px] xl:text-[20px] pt-2"><>$Cabal Cube</></h1>
              <div className="flex items-start justify-start pt-2">
                <>
                  <p className="text-lg xl:text-sm">
                    Introducing the $Cabal Incubator, Solana's first platform dedicated to incubating Web3 projects and raising funding rounds. The incubator fosters growth and innovation,
                    helping new projects gain exposure and secure the resources they need. Join us in supporting
                    the next wave of decentralized technologies and driving forward the future of Web3.
                  </p>
                </>
              </div>
              <div className="absolute bottom-10 xl:bottom-2.5 lg:bottom-5">
                <button className="flex gap-5 border-2 border-white p-3 xl:p-1 rounded-3xl hover:bg-white hover:text-black">
                  <h1 className="text-xl xl:text-lg">Coming Soon...</h1> <LinkArrow className="w-[30px] xl:w-[20px]" />
                </button>
              </div>

            </div>

            <div className="relative flex flex-col items-start w-1/3 lg:w-[80%] h-[650px] lg:h-[300px] xl:h-[400px] sm:h-[400px] bg-gray-800/20 justify-start border-4 border-white rounded-3xl p-10 xs:p-5">
              <CogIcon className="w-14 xl:w-8" />
              <h1 className="text-[40px] xl:text-[20px] pt-2"><>$Cabal Future</></h1>
              <div className="flex items-start justify-start pt-2">
                <>
                  <p className="text-lg xl:text-sm">
                    $CABAL is set to transform the Solana ecosystem, delivering essential utilities for the evolving needs of users. Our commitment ensures a dynamic
                    contribution to Solana's long-term growth, serving hundreds of thousands of users.
                  </p>
                </>
              </div>
              <div className="absolute bottom-10 xl:bottom-2.5 lg:bottom-5">
                <button className="flex gap-5 border-2 border-white p-3 xl:p-1 rounded-3xl hover:bg-white hover:text-black">
                  <h1 className="text-xl xl:text-lg">Coming Soon...</h1> <LinkArrow className="w-[30px] xl:w-[20px]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="tokenomics" className="w-full h-screen pt-32 flex flex-col items-start justify-start">
          <h1 className="text-[70px] xl:text-[50px] xs:text-[40px]"><>Tokenomics  ⏳ ✨ 💥 </></h1>
          <div className="flex lg:flex-col w-full gap-10 items-center justify-between pt-16">
            <nav className="flex sm:flex-col items-center justify-between w-1/3 lg:w-full border-2 border-white rounded-3xl p-6">
              <h1 className="text-3xl xs:text-xl font-extrabold">Symbol</h1>
              <h1 className="text-2xl xs:text-lg">$CABAL</h1>
            </nav>

            <nav className="flex sm:flex-col items-center justify-between w-1/3 lg:w-full border-2 border-white rounded-3xl p-6">
              <h1 className="text-3xl xs:text-xl font-extrabold">Tax</h1>
              <h1 className="text-2xl xs:text-lg">0/0</h1>
            </nav>

            <nav className="flex sm:flex-col items-center justify-between w-1/3 lg:w-full border-2 border-white rounded-3xl p-6">
              <h1 className="text-3xl xs:text-xl font-extrabold">LP</h1>
              <h1 className="text-2xl xs:text-lg">Locked Forever</h1>
            </nav>
          </div>

          <div className="flex w-full items-center justify-center pt-20">
            <Toaster />
            <nav className="flex sm:flex-col items-center justify-between w-full border-2 border-white rounded-3xl p-6">
              <h1 className="text-3xl md:text-xl xs:text-lg font-extrabold">Token Address</h1>
              <div className="flex items-center gap-10 xs:gap-1">
                <h1 className="text-2xl md:text-lg xs:text-sm">{tokenAddress}</h1>
                <ClipboardDocumentCheckIcon
                  onClick={handleCopy}
                  className="w-10 xs:w-5 cursor-pointer transition-transform duration-300 hover:scale-110"
                />
              </div>
            </nav>
          </div>

        </div>

        <div id="socials" className="flex h-screen items-center justify-between w-full pt-32 xl:pt-5 xs:gap-10 md:flex-col md:pt-30 lg:pt-5">
          <div className="w-1/2 md:hidden flex items-start justify-start">
            <h1 className="text-[120px] ">જ⁀➴ ⋆.˚ ☏ ˚.⋆</h1>
          </div>
          <div className="flex flex-col w-[40%] md:w-full sm:pt-60 items-start justify-center md:items-center md:pt-20">
            <h1 className="text-[60px] font-extrabold text-black lg:text-[50px] sm:text-[30px] md:text-center md:text-white">Follow Cabal on social media</h1>
            <div className="flex items-start justify-start gap-10 pt-10">
              <Link href="https://x.com/anti_cabal" target="_blank">
                <Image src={xIcon} alt="X" className="w-16 transition transition-transform duration-400 hover:scale-105" />
              </Link>
              <Link href="https://t.me/anti_cabal" target="_blank">
                <Image src={telegram} alt="Telegram" className="w-16 transition transition-transform duration-400 hover:scale-105" />
              </Link>
            </div>
          </div>
        </div>




      </main>
    </>
  )
};

export default Index;