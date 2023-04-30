import HeadPage from '@/components/HeadPage/HeadPage'
import HeroBanner from '@/components/HeroBanner/HeroBanner'
import Layout from '@/components/Layout/Layout'
import MyProjects from '@/components/pages/MyProjects'
import SkillsSection from '@/components/pages/SkillsSection'
import { Inter } from 'next/font/google'
import { Fragment } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const marginDivider = 'my-28';
  return (
    <Fragment>
      <HeadPage>
        <title>PP | Inicio</title>
      </HeadPage>
      <Layout>
        <section>
          <HeroBanner />
        </section>
        <section className={`${marginDivider}`}>
          <SkillsSection/>
        </section>
        <section className={`${marginDivider}`}>
          <MyProjects/>
        </section>
      </Layout>
    </Fragment>
  )
}
