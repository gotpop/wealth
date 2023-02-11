import { Hero } from "@prisma/client"
import { Search } from "./Search"
import { useEffect } from "react"
import { useOnScreen } from "@/hooks/useOnScreen"
import { useRef } from "react"

type Props = {
  hero: Hero[]
}

const contentKeyframes = {
  transform: ['scale(0.8)', 'scale(1)'],
  opacity: [.5, 1],
  easing: 'ease-out'
}

const imageKeyframes = {
  transform: ['translatex(5%)', 'translatex(0%)'],
  opacity: [.5, 1],
  easing: 'ease-out'
}

const timing = {
  duration: 300,
  delay: 0,
  fill: 'both'
} as KeyframeAnimationOptions


export const panelAnimations = (
  sectionRef: HTMLDivElement | null,
  isOnScreen: boolean
) => {
  const content = sectionRef?.animate(contentKeyframes, timing)

  content?.pause()

  if (isOnScreen) {
      content?.play()
  } else {
      content?.reverse()
  }
}

export const Content = ({ hero }: Props) => {
  const { tag, title, content } = hero[0]
  
  const sectionRef = useRef(null)
  const isOnScreen = useOnScreen(sectionRef)

  useEffect(() => {
    panelAnimations(sectionRef.current, isOnScreen)
  }, [isOnScreen])
  
  return (
    <article className="mb-9" ref={sectionRef}>
      <p className="font-body font-bold mb-9 text-brand-grey-2 tracking-widest text-[13px]">{tag}</p>
      <h2 className="font-heading text-6xl mb-10 text-brand-grey-3 text-[60px]">{title}</h2>
      <p className="inline-flex font-body text-brand-grey-2 mb-9 text-[18px]">{content}</p>
      <Search hero={hero} />
    </article>
  )
}
