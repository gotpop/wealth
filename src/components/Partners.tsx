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
    <aside className="partners-wrap">
      <h3 className="font-body font-bold">{title}</h3>
      <div className="partners">
        <div className="partner">
          <Forbes />
        </div>
        <div className="partner">
          <Wsj />
        </div>
        <div className="partner">
          <WealthFront />
        </div>
      </div>
    </aside>
  )
}
