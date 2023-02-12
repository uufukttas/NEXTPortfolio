import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React from 'react'
import Router from "next/router"
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import * as ga from '../Components/ga/lib/Analytics'
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]);

  return (
    <>
      <div className='main h-screen'>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp