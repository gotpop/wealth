import Link from "next/link"
import { ViewAll as ViewAllData } from "@prisma/client"

type Props = {
  viewAll: ViewAllData[]
}

export const ViewAll = ({ viewAll }: Props) => {
  const { title } = viewAll[0]

  return (
    <div className="flex justify-center min-w-full mt-5 mb-20">
      <Link href={"/"} className="bg-primary p-6">{title}</Link>
    </div>
  )
}
