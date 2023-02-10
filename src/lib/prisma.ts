import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const TabWithTabItems = Prisma.validator<Prisma.TabArgs>()({
    include: { tabItems: true }
})

export type TabWithTabItems = Prisma.TabGetPayload<typeof TabWithTabItems>

export default prisma