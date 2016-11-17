export declare const reqAnimFrame: any;
export declare const easeInOutCubic: (t: any, b: any, c: any, d: any) => any;
export declare function getDefaultTarget(): Window | null;
export declare function getOffsetTop(element: any): number;
export declare function scrollTo(href: any, target?: typeof getDefaultTarget): void;
declare class AnchorHelper {
    private links;
    private currentAnchor;
    private _activeAnchor;
    constructor();
    addLink(link: any): void;
    getCurrentActiveAnchor(): HTMLElement | null;
    setActiveAnchor(component: any): void;
    getCurrentAnchor(bounds?: number): string;
    scrollTo(href: any, target?: typeof getDefaultTarget): void;
}
export default AnchorHelper;
