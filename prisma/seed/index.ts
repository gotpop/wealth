import { hero } from './hero'
import { intro } from './intro';
import { partners } from './partners';
import prisma from '../../src/lib/prisma'
import { tabs } from './tab'
import { viewAll } from './viewAll';

async function main() {
    await prisma.hero.deleteMany({})
    await prisma.partners.deleteMany({})
    await prisma.intro.deleteMany({})
    await prisma.tab.deleteMany({})
    await prisma.tabItem.deleteMany({})
    await prisma.viewAll.deleteMany({})

    
    await prisma.hero.create({ data: hero })
    await prisma.partners.create({ data: partners })
    await prisma.intro.create({ data: intro })
    
    for (let tab of tabs) {
        await prisma.tab.create({ data: tab })
    }

    await prisma.viewAll.create({ data: viewAll })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
