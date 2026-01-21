import { useCallback, useMemo, useState } from 'react';

interface IMouseEvent {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type returnArray = [boolean, IMouseEvent];

export const useHover = (): returnArray => {
    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, []);

    return useMemo(
        () => [isHovered, { onMouseEnter, onMouseLeave }],
        [isHovered, onMouseEnter, onMouseLeave]
    );
};
