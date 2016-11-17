/// <reference types="react" />
import React from 'react';
import { TransferItem } from './index';
export interface TransferListProps {
    prefixCls: string;
    dataSource: TransferItem[];
    filter?: string;
    showSearch?: boolean;
    searchPlaceholder?: string;
    titleText?: string;
    style?: React.CSSProperties;
    handleFilter: (e: any) => void;
    handleSelect: (selectedItem: any, checked: boolean) => void;
    handleSelectAll: (dataSource: any[], checkAll: boolean) => void;
    handleClear: () => void;
    render?: (item: any) => any;
    body?: (props: any) => any;
    footer?: (props: any) => void;
    checkedKeys: string[];
    checkStatus?: boolean;
    position?: string;
    notFoundContent?: React.ReactNode | string;
    filterOption: (filterText: any, item: any) => boolean;
    lazy?: {};
}
export interface TransferListContext {
    antLocale?: {
        Transfer?: any;
    };
}
export default class TransferList extends React.Component<TransferListProps, any> {
    static defaultProps: {
        dataSource: never[];
        titleText: string;
        showSearch: boolean;
        render: () => void;
    };
    static contextTypes: {
        antLocale: React.Requireable<any>;
    };
    context: TransferListContext;
    timer: number;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(...args: any[]): any;
    getCheckStatus(filteredDataSource: any): string;
    handleSelect: (selectedItem: any) => void;
    handleFilter: (e: any) => void;
    handleClear: () => void;
    renderCheckbox({prefixCls, filteredDataSource, checked, checkPart, disabled, checkable}: {
        prefixCls: any;
        filteredDataSource: any;
        checked: any;
        checkPart: any;
        disabled: any;
        checkable: any;
    }): JSX.Element;
    render(): JSX.Element;
}
