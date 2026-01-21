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
        let observer: IntersectionObserver;

        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                scrollMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entire]) => {
                if (entire.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerRef.current);
        }

        return () => {
            if (observer) {
                observer.unobserve(triggerRef.current);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
};
