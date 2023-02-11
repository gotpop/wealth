import { TabItem } from "./TabItem"
import { TabWithTabItems } from "@/lib/prisma"

type Props = {
  activeTabData: TabWithTabItems
}

export const Tab = ({ activeTabData }: Props) => {
  return (
    <>
      <article className="flex flex-wrap gap-[1px] bg-brand-grey-1">
        {activeTabData.tabItems.map((item, i) => (
          <TabItem key={i} delay={i} item={item} />
        ))}
      </article>
    </>
  )
}
