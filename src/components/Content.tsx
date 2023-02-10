import { Hero } from "@prisma/client"
import { useEffect } from "react"

type Props = {
  hero: Hero[]
}

export const Content = ({ hero }: Props) => {
  const { tag, title, content } = hero[0]
  
  return (
    <article className="content">
      <p>{tag}</p>
      <h2 className="font-heading text-5xl">{title}</h2>
      <p className="font-body">{content}</p>
    </article>
  )
}
