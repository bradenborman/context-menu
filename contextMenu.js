"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function() {
            return m[k];
          }
        });
      }
    : function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function(o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenu = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
require("./contextMenu.css");
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
  return react_1.default.createElement(
    "ul",
    {
      className: classnames_1.default("menu", { "menu-show": showMenu }),
      style: { left: xAxis - 10 + "px", top: yAxis - 10 + "px" }
    },
    props.children
  );
};
