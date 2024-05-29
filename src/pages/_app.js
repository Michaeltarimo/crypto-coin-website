import Head from 'next/head';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Jersey+15&family=Madimi+One&family=Shantell+Sans:ital,wght@0,300;0,700;1,300;1,700&display=swap" rel="stylesheet" />
      </Head>
      <main className="font-jersey bg-gradient-to-br from-SolanaGreen via-SolanaBlack to-SolanaBlue text-white w-full min-h-screen" style={{ fontFamily: 'Madimi One, sans-serif' }}>
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
