import { FunctionComponent, SVGAttributes } from 'react';
import AboutLogo from 'shared/assets/icons/AboutUsLogo.svg';
import ArticleLogo from 'shared/assets/icons/ArticlesLogo.svg';
import MainLogo from 'shared/assets/icons/mainLogo.svg';
import ProfileLogo from 'shared/assets/icons/profileLogo.svg';
import { RoutePath } from '../../../shared/config/routeConfig/routeConfig';

export interface SideBarItemType {
    path: string;
    text: string;
    Icon: FunctionComponent<SVGAttributes<SVGElement>>;
    authOnly?: boolean;
}

export const SideBarItemList: SideBarItemType[] = [
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
    {
        path: RoutePath.profile,
        Icon: ProfileLogo,
        text: 'Профиль',
        authOnly: true,
    },
    {
        path: RoutePath.article,
        Icon: ArticleLogo,
        text: 'Статьи',
        authOnly: true,
    },
];
