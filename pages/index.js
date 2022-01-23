import Head from 'next/head'
import About from "../Components/About";

export default function Home() {
  window.dataLayer = window.dataLayer || []

  const gtag = () => {
    window.dataLayer.push(arguments)
  }

  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>UFUK TAS</title>
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RKS4T2VK5M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {gtag('js', new Date()) && gtag('config', 'G-RKS4T2VK5M')}
        </Script>
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About/>
      </main>
    </div>
  )
}