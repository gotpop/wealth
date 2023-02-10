import { TabItem as TabItemData } from "@prisma/client"
import Image from "next/image"

type Props = {
  item: TabItemData
}

export const TabItem = ({ item }: Props) => {
  return (
    <section className="flex flex-col justify-center items-center p-5">
      <Image src={item.imageUrl} alt={item.imageTitle} width={item.imageWidth ? item.imageWidth : 64} height={item.imageHeight ? item.imageHeight : 64} />
      <h4>{item.title}</h4>
      <p>{item.content}</p>
    </section>
  )
}
