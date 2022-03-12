import { useEffect } from 'react'
import Head from 'next/head'
import About from "../Components/About";
import ReactGA from 'react-ga';

export default function Home() {

  useEffect(() => {
    ReactGA.initialize('G-RKS4T2VK5M');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const gtag = () => {
    dataLayer.push(arguments);
  }

  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>UFUK TAS</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-217922925-1"></script>
            { window.dataLayer = window.dataLayer || [] }
            { gtag('js', new Date()) }
            { gtag('config', 'UA-217922925-1') }
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About />
      </main>
    </div>
  )
}