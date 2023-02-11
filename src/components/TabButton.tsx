import { TabWithTabItems } from "@/lib/prisma"

type Props = {
  tabItem: TabWithTabItems
  handleClick: (tabItems: TabWithTabItems) => void
  activeTabData: TabWithTabItems,
  item: number
}

export const TabButton = ({
  tabItem,
  handleClick,
  activeTabData,
  item
}: Props) => {
  const { title } = tabItem

  return (
    <div className="basis-60 shrink grow flex flex-col items-center p-4">
      <button
        data-cy={`tab-button-${item}`}
        className="flex font-body font-bold tracking-wide mb-2 text-brand-grey-6 text-[14px]"
        onClick={() => handleClick(tabItem)}
      >
        {title}
      </button>
      {activeTabData.title === title ? (
        <span className="inline-flex min-w-[50%] border-b-4 border-secondary"></span>
      ) : null}
    </div>
  )
}
