import React, { MutableRefObject, ReactNode, useRef } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useInfinityScroll } from '../../lib/hooks/useInfinityScroll';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = React.memo(({ className, children, onScrollEnd }: PageProps) => {
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;

    useInfinityScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <section ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
