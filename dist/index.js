"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FlexPaneContainer = exports.FlexPane = exports.FlexPaneTitle = exports.FlexPaneButtons = exports.FlexPaneBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// nodemon -w src --exec npm run repack-and-build

/** <FlexPaneBar><FlexPaneButtons/><FlexPaneTitle/></FlexPaneBar>
 */
var FlexPaneBar = exports.FlexPaneBar = function FlexPaneBar(props) {

    var paneProps = props.paneProps || {};

    var children = _react2.default.Children.map(props.children, function (child) {
        if (child.type === FlexPaneButtons || child.type === FlexPaneTitle) {
            var buttons = _react2.default.cloneElement(child, { paneProps: paneProps });
            return buttons;
        }
        return child;
    });
    return _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)("flexpane-bar", props.className) },
        children
    );
};

var FlexPaneButtons = exports.FlexPaneButtons = function FlexPaneButtons(props) {

    var paneProps = props.paneProps || {};

    var mode = paneProps.index !== undefined ? paneProps.modes[paneProps.index] : "normal";
    var classNames1 = (0, _classnames2.default)("flexpane-button", "flexpane-maximize", { "flexpane-button-active": mode !== "maximized" });
    var classNames2 = (0, _classnames2.default)("flexpane-button", "flexpane-normalize", { "flexpane-button-active": mode !== "normal" });
    var classNames3 = (0, _classnames2.default)("flexpane-button", "flexpane-hide", { "flexpane-button-active": mode !== "hidden" });

    return _react2.default.createElement(
        "ul",
        { className: (0, _classnames2.default)(props.className, "flexpane-buttons") },
        _react2.default.createElement(
            "li",
            { key: "0" },
            _react2.default.createElement(
                "button",
                { className: classNames1, onClick: function onClick() {
                        paneProps.onButtonClick(paneProps.index, "maximized");
                    } },
                _react2.default.createElement(
                    "svg",
                    { enableBackground: "new 0 0 32 32", height: "32px", id: "Layer_1", version: "1.1", viewBox: "0 0 32 32", width: "32px", xmlSpace: "preserve", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
                    _react2.default.createElement("path", { d: "M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z", fill: "#515151" })
                )
            )
        ),
        _react2.default.createElement(
            "li",
            { key: "1" },
            _react2.default.createElement(
                "button",
                { className: classNames2, onClick: function onClick() {
                        paneProps.onButtonClick(paneProps.index, "normal");
                    } },
                _react2.default.createElement(
                    "svg",
                    { enableBackground: "new 0 0 32 32", height: "32px", id: "Layer_1", version: "1.1", viewBox: "0 0 32 32", width: "32px", xmlSpace: "preserve", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
                    _react2.default.createElement("path", { d: "M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z", fill: "#515151" })
                )
            )
        ),
        _react2.default.createElement(
            "li",
            { key: "2" },
            _react2.default.createElement(
                "button",
                { className: classNames3, onClick: function onClick() {
                        paneProps.onButtonClick(paneProps.index, "hidden");
                    } },
                _react2.default.createElement(
                    "svg",
                    { enableBackground: "new 0 0 32 32", height: "32px", id: "Layer_1", version: "1.1", viewBox: "0 0 32 32", width: "32px", xmlSpace: "preserve", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
                    _react2.default.createElement("path", { d: "M14.77,23.795L5.185,14.21c-0.879-0.879-0.879-2.317,0-3.195l0.8-0.801c0.877-0.878,2.316-0.878,3.194,0  l7.315,7.315l7.316-7.315c0.878-0.878,2.317-0.878,3.194,0l0.8,0.801c0.879,0.878,0.879,2.316,0,3.195l-9.587,9.585  c-0.471,0.472-1.104,0.682-1.723,0.647C15.875,24.477,15.243,24.267,14.77,23.795z", fill: "#515151" })
                )
            )
        )
    );
};

var FlexPaneTitle = exports.FlexPaneTitle = function FlexPaneTitle(props) {
    var paneProps = props.paneProps || { title: 'untitled' };
    return _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)("flexpane-title", props.className) },
        paneProps.title
    );
};

