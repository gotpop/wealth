import Link from "next/link"
import { ViewAll as ViewAllData } from "@prisma/client"

type Props = {
  viewAll: ViewAllData[]
}

export const ViewAll = ({ viewAll }: Props) => {
  const { title } = viewAll[0]

  return (
    <div className="flex justify-center min-w-full mt-5 mb-40">
      <Link
        href={"/"}
        className="font-body font-bold bg-primary hover:bg-secondary transition-all p-6 text-brand-grey-7"
      >
        {title}
      </Link>
    </div>
  )
}
