"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenu = void 0;
var React = require("react");
var react_1 = require("react");
var classnames_1 = require("classnames");
require("./contextMenu.css");
exports.ContextMenu = function(props) {
  var _a = react_1.useState(false),
    showMenu = _a[0],
    setShowMenu = _a[1];
  var _b = react_1.useState(0),
    xAxis = _b[0],
    setxAxis = _b[1];
  var _c = react_1.useState(0),
    yAxis = _c[0],
    setyAxis = _c[1];
  var onMouseDown = function(e) {
    setShowMenu(false);
    document.removeEventListener("click", onMouseDown);
  };
  document.addEventListener(
    "contextmenu",
    function(e) {
      if (clickInsideElement(e) || props.allowedClasses == null) {
        e.preventDefault();
        setxAxis(e.pageX);
        setyAxis(e.pageY);
        setShowMenu(true);
        document.addEventListener("click", onMouseDown, false);
      }
    },
    false
  );
  var clickInsideElement = function(e) {
    var _a;
    var isValid = false;
    (_a = props.allowedClasses) === null || _a === void 0
      ? void 0
      : _a.forEach(function(element) {
          if (clickInsideElementY(e, element)) {
            isValid = true;
          }
        });
    return isValid;
  };
  var clickInsideElementY = function(e, className) {
    var el = e.srcElement || e.target;
    if (el.classList.contains(className)) {
      return el;
    } else {
      while ((el = el.parentNode)) {
        if (el.classList && el.classList.contains(className)) {
          return el;
        }
      }
    }
    return false;
  };
  return React.createElement(
    "ul",
    {
      className: classnames_1.default("menu", { "menu-show": showMenu }),
      style: { left: xAxis - 10 + "px", top: yAxis - 10 + "px" }
    },
    props.children
  );
};
