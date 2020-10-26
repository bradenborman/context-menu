"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
const React = require("react");
const classnames_1 = require("classnames");
exports.MenuItem = props => {
  return React.createElement(
    "li",
    {
      onClick: props.action,
      className: classnames_1.default("menu-item", {
        "menu-item-disabled": props.disabled
      })
    },
    React.createElement(
      "a",
      { className: "menu-btn" },
      React.createElement("i", {
        className: classnames_1.default("fa", props.iconClass)
      }),
      React.createElement("span", { className: "menu-text" }, props.children)
    )
  );
};
//# sourceMappingURL=menuItem.js.map
