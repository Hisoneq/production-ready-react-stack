import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import AboutLogo from 'shared/assets/icons/AboutUsLogo.svg';
import ArticleLogo from 'shared/assets/icons/ArticlesLogo.svg';
import MainLogo from 'shared/assets/icons/mainLogo.svg';
import ProfileLogo from 'shared/assets/icons/profileLogo.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import type { SideBarItemType } from '../types/items';

export const getSidebarItems = createSelector(getUserAuthData, (userdata) => {
    const sideBarItemList: SideBarItemType[] = [
        {
            path: RoutePath.main,
            Icon: MainLogo,
            text: 'Главная',
        },
        {
            path: RoutePath.about,
            Icon: AboutLogo,
            text: 'О сайте',
        },
    ];

    if (userdata) {
        sideBarItemList.push(
            {
                path: RoutePath.profile + userdata.id,
                Icon: ProfileLogo,
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: RoutePath.article,
                Icon: ArticleLogo,
                text: 'Статьи',
                authOnly: true,
            }
        );
    }

    return sideBarItemList;
});
