import Head from 'next/head'
import Blogs from '../Components/Blogs';

export default function ProjectPage() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>UFUK TAS | PROJECTS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Blogs/>
    </div>
  )
}
