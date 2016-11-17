'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SelectionCheckboxAll = function (_React$Component) {
    (0, _inherits3["default"])(SelectionCheckboxAll, _React$Component);

    function SelectionCheckboxAll(props) {
        (0, _classCallCheck3["default"])(this, SelectionCheckboxAll);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.state = {
            checked: _this.getCheckState(),
            indeterminate: _this.getIndeterminateState()
        };
        return _this;
    }

    SelectionCheckboxAll.prototype.componentDidMount = function componentDidMount() {
        this.subscribe();
    };

    SelectionCheckboxAll.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    };

    SelectionCheckboxAll.prototype.subscribe = function subscribe() {
        var _this2 = this;

        var store = this.props.store;

        this.unsubscribe = store.subscribe(function () {
            var checked = _this2.getCheckState();
            var indeterminate = _this2.getIndeterminateState();
            if (checked !== _this2.state.checked) {
                _this2.setState({ checked: checked });
            }
            if (indeterminate !== _this2.state.indeterminate) {
                _this2.setState({ indeterminate: indeterminate });
            }
        });
    };

    SelectionCheckboxAll.prototype.checkSelection = function checkSelection(data, type, byDefaultChecked) {
        var _props = this.props,
            store = _props.store,
            getCheckboxPropsByItem = _props.getCheckboxPropsByItem,
            getRecordKey = _props.getRecordKey;
        // type should be 'every' | 'some'

        if (type === 'every' || type === 'some') {
            return byDefaultChecked ? data[type](function (item) {
                return getCheckboxPropsByItem(item).defaultChecked;
            }) : data[type](function (item, i) {
                return store.getState().selectedRowKeys.indexOf(getRecordKey(item, i)) >= 0;
            });
        }
        return false;
    };

    SelectionCheckboxAll.prototype.getCheckState = function getCheckState() {
        var _props2 = this.props,
            store = _props2.store,
            data = _props2.data;

        var checked = void 0;
        if (!data.length) {
            checked = false;
        } else {
            checked = store.getState().selectionDirty ? this.checkSelection(data, 'every', false) : this.checkSelection(data, 'every', false) || this.checkSelection(data, 'every', true);
        }
        return checked;
    };

    SelectionCheckboxAll.prototype.getIndeterminateState = function getIndeterminateState() {
        var _props3 = this.props,
            store = _props3.store,
            data = _props3.data;

        var indeterminate = void 0;
        if (!data.length) {
            indeterminate = false;
        } else {
            indeterminate = store.getState().selectionDirty ? this.checkSelection(data, 'some', false) && !this.checkSelection(data, 'every', false) : this.checkSelection(data, 'some', false) && !this.checkSelection(data, 'every', false) || this.checkSelection(data, 'some', true) && !this.checkSelection(data, 'every', true);
        }
        return indeterminate;
    };

    SelectionCheckboxAll.prototype.render = function render() {
        var _props4 = this.props,
            disabled = _props4.disabled,
            onChange = _props4.onChange;
        var _state = this.state,
            checked = _state.checked,
            indeterminate = _state.indeterminate;

        return _react2["default"].createElement(_checkbox2["default"], { checked: checked, indeterminate: indeterminate, disabled: disabled, onChange: onChange });
    };

    return SelectionCheckboxAll;
}(_react2["default"].Component);

exports["default"] = SelectionCheckboxAll;
module.exports = exports['default'];