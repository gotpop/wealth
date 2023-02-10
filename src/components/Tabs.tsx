import { useState } from "react"
import { TabButton } from "./TabButton"
import { TabWithTabItems } from "@/lib/prisma"
import { Tab } from "./Tab"

type Props = {
  tabs: TabWithTabItems[]
}

export const Tabs = ({ tabs }: Props) => {
  const [activeTabData, setActiveTabData] = useState(tabs[0])

  const handleclick = (tabItems: TabWithTabItems) => {
    setActiveTabData(tabItems)
  }

  return (
    <section className="tabs">
      <nav className="flex gap-5 justify-around mb-10">
        {tabs.map((tab, i) => (
          <TabButton key={i} tabItem={tab} activeTabData={activeTabData} handleClick={handleclick} />
        ))}
      </nav>
      <Tab activeTabData={activeTabData} />
    </section>
  )
}
