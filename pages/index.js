import Head from 'next/head'
import About from "../Components/About";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head lang="en">
        <title>UFUK TAS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <About />
    </div>
  )
}