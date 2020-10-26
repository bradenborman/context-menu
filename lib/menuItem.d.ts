import React = require("react");
export interface IMenuItemProps {
  action?: () => void;
  iconClass?: string;
  disabled?: boolean;
  children: any;
}
export declare const MenuItem: React.FC<IMenuItemProps>;
