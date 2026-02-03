import React, { MutableRefObject, ReactNode, UIEvent, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { StateSchema } from '../../app/providers/StoreProvider';
import { getSaveScrollByPath } from '../../features/ScrollSave';
import { scrollSaveActions } from '../../features/ScrollSave/slice/ScrollSaveSlice';
import { useAppDispatch } from '../../shared/lib/hooks/useAppDispatch';
import { useInfinityScroll } from '../../shared/lib/hooks/useInfinityScroll';
import { useThrottle } from '../../shared/lib/hooks/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = React.memo(({ className, children, onScrollEnd }: PageProps) => {
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();

    const scrollPosition = useSelector((state: StateSchema) =>
        getSaveScrollByPath(state, pathname)
    );

    useInfinityScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            wrapperRef.current.scrollTop = scrollPosition;
        }
    }, [scrollPosition]);

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollSaveActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            })
        );
    }, 500);

    return (
        <section
            ref={wrapperRef}
            onScroll={onScroll}
            className={classNames(cls.page, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
