import { RefObject, useEffect, useState } from 'react'

import { TabItem as TabItemData } from "@prisma/client"

export function useTabAnimation(tabRef: RefObject<any>, item: TabItemData, delay: number) {
    const theDelay = delay + 1
    const [cachedValue, setCachedValue] = useState(item)

    useEffect(() => {
        const theProduct = tabRef.current
        const keyframes = [
            { opacity: 1, scale: 1 },
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1 },
        ]
        const config = {
            duration: 400,
            delay: 50 * theDelay,
            fill: "forwards",
        } as KeyframeAnimationOptions

        if (theProduct) {
            theProduct.animate(keyframes, config)
        }

        setTimeout(() => {
            setCachedValue(item)
        }, 200 + (50 * theDelay))
    }, [theDelay, item, tabRef])

    return {
        imageUrl: cachedValue.imageUrl,
        imageTitle: cachedValue.imageTitle,
        imageWidth: cachedValue.imageWidth,
        imageHeight: cachedValue.imageHeight,
        title: cachedValue.title,
        content: cachedValue.content,
    }
}
