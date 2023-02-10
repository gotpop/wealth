import { TabWithTabItems } from "@/lib/prisma"

type Props = {
  tabItem: TabWithTabItems
  handleClick: (tabItems: TabWithTabItems) => void
}

export const TabButton = ({ tabItem, handleClick }: Props) => {
  const { title } = tabItem

  return (
    <div className="tabs-button">
      <button className="flex" onClick={() => handleClick(tabItem)}>
        {title}
      </button>
    </div>
  )
}