/**  <FlexPane> content </FlexPane>
 */

var FlexPane = exports.FlexPane = function (_React$Component) {
    _inherits(FlexPane, _React$Component);

    function FlexPane(props) {
        _classCallCheck(this, FlexPane);

        var _this = _possibleConstructorReturn(this, (FlexPane.__proto__ || Object.getPrototypeOf(FlexPane)).call(this, props));

        _this.refPane = _react2.default.createRef();
        return _this;
    }

    _createClass(FlexPane, [{
        key: "render",
        value: function render() {

            var paneProps = this.props.paneProps || {};

            paneProps['title'] = this.props.title;

            var mode = paneProps.modes[paneProps.index];

            var classNames_ = {
                "flexpane-pane": true,
                "flexpane-pane-normal": mode === "normal",
                "flexpane-pane-maximum": mode === "maximized",
                "flexpane-pane-hidden": mode === "hidden"
            };

            var refPane = this.props.refPane || this.refPane;

            var children = _react2.default.Children.toArray(this.props.children);

            var flexPaneBar = void 0;

            if (children[0] && children[0].type === FlexPaneBar) {
                flexPaneBar = _react2.default.cloneElement(children[0], { paneProps: paneProps });
                children = children.slice(1);
            } else {
                flexPaneBar = _react2.default.createElement(
                    FlexPaneBar,
                    { className: (0, _classnames2.default)(this.props.className), paneProps: paneProps },
                    _react2.default.createElement(FlexPaneButtons, null),
                    _react2.default.createElement(FlexPaneTitle, null)
                );
            }

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                flexPaneBar,
                _react2.default.createElement(
                    "div",
                    { key: paneProps.index, className: (0, _classnames2.default)(classNames_, this.props.className), ref: refPane },
                    children
                )
            );
        }
    }]);

    return FlexPane;
}(_react2.default.Component);

/**  <FlexPaneContainer><FlexPane/><FlexPane/><FlexPane/></FlexPaneContainer>
 * 
 */


var FlexPaneContainer = exports.FlexPaneContainer = function (_React$Component2) {
    _inherits(FlexPaneContainer, _React$Component2);

    function FlexPaneContainer(props) {
        _classCallCheck(this, FlexPaneContainer);

        var _this2 = _possibleConstructorReturn(this, (FlexPaneContainer.__proto__ || Object.getPrototypeOf(FlexPaneContainer)).call(this, props));

        var modes = _react2.default.Children.map(_this2.props.children, function (child) {
            return child.props.mode || "normal";
        });

        _this2.state = {
            modes: modes
        };

        _this2.handleButtonClick = _this2.handleButtonClick.bind(_this2);
        return _this2;
    }

    _createClass(FlexPaneContainer, [{
        key: "handleButtonClick",
        value: function handleButtonClick(index, mode) {
            var modes = this.state.modes.slice();
            if (mode === "maximized") {
                modes = modes.map(function (mode) {
                    return mode === "maximized" ? "normal" : mode;
                });
            }
            modes[index] = mode;
            this.setState({ modes: modes });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var children = _react2.default.Children.map(this.props.children, function (child, index) {
                var paneProps = { modes: _this3.state.modes, index: index, onButtonClick: _this3.handleButtonClick };
                child = _react2.default.cloneElement(child, { paneProps: paneProps });
                return child;
            });
            return _react2.default.createElement(
                "div",
                { className: "flexpane-container" },
                children
            );
        }
    }]);

    return FlexPaneContainer;
}(_react2.default.Component);

// propTypes


FlexPane.propTypes = {
    title: _propTypes2.default.string,
    mode: _propTypes2.default.string
};

FlexPane.defaultProps = {
    title: 'untitled',
    mode: 'normal'
};
//# sourceMappingURL=index.js.map