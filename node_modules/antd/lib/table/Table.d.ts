/// <reference types="react" />
import React from 'react';
import { PaginationProps } from '../pagination';
import { Store } from './createStore';
export interface TableRowSelection<T> {
    type?: 'checkbox' | 'radio';
    selectedRowKeys?: string[];
    onChange?: (selectedRowKeys: string[], selectedRows: Object[]) => any;
    getCheckboxProps?: (record: T) => Object;
    onSelect?: (record: T, selected: boolean, selectedRows: Object[]) => any;
    onSelectAll?: (selected: boolean, selectedRows: Object[], changeRows: Object[]) => any;
}
export interface TableColumnConfig<T> {
    title?: React.ReactNode;
    key?: string;
    dataIndex?: string;
    render?: (text: any, record: T, index: number) => React.ReactNode;
    filters?: {
        text: string;
        value: string;
    }[];
    onFilter?: (value: any, record: T) => boolean;
    filterMultiple?: boolean;
    filterDropdown?: React.ReactNode;
    sorter?: boolean | ((a: any, b: any) => number);
    colSpan?: number;
    width?: string | number;
    className?: string;
    fixed?: boolean | ('left' | 'right');
    filteredValue?: any[];
    sortOrder?: boolean | ('ascend' | 'descend');
}
export interface TableProps<T> {
    prefixCls?: string;
    dropdownPrefixCls?: string;
    rowSelection?: TableRowSelection<T>;
    pagination?: PaginationProps | boolean;
    size?: 'default' | 'small';
    dataSource?: T[];
    columns: TableColumnConfig<T>[];
    rowKey?: string | ((record: T, index: number) => string);
    rowClassName?: (record: T, index: number) => string;
    expandedRowRender?: any;
    defaultExpandedRowKeys?: string[];
    expandedRowKeys?: string[];
    expandIconAsCell?: boolean;
    expandIconColumnIndex?: number;
    onChange?: (pagination: PaginationProps | boolean, filters: string[], sorter: Object) => any;
    loading?: boolean;
    locale?: Object;
    indentSize?: number;
    onRowClick?: (record: T, index: number) => any;
    useFixedHeader?: boolean;
    bordered?: boolean;
    showHeader?: boolean;
    footer?: (currentPageData: Object[]) => React.ReactNode;
    title?: (currentPageData: Object[]) => React.ReactNode;
    scroll?: {
        x?: boolean | number;
        y?: boolean | number;
    };
    childrenColumnName?: string;
    bodyStyle?: React.CSSProperties;
    className?: string;
}
export interface TableContext {
    antLocale?: {
        Table?: any;
    };
}
export default class Table<T> extends React.Component<TableProps<T>, any> {
    static propTypes: {
        dataSource: React.Requireable<any>;
        columns: React.Validator<any>;
        prefixCls: React.Requireable<any>;
        useFixedHeader: React.Requireable<any>;
        rowSelection: React.Requireable<any>;
        className: React.Requireable<any>;
        size: React.Requireable<any>;
        loading: React.Requireable<any>;
        bordered: React.Requireable<any>;
        onChange: React.Requireable<any>;
        locale: React.Requireable<any>;
        dropdownPrefixCls: React.Requireable<any>;
    };
    static defaultProps: {
        dataSource: never[];
        prefixCls: string;
        useFixedHeader: boolean;
        rowSelection: null;
        className: string;
        size: string;
        loading: boolean;
        bordered: boolean;
        indentSize: number;
        locale: {};
        rowKey: string;
    };
    static contextTypes: {
        antLocale: React.Requireable<any>;
    };
    context: TableContext;
    CheckboxPropsCache: Object;
    store: Store;
    constructor(props: any);
    getCheckboxPropsByItem: (item: any) => any;
    getDefaultSelection(): string[];
    getLocale(): any;
    componentWillReceiveProps(nextProps: any): void;
    setSelectedRowKeys(selectedRowKeys: any, {selectWay, record, checked, changeRowKeys}: any): void;
    hasPagination(): boolean;
    isFiltersChanged(filters: any): boolean;
    getSortOrderColumns(columns?: any): any;
    getFilteredValueColumns(columns?: any): any;
    getFiltersFromColumns(columns?: any): {};
    getSortStateFromColumns(columns?: any): {
        sortColumn: any;
        sortOrder: any;
    };
    getSorterFn(): ((a: any, b: any) => any) | undefined;
    toggleSortOrder(order: any, column: any): void;
    handleFilter: (column: any, nextFilters: any) => void;
    handleSelect: (record: any, rowIndex: any, e: any) => void;
    handleRadioSelect: (record: any, rowIndex: any, e: any) => void;
    handleSelectAllRow: (e: any) => void;
    handlePageChange: (current: any) => void;
    renderSelectionBox: (type: any) => (_: any, record: any, index: any) => JSX.Element;
    getRecordKey: (record: any, index?: any) => string;
    renderRowSelection(): TableColumnConfig<T>[];
    getColumnKey(column: any, index?: any): any;
    getMaxCurrent(total: any): any;
    isSortColumn(column: any): boolean;
    renderColumnsDropdown(columns: any): any[];
    handleShowSizeChange: (current: any, pageSize: any) => void;
    renderPagination(): JSX.Element | null;
    prepareParamsArguments(state: any): [any, string[], Object];
    findColumn(myKey: any): TableColumnConfig<T>;
    getCurrentPageData(): T[];
    getFlatData(): Object[];
    getFlatCurrentPageData(): Object[];
    recursiveSort(data: any, sorterFn: any): any;
    getLocalData(): T[];
    render(): JSX.Element;
}
