import { TabWithTabItems } from "@/lib/prisma"

type Props = {
  tabItem: TabWithTabItems
  handleClick: (tabItems: TabWithTabItems) => void
  activeTabData: TabWithTabItems
}

export const TabButton = ({
  tabItem,
  handleClick,
  activeTabData,
}: Props) => {
  const { title } = tabItem

  return (
    <div className="basis-60 shrink grow flex flex-col items-center p-4">
      <button
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
