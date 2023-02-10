import { careers, personalFinance, startUps, trending } from "./tabItems";

export const tabs = [
    {
        name: 'PERSONALFINANCE',
        title: 'PERSONAL FINANCE',
        tabItems: {
            create: personalFinance
        }
    },
    {
        name: 'CAREERS',
        title: 'CAREERS',
        tabItems: {
            create: careers
        }
    },
    {
        name: 'STARTUPS',
        title: 'START-UPS',
        tabItems: {
            create: startUps
        }
    },
    {
        name: 'TRENDING',
        title: 'TRENDING',
        tabItems: {
            create: trending
        }
    }
]
