import { FunctionComponent, SVGAttributes } from 'react';

export interface SideBarItemType {
    path: string;
    text: string;
    Icon: FunctionComponent<SVGAttributes<SVGElement>>;
    authOnly?: boolean;
}
