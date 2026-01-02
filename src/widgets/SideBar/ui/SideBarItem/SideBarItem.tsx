import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppLink } from '../../../../shared/ui';
import { AppLinkTheme } from '../../../../shared/ui/AppLink/AppLink';
import { SideBarItemType } from '../../model/items';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
    item?: SideBarItemType;
    isOpen: boolean;
}

export const SideBarItem = React.memo(({ item, isOpen }: SideBarItemProps) => {
    const { t } = useTranslation();

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
