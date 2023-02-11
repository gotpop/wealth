import { RefObject, useEffect } from 'react'

export function usePlayReverseAnimation(ref: RefObject<any>, isOnScreen: boolean, keyframes: PropertyIndexedKeyframes, config: KeyframeAnimationOptions) {

    useEffect(() => {
        const playPauseAnimations = (
            ref: HTMLDivElement | null,
            isOnScreen: boolean
        ) => {
            const content = ref?.animate(keyframes, config)
    
            content?.pause()
    
            if (isOnScreen) {
                content?.play()
            } else {
                content?.reverse()
            }
        }
        if (ref.current !== null) {
            let mql = window.matchMedia('(max-width: 600px)');
            if (mql.matches) return

            playPauseAnimations(ref.current, isOnScreen)
        }
    }, [isOnScreen, keyframes, ref, config])
}
