import type { ButtonProps } from "./Button.props";
import "./Button.scss";
import cn from "classnames";

export function Button({children, className}: ButtonProps) {
  return (
    <button className={cn("button", className)}>
      {children}
    </button>
  );
}