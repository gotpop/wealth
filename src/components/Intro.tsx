import { Intro as IntroData } from "@prisma/client"

type Props = {
  intro: IntroData[]
}

export const Intro = ({ intro }: Props) => {
  const { title, tag, content } = intro[0]

  return (
    <section className="intro">
      <h3>{tag}</h3>
      <strong className="font-heading text-5xl">{title}</strong>
      <p>{content}</p>
    </section>
  )
}
