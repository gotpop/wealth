import { Intro as IntroData } from "@prisma/client"

type Props = {
  intro: IntroData[]
}

export const Intro = ({ intro }: Props) => {
  const { title, tag, content } = intro[0]

  return (
    <section className=" flex flex-col items-center p-10 text-center mb-20">
      <h3 className="font-body font-bold mb-4 text-secondary tracking-widest text-[13px]">{tag}</h3>
      <strong className="inline-flex font-heading text-5xl mb-4 text-brand-grey-6 text-[45px]">{title}</strong>
      <p className="font-body max-w-prose text-center text-brand-grey-6 text-[18px]">{content}</p>
    </section>
  )
}
