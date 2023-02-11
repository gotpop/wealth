import { Forbes } from "./Logos/Forbes"
import { Partners as PartnersData } from "@prisma/client"
import { WealthFront } from "./Logos/WealthFront"
import { Wsj } from "./Logos/Wsj"

type Props = {
  partners: PartnersData[]
}

export const Partners = ({ partners }: Props) => {
  const { title } = partners[0]

  return (
    <aside className="flex flex-col w-full items-center mb-20">
      <h3 className="font-body font-bold text-brand-grey-5 tracking-widest text-[13px]">
        {title}
      </h3>
      <div className="flex gap-10 max-w-xl">
        <div className="max-md">
          <Forbes />
        </div>
        <div className="max-md">
          <Wsj />
        </div>
        <div className="max-md">
          <WealthFront />
        </div>
      </div>
    </aside>
  )
}
