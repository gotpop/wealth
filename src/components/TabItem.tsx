import { useEffect, useRef, useState } from "react"

import Image from "next/image"
import { TabItem as TabItemData } from "@prisma/client"
import { useTabAnimation } from "@/hooks/useTabAnimation"

type Props = {
  item: TabItemData
  delay: number
}

export const TabItem = ({ item, delay }: Props) => {
  const tabRef = useRef<HTMLDivElement | null>(null)
  const { imageUrl, imageTitle, imageWidth, imageHeight, title, content } = useTabAnimation(tabRef, item, delay)

  return (
    <section className="basis-60 shrink-0 grow p-10 bg-glow bg-no-repeat bg-[center_top_1rem] bg-white hover:scale-99 transition-transform">
      <div ref={tabRef} className="flex flex-col items-center">
        <Image className="inline-flex mb-10" src={imageUrl} alt={imageTitle} width={imageWidth ? imageWidth : 64} height={imageHeight ? imageHeight : 64} />
        <h4 className="font-body font-semibold text-center mb-2 text-brand-grey-6 text-[20px]">{title}</h4>
        <p className="font-body text-center text-brand-grey-6 text-[16px]">{content}</p>
      </div>
    </section>
  )
}
