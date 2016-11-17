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

var _addEventListener = require('rc-util/lib/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _AnchorLink = require('./AnchorLink');

var _AnchorLink2 = _interopRequireDefault(_AnchorLink);

var _affix = require('../affix');

var _affix2 = _interopRequireDefault(_affix);

var _anchorHelper = require('./anchorHelper');

var _anchorHelper2 = _interopRequireDefault(_anchorHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Anchor = function (_React$Component) {
    (0, _inherits3["default"])(Anchor, _React$Component);

    function Anchor(props) {
        (0, _classCallCheck3["default"])(this, Anchor);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.handleScroll = function () {
            _this.setState({
                activeAnchor: _this.anchorHelper.getCurrentAnchor(_this.props.bounds)
            });
        };
        _this.updateInk = function () {
            var activeAnchor = _this.anchorHelper.getCurrentActiveAnchor();
            if (activeAnchor) {
                _this.refs.ink.style.top = activeAnchor.offsetTop + activeAnchor.clientHeight / 2 - 4.5 + 'px';
            }
        };
        _this.renderAnchorLink = function (child) {
            var href = child.props.href;

            if (href) {
                _this.anchorHelper.addLink(href);
                return _react2["default"].cloneElement(child, {
                    onClick: _this.anchorHelper.scrollTo,
                    prefixCls: _this.props.prefixCls,
                    bounds: _this.props.bounds,
                    affix: _this.props.affix
                });
            }
            return child;
        };
        _this.state = {
            activeAnchor: null
        };
        _this.anchorHelper = new _anchorHelper2["default"]();
        return _this;
    }

    Anchor.prototype.getChildContext = function getChildContext() {
        return {
            anchorHelper: this.anchorHelper
        };
    };

    Anchor.prototype.componentDidMount = function componentDidMount() {
        this.handleScroll();
        this.updateInk();
        this.scrollEvent = (0, _addEventListener2["default"])((this.props.target || _anchorHelper.getDefaultTarget)(), 'scroll', this.handleScroll);
    };

    Anchor.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.scrollEvent) {
            this.scrollEvent.remove();
        }
    };

    Anchor.prototype.componentDidUpdate = function componentDidUpdate() {
        this.updateInk();
    };

    Anchor.prototype.render = function render() {
        var _classNames, _classNames2, _classNames3;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            offsetTop = _props.offsetTop,
            style = _props.style,
            _props$className = _props.className,
            className = _props$className === undefined ? '' : _props$className,
            affix = _props.affix;
        var activeAnchor = this.state.activeAnchor;

        var inkClass = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-ink-ball', true), (0, _defineProperty3["default"])(_classNames, 'visible', !!activeAnchor), _classNames));
        var wrapperClass = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-wrapper', true), (0, _defineProperty3["default"])(_classNames2, className, !!className), _classNames2));
        var anchorClass = (0, _classnames2["default"])((_classNames3 = {}, (0, _defineProperty3["default"])(_classNames3, '' + prefixCls, true), (0, _defineProperty3["default"])(_classNames3, 'fixed', !affix), _classNames3));
        var anchorContent = _react2["default"].createElement(
            'div',
            { className: wrapperClass, style: style },
            _react2["default"].createElement(
                'div',
                { className: anchorClass },
                _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-ink' },
                    _react2["default"].createElement('span', { className: inkClass, ref: 'ink' })
                ),
                _react2["default"].Children.map(this.props.children, this.renderAnchorLink)
            )
        );
        return affix === false ? anchorContent : _react2["default"].createElement(
            _affix2["default"],
            { offsetTop: offsetTop },
            anchorContent
        );
    };

    return Anchor;
}(_react2["default"].Component);

exports["default"] = Anchor;

Anchor.Link = _AnchorLink2["default"];
Anchor.defaultProps = {
    prefixCls: 'ant-anchor',
    affix: true
};
Anchor.childContextTypes = {
    anchorHelper: _react2["default"].PropTypes.any
};
module.exports = exports['default'];