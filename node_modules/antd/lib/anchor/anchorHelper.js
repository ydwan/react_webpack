'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scrollTo = exports.easeInOutCubic = exports.reqAnimFrame = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.getDefaultTarget = getDefaultTarget;
exports.getOffsetTop = getOffsetTop;

var _getScroll = require('../_util/getScroll');

var _getScroll2 = _interopRequireDefault(_getScroll);

var _getRequestAnimationFrame = require('../_util/getRequestAnimationFrame');

var _getRequestAnimationFrame2 = _interopRequireDefault(_getRequestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reqAnimFrame = exports.reqAnimFrame = (0, _getRequestAnimationFrame2["default"])();
var easeInOutCubic = exports.easeInOutCubic = function easeInOutCubic(t, b, c, d) {
    var cc = c - b;
    t /= d / 2;
    if (t < 1) {
        return cc / 2 * t * t * t + b;
    }
    return cc / 2 * ((t -= 2) * t * t + 2) + b;
};
function getDefaultTarget() {
    return typeof window !== 'undefined' ? window : null;
}
function getOffsetTop(element) {
    if (!element) {
        return 0;
    }
    if (!element.getClientRects().length) {
        return 0;
    }
    var rect = element.getBoundingClientRect();
    if (rect.width || rect.height) {
        var doc = element.ownerDocument;
        var docElem = doc.documentElement;
        return rect.top - docElem.clientTop;
    }
    return rect.top;
}
function _scrollTo(href) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getDefaultTarget;

    var scrollTop = (0, _getScroll2["default"])(target(), true);
    var targetElement = document.querySelector(href);
    if (!targetElement) {
        return;
    }
    var offsetTop = getOffsetTop(targetElement);
    var targetScrollTop = scrollTop + offsetTop;
    var startTime = Date.now();
    var frameFunc = function frameFunc() {
        var timestamp = Date.now();
        var time = timestamp - startTime;
        window.scrollTo(window.pageXOffset, easeInOutCubic(time, scrollTop, targetScrollTop, 450));
        if (time < 450) {
            reqAnimFrame(frameFunc);
        }
    };
    reqAnimFrame(frameFunc);
    history.pushState(null, undefined, href);
}
exports.scrollTo = _scrollTo;

var AnchorHelper = function () {
    function AnchorHelper() {
        (0, _classCallCheck3["default"])(this, AnchorHelper);

        this.links = [];
        this.currentAnchor = null;
        this._activeAnchor = '';
    }

    AnchorHelper.prototype.addLink = function addLink(link) {
        if (this.links.indexOf(link) === -1) {
            this.links.push(link);
        }
    };

    AnchorHelper.prototype.getCurrentActiveAnchor = function getCurrentActiveAnchor() {
        return this.currentAnchor;
    };

    AnchorHelper.prototype.setActiveAnchor = function setActiveAnchor(component) {
        this.currentAnchor = component;
    };

    AnchorHelper.prototype.getCurrentAnchor = function getCurrentAnchor() {
        var bounds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

        var activeAnchor = '';
        this.links.forEach(function (section) {
            var target = document.querySelector(section);
            if (target) {
                var top = getOffsetTop(target);
                var bottom = top + target.clientHeight;
                if (top <= bounds && bottom >= -bounds) {
                    activeAnchor = section;
                }
            }
        });
        this._activeAnchor = activeAnchor || this._activeAnchor;
        return this._activeAnchor;
    };

    AnchorHelper.prototype.scrollTo = function scrollTo(href) {
        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getDefaultTarget;

        _scrollTo(href, target);
    };

    return AnchorHelper;
}();

exports["default"] = AnchorHelper;