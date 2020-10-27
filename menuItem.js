"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
exports.MenuItem = props => {
  return react_1.default.createElement(
    "li",
    {
      onClick: props.action,
      className: classnames_1.default("menu-item", {
        "menu-item-disabled": props.disabled
      })
    },
    react_1.default.createElement(
      "a",
      { className: "menu-btn" },
      react_1.default.createElement("i", {
        className: classnames_1.default("fa", props.iconClass)
      }),
      react_1.default.createElement(
        "span",
        { className: "menu-text" },
        props.children
      )
    )
  );
};
