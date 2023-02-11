import { Hero } from "@prisma/client"
import { Search } from "./Search"
import { useOnScreen } from "@/hooks/useOnScreen"
import { usePlayReverseAnimation } from "@/hooks/usePlayReverseAnimation"
import { useRef } from "react"

type Props = {
  hero: Hero[]
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

export const Content = ({ hero }: Props) => {
  const { tag, title, content } = hero[0]
  const heroRef = useRef(null)
  const isOnScreen = useOnScreen(heroRef)
  usePlayReverseAnimation(heroRef, isOnScreen, keyframes, config)

  return (
    <article className="mb-9" ref={heroRef}>
      <p className="font-body font-bold mb-9 text-brand-grey-2 tracking-widest text-[13px]">
        {tag}
      </p>
      <h2 className="font-heading text-6xl mb-8 text-brand-grey-3 text-[60px]">
        {title}
      </h2>
      <p className="inline-flex font-body text-brand-grey-2 mb-9 text-[18px]">
        {content}
      </p>
      <Search hero={hero} />
    </article>
  )
}
