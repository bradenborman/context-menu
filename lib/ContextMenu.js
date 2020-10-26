"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenu = void 0;
const React = require("react");
const react_1 = require("react");
const classnames_1 = require("classnames");
require("./ContextMenu.css");
exports.ContextMenu = props => {
  const [showMenu, setShowMenu] = react_1.useState(false);
  const [xAxis, setxAxis] = react_1.useState(0);
  const [yAxis, setyAxis] = react_1.useState(0);
  const onMouseDown = e => {
    setShowMenu(false);
    document.removeEventListener("click", onMouseDown);
  };
  document.addEventListener(
    "contextmenu",
    e => {
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
  const clickInsideElement = e => {
    var _a;
    let isValid = false;
    (_a = props.allowedClasses) === null || _a === void 0
      ? void 0
      : _a.forEach(element => {
          if (clickInsideElementY(e, element)) {
            isValid = true;
          }
        });
    return isValid;
  };
  const clickInsideElementY = (e, className) => {
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
//# sourceMappingURL=ContextMenu.js.map
