import { Hero } from "@prisma/client"

type Props = {
  hero: Hero[]
}

export const Search = ({ hero }: Props) => {
  const { input, button } = hero[0]

  return (
    <div className="search">
      <div className="search-wrap">
        <input type="text" placeholder={input} />
        <button>{button}</button>
      </div>
    </div>
  )
}
