import Head from 'next/head'
import About from "../Components/About";
import Projects from '../Components/Projects';

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>UFUK TAS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <About />
    </div>
  )
}