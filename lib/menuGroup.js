"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuGroup = void 0;
const React = require("react");
exports.MenuGroup = props => {
  return React.createElement(
    "li",
    { className: "menu-item menu-item-submenu" },
    React.createElement(
      "button",
      { type: "button", className: "menu-btn" },
      React.createElement("i", { className: "fa fa-users" }),
      React.createElement(
        "span",
        { className: "menu-text" },
        props.groupLableTxt
      )
    ),
    React.createElement("ul", { className: "menu" }, props.children)
  );
};
//# sourceMappingURL=menuGroup.js.map
