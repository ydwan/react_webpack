'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _anchorHelper = require('./anchorHelper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AnchorLink = function (_React$Component) {
    (0, _inherits3["default"])(AnchorLink, _React$Component);

    function AnchorLink(props, context) {
        (0, _classCallCheck3["default"])(this, AnchorLink);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props, context));

        _this.renderAnchorLink = function (child) {
            var href = child.props.href;

            if (href) {
                _this.context.anchorHelper.addLink(href);
                return _react2["default"].cloneElement(child, {
                    onClick: _this.context.anchorHelper.scrollTo,
                    prefixCls: _this.props.prefixCls
                });
            }
            return child;
        };
        _this.scrollTo = function (e) {
            var _this$props = _this.props,
                onClick = _this$props.onClick,
                href = _this$props.href;
            var anchorHelper = _this.context.anchorHelper;

            e.preventDefault();
            if (onClick) {
                onClick(href);
            } else {
                e.stopPreventDefault();
                var scrollToFn = anchorHelper ? anchorHelper.scrollTo : _anchorHelper.scrollTo;
                scrollToFn(href);
            }
        };
        return _this;
    }

    AnchorLink.prototype.getChildContext = function getChildContext() {
        return {
            anchorHelper: this.context.anchorHelper
        };
    };

    AnchorLink.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            href = _props.href,
            children = _props.children,
            title = _props.title,
            bounds = _props.bounds,
            affix = _props.affix;
        var anchorHelper = this.context.anchorHelper;

        var active = affix && anchorHelper && anchorHelper.getCurrentAnchor(bounds) === href;
        var cls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-link', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-link-active', active), _classNames));
        return _react2["default"].createElement(
            'div',
            { className: cls },
            _react2["default"].createElement(
                'a',
                { ref: function ref(component) {
                        return component && active && anchorHelper ? anchorHelper.setActiveAnchor(component) : null;
                    }, className: prefixCls + '-link-title', onClick: this.scrollTo, href: href, title: typeof title === 'string' ? title : '' },
                title
            ),
            _react2["default"].Children.map(children, this.renderAnchorLink)
        );
    };

    return AnchorLink;
}(_react2["default"].Component);

exports["default"] = AnchorLink;

AnchorLink.contextTypes = {
    anchorHelper: _react2["default"].PropTypes.any
};
AnchorLink.childContextTypes = {
    anchorHelper: _react2["default"].PropTypes.any
};
AnchorLink.defaultProps = {
    href: '#',
    prefixCls: 'ant-anchor'
};
module.exports = exports['default'];