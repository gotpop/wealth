import { Hero as HeroData, Intro as IntroData, Partners as PartnersData, ViewAll as ViewAllData } from "@prisma/client"
import { InferGetStaticPropsType, NextPage } from "next"
import prisma, { TabWithTabItems } from "@/lib/prisma"

import { Content } from "@/components/Content"
import Head from "next/head"
import { Intro } from "@/components/Intro"
import { Logo } from "@/components/Logo"
import { Partners } from "@/components/Partners"
import { Search } from "@/components/Search"
import { Tabs } from "@/components/Tabs"
import { ViewAll } from "@/components/ViewAll"

type Props = {
  heroData: HeroData
  partnersData: PartnersData
  introData: IntroData
  tabData: TabWithTabItems[]
  viewAllData: ViewAllData
}

const Home = ({ heroData, partnersData, introData, tabData, viewAllData }: Props) => {
// console.log('heroData, partnersData, introData, tabData, viewAllData :', heroData, partnersData, introData, tabData, viewAllData);
  return (
    <>
      <Head>
        <title>Wealth</title>
        <meta name="description" content="Wealth app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="site">
        <header className="hero">
          <Logo />
          <Content hero={heroData} />
          <Search hero={heroData} />
        </header>
        <Partners partners={partnersData} />
        <Intro intro={introData} />
        {/* <Tabs tabs={tabData} /> */}
        <ViewAll viewAll={viewAllData} />
      </div>
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const heroData = await prisma.hero.findMany()
  const partnersData = await prisma.partners.findMany()
  const introData = await prisma.intro.findMany()
  const viewAllData = await prisma.viewAll.findMany()
  const tabData = await prisma.tab.findMany({
    include: {
      tabItems: true,
    },
  })

  return {
    props: {
      heroData,
      partnersData,
      introData,
      tabData,
      viewAllData,
    },
  }
}
