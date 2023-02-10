import Link from "next/link"
import { ViewAll as ViewAllData } from "@prisma/client"

type Props = {
  viewAll: ViewAllData[]
}

export const ViewAll = ({ viewAll }: Props) => {
  const { title } = viewAll[0]

  return (
    <div className="view-wrap">
      <Link href={"/"}>{title}</Link>
    </div>
  )
}
