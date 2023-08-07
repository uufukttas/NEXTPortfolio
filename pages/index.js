import Head from 'next/head'
import Main from "../Components/Main";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>UFUK TAS</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="description" content="I am Ufuk Tas. I am Frontend Developer. You can see more than inside of my portfolio page." />
        <meta name="keywords" content="HTML, CSS, JavaScript, React, Next JS" />
        <meta name="author" content="Ufuk Tas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Main />
    </div>
  )
}