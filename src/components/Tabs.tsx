import { Tab } from "./Tab"
import { TabButton } from "./TabButton"
import { TabWithTabItems } from "@/lib/prisma"
import { useState } from "react"

type Props = {
  tabs: TabWithTabItems[]
}

export const Tabs = ({ tabs }: Props) => {
  const [activeTabData, setActiveTabData] = useState(tabs[0])

  const handleclick = (tabItems: TabWithTabItems) => {
    setActiveTabData(tabItems)
  }

  return (
    <section className="flex justify-center mb-20 mr-5 ml-5">
      <div className="flex flex-col items-center max-w-5xl">
        <nav className="flex flex-wrap w-full mb-10">
          {tabs.map((tab, i) => (
            <TabButton key={i} tabItem={tab} activeTabData={activeTabData} handleClick={handleclick} />
          ))}
        </nav>
        <Tab activeTabData={activeTabData} />
      </div>
    </section>
  )
}
