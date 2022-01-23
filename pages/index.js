import Head from 'next/head'
import About from "../Components/About";
import ReactGA from 'react-ga';
import { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
      ReactGA.initialize('G-RKS4T2VK5M');
      ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>UFUK TAS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About/>
      </main>
    </div>
  )
}