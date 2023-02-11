import { Hero } from "@prisma/client"

type Props = {
  hero: Hero[]
}

export const Search = ({ hero }: Props) => {
  const { input, button } = hero[0]

  return (
    <div className="flex w-full">
      <div className="flex w-full">
        <input
          className="font-body py-5 px-16 w-full text-brand-grey-4"
          type="text"
          placeholder={input}
        />
        <button className="font-body font-medium text-[13px] tracking-widest py-7 px-7 text-white bg-black">
          {button}
        </button>
      </div>
    </div>
  )
}
