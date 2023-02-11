import { useRef, useState } from "react"

import { Tab } from "./Tab"
import { TabButton } from "./TabButton"
import { TabWithTabItems } from "@/lib/prisma"
import { useOnScreen } from "@/hooks/useOnScreen"
import { usePlayReverseAnimation } from "@/hooks/usePlayReverseAnimation"

type Props = {
  tabs: TabWithTabItems[]
}

const keyframes = {
  transform: ["scale(0.8)", "scale(1)"],
  opacity: [0.5, 1],
  easing: "ease-out",
} as PropertyIndexedKeyframes

const config = {
  duration: 300,
  delay: 0,
  fill: "both",
} as KeyframeAnimationOptions

export const Tabs = ({ tabs }: Props) => {
  const [activeTabData, setActiveTabData] = useState(tabs[0])
  const tabsAreaRef = useRef(null)
  const isOnScreen = useOnScreen(tabsAreaRef)
  usePlayReverseAnimation(tabsAreaRef, isOnScreen, keyframes, config)

  const handleclick = (tabItems: TabWithTabItems) => {
    setActiveTabData(tabItems)
  }

  return (
    <section
      ref={tabsAreaRef}
      className="flex justify-center mb-20 mr-5 ml-5"
    >
      <div className="flex flex-col items-center max-w-5xl">
        <nav className="flex flex-wrap w-full mb-10">
          {tabs.map((tab, i) => (
            <TabButton
              key={i}
              tabItem={tab}
              activeTabData={activeTabData}
              handleClick={handleclick}
            />
          ))}
        </nav>
        <Tab activeTabData={activeTabData} />
      </div>
    </section>
  )
}
