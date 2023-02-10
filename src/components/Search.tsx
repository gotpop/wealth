import { Hero } from "@prisma/client"

type Props = {
  hero: Hero[]
}

export const Search = ({ hero }: Props) => {
  const { input, button } = hero[0]

  return (
    <div className="search">
      <div className="search-wrap">
        <input className="p-10 min-w-fit" type="text" placeholder={input} />
        <button className="p-10 text-white bg-black">{button}</button>
      </div>
    </div>
  )
}
