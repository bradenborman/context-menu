"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuGroup = void 0;
const react_1 = __importDefault(require("react"));
exports.MenuGroup = props => {
  return react_1.default.createElement(
    "li",
    { className: "menu-item menu-item-submenu" },
    react_1.default.createElement(
      "button",
      { type: "button", className: "menu-btn" },
      react_1.default.createElement("i", { className: "fa fa-users" }),
      react_1.default.createElement(
        "span",
        { className: "menu-text" },
        props.groupLableTxt
      )
    ),
    react_1.default.createElement("ul", { className: "menu" }, props.children)
  );
};
