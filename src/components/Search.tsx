import { Hero } from "@prisma/client"

type Props = {
  hero: Hero[]
}

export const Search = ({ hero }: Props) => {
  const { input, button } = hero[0]

  return (
    <div className="flex w-full">
      <div className="flex w-full">
        <input className="font-body py-7 px-10 w-full text-brand-grey-4" type="text" placeholder={input} />
        <button className="py-7 px-10  text-white bg-black">{button}</button>
      </div>
    </div>
  )
}
