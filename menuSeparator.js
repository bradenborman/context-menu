"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuSeparator = void 0;
const react_1 = __importDefault(require("react"));
exports.MenuSeparator = props => {
  return react_1.default.createElement("li", { className: "menu-separator" });
};
