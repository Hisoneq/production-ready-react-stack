import React from 'react';
import ListIcon from 'shared/assets/icons/list.svg';
import TileIcon from 'shared/assets/icons/tile.svg';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from '../../model/types/article';
import cls from './ArtilceViewSelectors.module.scss';

interface ArtilceViewSelectorsProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TileIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArtilceViewSelectors = React.memo(
    ({ className, view, onViewClick }: ArtilceViewSelectorsProps) => {
        const handleClick = (newView: ArticleView) => () => {
            onViewClick?.(newView);
        };

        return (
            <div className={classNames(cls.artilceViewSelectors, {}, [className])}>
                {viewTypes.map((viewType, idx) => (
                    <Button
                        key={idx}
                        theme={ButtonTheme.CLEAR}
                        onClick={handleClick(viewType.view)}
                    >
                        <Icon
                            Svg={viewType.icon}
                            className={classNames(
                                '',
                                { [cls.notSelected]: viewType.view !== view },
                                []
                            )}
                        />
                    </Button>
                ))}
            </div>
        );
    }
);
