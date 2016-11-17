'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CheckableTag = function (_React$Component) {
    (0, _inherits3["default"])(CheckableTag, _React$Component);

    function CheckableTag() {
        (0, _classCallCheck3["default"])(this, CheckableTag);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

        _this.handleClick = function () {
            var _this$props = _this.props,
                checked = _this$props.checked,
                onChange = _this$props.onChange;

            if (onChange) {
                onChange(!checked);
            }
        };
        return _this;
    }

    CheckableTag.prototype.render = function render() {
        var _classNames;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['prefixCls', 'className', 'checked']),
            _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2),
            _splitObject2$ = _splitObject2[0],
            _splitObject2$$prefix = _splitObject2$.prefixCls,
            prefixCls = _splitObject2$$prefix === undefined ? 'ant-tag' : _splitObject2$$prefix,
            _splitObject2$$classN = _splitObject2$.className,
            className = _splitObject2$$classN === undefined ? '' : _splitObject2$$classN,
            checked = _splitObject2$.checked,
            restProps = _splitObject2[1];

        var cls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, '' + prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-checkable', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-checkable-checked', checked), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
        delete restProps.onChange;
        return _react2["default"].createElement('div', (0, _extends3["default"])({}, restProps, { className: cls, onClick: this.handleClick }));
    };

    return CheckableTag;
}(_react2["default"].Component);

exports["default"] = CheckableTag;
module.exports = exports['default'];