import { TabWithTabItems } from "@/lib/prisma"
import { TabItem } from "./TabItem"

type Props = {
  activeTabData: TabWithTabItems
}

export const Tab = ({ activeTabData }: Props) => {
  return (
    <>
      <article className="flex">
        {activeTabData.tabItems.map((item, i) => (
          <TabItem key={i} item={item} />
        ))}
      </article>
    </>
  )
}
