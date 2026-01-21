import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { getUserAuthData } from '../../../../entities/User';
import { AppLink } from '../../../../shared/ui';
import { AppLinkTheme } from '../../../../shared/ui/AppLink/AppLink';
import type { SideBarItemType } from '../../model/types/items';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
    item?: SideBarItemType;
    isOpen: boolean;
}

export const SideBarItem = React.memo(({ item, isOpen }: SideBarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item?.authOnly && !isAuth) {
        return null;
    }

    if (!item) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY}
            to={item.path}
            className={classNames(cls.item, { [cls.isOpen]: isOpen }, [])}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
