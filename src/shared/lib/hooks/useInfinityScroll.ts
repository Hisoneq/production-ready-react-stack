import { MutableRefObject, useEffect } from 'react';

export interface UseInfinityScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfinityScroll = ({
    callback,
    triggerRef,
    wrapperRef,
}: UseInfinityScrollOptions) => {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        if (callback && triggerElement && wrapperElement) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry?.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                observer.unobserve(triggerElement);
                observer.disconnect();
            }
        };
    }, [triggerRef, wrapperRef, callback]);
};
