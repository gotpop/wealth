import { useEffect, useRef, useState } from "react"

import Image from "next/image"
import { TabItem as TabItemData } from "@prisma/client"
import { useOnScreen } from "@/hooks/useOnScreen"

type Props = {
  item: TabItemData
  delay: number
}

export const TabItem = ({ item, delay }: Props) => {
  const theDelay = delay + 1
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [cachedValue, setCachedValue] = useState(item)

  useEffect(() => {
    const theProduct = sectionRef.current
    const keyframes = [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1 },
    ]
    const config = {
      duration: 400,
      delay: 50 * theDelay,
      fill: "forwards",
    } as KeyframeAnimationOptions

    if (theProduct) {
      theProduct.animate(keyframes, config)
    }
 
    setTimeout(() => {
      setCachedValue(item)
    }, 200 + (50 * theDelay))
  }, [theDelay, item])

  return (
    <section className="basis-60 shrink-0 grow p-10 bg-glow bg-no-repeat bg-[center_top_1rem] bg-white hover:scale-99 transition-transform">
      <div ref={sectionRef} className="flex flex-col items-center">
        <Image className="inline-flex mb-10" src={cachedValue.imageUrl} alt={cachedValue.imageTitle} width={cachedValue.imageWidth ? cachedValue.imageWidth : 64} height={cachedValue.imageHeight ? cachedValue.imageHeight : 64} />
        <h4 className="font-body font-semibold text-center mb-2 text-brand-grey-6 text-[20px]">{cachedValue.title}</h4>
        <p className="font-body text-center text-brand-grey-6 text-[16px]">{cachedValue.content}</p>
      </div>
    </section>
  )
}
