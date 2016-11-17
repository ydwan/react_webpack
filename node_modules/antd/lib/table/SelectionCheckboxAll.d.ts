/// <reference types="react" />
import React from 'react';
import { Store } from './createStore';
export interface SelectionCheckboxAllProps {
    store: Store;
    disabled: boolean;
    getCheckboxPropsByItem: (item) => any;
    getRecordKey: (record, index?) => string;
    data: any[];
    onChange: (e) => void;
}
export default class SelectionCheckboxAll extends React.Component<SelectionCheckboxAllProps, any> {
    unsubscribe: () => void;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    subscribe(): void;
    checkSelection(data: any, type: any, byDefaultChecked: any): any;
    getCheckState(): any;
    getIndeterminateState(): any;
    render(): JSX.Element;
}
