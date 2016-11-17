/// <reference types="react" />
import React from 'react';
import AnchorHelper from './anchorHelper';
export interface AnchorLinkProps {
    href: string;
    onClick: (href: string) => void;
    active?: boolean;
    prefixCls?: string;
    children?: any;
    title?: Element;
    bounds: number;
    target?: () => HTMLElement | Window;
    affix?: boolean;
}
export default class AnchorLink extends React.Component<AnchorLinkProps, any> {
    static contextTypes: {
        anchorHelper: React.Requireable<any>;
    };
    static childContextTypes: {
        anchorHelper: React.Requireable<any>;
    };
    static defaultProps: {
        href: string;
        prefixCls: string;
    };
    context: {
        anchorHelper: AnchorHelper;
    };
    constructor(props: any, context: any);
    getChildContext(): {
        anchorHelper: AnchorHelper;
    };
    renderAnchorLink: (child: any) => any;
    scrollTo: (e: any) => void;
    render(): JSX.Element;
}
