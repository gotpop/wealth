import { Hero } from "@prisma/client"
import { useEffect } from "react"

type Props = {
  hero: Hero[]
}

export const Content = ({ hero }: Props) => {
  const { tag, title, content } = hero[0]
  
  return (
    <article className="mb-9">
      <p className="mb-9">{tag}</p>
      <h2 className="font-heading text-5xl mb-10">{title}</h2>
      <p className="font-body">{content}</p>
    </article>
  )
}
