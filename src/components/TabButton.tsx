import { TabWithTabItems } from "@/lib/prisma"

type Props = {
  tabItem: TabWithTabItems
  handleClick: (tabItems: TabWithTabItems) => void
  activeTabData: TabWithTabItems
}

export const TabButton = ({ tabItem, handleClick, activeTabData }: Props) => {
  const { title } = tabItem

  return (
    <div className="tabs-button">
      <button className="flex" onClick={() => handleClick(tabItem)}>
        {title}
      </button>
      {activeTabData.title === title ? <span>Line</span> : null}
    </div>
  )
}
