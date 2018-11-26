"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FlexPaneContainer = exports.FlexPane = exports.FlexPaneButtons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlexPaneButtons = exports.FlexPaneButtons = function (_React$Component) {
    _inherits(FlexPaneButtons, _React$Component);

    function FlexPaneButtons() {
        _classCallCheck(this, FlexPaneButtons);

        return _possibleConstructorReturn(this, (FlexPaneButtons.__proto__ || Object.getPrototypeOf(FlexPaneButtons)).apply(this, arguments));
    }

    _createClass(FlexPaneButtons, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var mode = this.props.modes[this.props.index];
            var classNames1 = (0, _classnames2.default)("flexpane-resize", "flexpane-maximize", { "flexpane-button-active": mode !== "maximized" });
            var classNames2 = (0, _classnames2.default)("flexpane-resize", "flexpane-normalize", { "flexpane-button-active": mode !== "normal" });
            var classNames3 = (0, _classnames2.default)("flexpane-resize", "flexpane-hide", { "flexpane-button-active": mode !== "hidden" });

            var buttonsBefore = (this.props.buttonsBefore || []).map(function (button, i) {
                return _react2.default.createElement(
                    "li",
                    { key: 'b' + i },
                    button
                );
            });
            var buttonsAfter = (this.props.buttonsAfter || []).map(function (button, i) {
                return _react2.default.createElement(
                    "li",
                    { key: 'a' + i },
                    button
                );
            });

            return _react2.default.createElement(
                "ul",
                { className: "flexpane-buttons" },
                _react2.default.createElement(
                    "li",
                    { key: "0" },
                    _react2.default.createElement(
                        "button",
                        { className: classNames1, onClick: function onClick() {
                                _this2.props.onButtonClick(_this2.props.index, "maximized");
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
                                _this2.props.onButtonClick(_this2.props.index, "normal");
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
                                _this2.props.onButtonClick(_this2.props.index, "hidden");
                            } },
                        _react2.default.createElement(
                            "svg",
                            { enableBackground: "new 0 0 32 32", height: "32px", id: "Layer_1", version: "1.1", viewBox: "0 0 32 32", width: "32px", xmlSpace: "preserve", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
                            _react2.default.createElement("path", { d: "M14.77,23.795L5.185,14.21c-0.879-0.879-0.879-2.317,0-3.195l0.8-0.801c0.877-0.878,2.316-0.878,3.194,0  l7.315,7.315l7.316-7.315c0.878-0.878,2.317-0.878,3.194,0l0.8,0.801c0.879,0.878,0.879,2.316,0,3.195l-9.587,9.585  c-0.471,0.472-1.104,0.682-1.723,0.647C15.875,24.477,15.243,24.267,14.77,23.795z", fill: "#515151" })
                        )
                    )
                ),
                buttonsBefore,
                _react2.default.createElement(
                    "li",
                    { key: "3", className: "flexpane-title" },
                    this.props.title
                ),
                buttonsAfter
            );
        }
    }]);

    return FlexPaneButtons;
}(_react2.default.Component);

var FlexPane = exports.FlexPane = function (_React$Component2) {
    _inherits(FlexPane, _React$Component2);

    function FlexPane(props) {
        _classCallCheck(this, FlexPane);

        var _this3 = _possibleConstructorReturn(this, (FlexPane.__proto__ || Object.getPrototypeOf(FlexPane)).call(this, props));

        _this3.refPane = _react2.default.createRef();
        return _this3;
    }

    _createClass(FlexPane, [{
        key: "render",
        value: function render() {
            var mode = this.props.modes[this.props.index];

            var classNames_ = {
                "flexpane-pane-normal": mode === "normal",
                "flexpane-pane-maximum": mode === "maximized",
                "flexpane-pane-hidden": mode === "hidden"
            };

            if (this.props.className != null) {
                classNames_[this.props.className] = true;
            }

            var refPane = this.props.refPane || this.refPane;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(FlexPaneButtons, {
                    modes: this.props.modes,
                    index: this.props.index,
                    onButtonClick: this.props.onButtonClick,
                    buttonsBefore: this.props.buttonsBefore,
                    buttonsAfter: this.props.buttonsAfter,
                    title: this.props.title }),
                _react2.default.createElement(
                    "div",
                    { key: this.props.index, className: (0, _classnames2.default)("flexpane-pane", classNames_), ref: refPane },
                    this.props.children
                )
            );
        }
    }]);

    return FlexPane;
}(_react2.default.Component);

var FlexPaneContainer = exports.FlexPaneContainer = function (_React$Component3) {
    _inherits(FlexPaneContainer, _React$Component3);

    function FlexPaneContainer(props) {
        _classCallCheck(this, FlexPaneContainer);

        var _this4 = _possibleConstructorReturn(this, (FlexPaneContainer.__proto__ || Object.getPrototypeOf(FlexPaneContainer)).call(this, props));

        var modes = _react2.default.Children.map(_this4.props.children, function (child, index) {
            return child.props.mode || "normal";
        });

        _this4.state = {
            modes: modes
        };

        _this4.handleButtonClick = _this4.handleButtonClick.bind(_this4);
        return _this4;
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
            var _this5 = this;

            var children = _react2.default.Children.map(this.props.children, function (child, index) {
                return _react2.default.cloneElement(child, { key: index, modes: _this5.state.modes, index: index, onButtonClick: _this5.handleButtonClick });
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