/// <reference types="react" />
import React from 'react';
export default class RangePicker extends React.Component<any, any> {
    static defaultProps: {
        prefixCls: string;
        allowClear: boolean;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    clearSelection: (e: any) => void;
    handleChange: (value: any) => void;
    render(): JSX.Element;
}
