import { useEffect } from 'react'
import Head from 'next/head'
import About from "../Components/About";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>UFUK TAS</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-217922925-1"></script>
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About />
      </main>
    </div>
  )
}