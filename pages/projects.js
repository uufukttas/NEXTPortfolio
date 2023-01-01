import Head from 'next/head'
import Projects from '../Components/Projects';

export default function ProjectPage() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>UFUK TAS | PROJECTS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Projects/>
    </div>
  )
}
