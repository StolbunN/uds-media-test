import type { TooltipProps } from "./Tooltip.props";
import "./Tooltip.scss";
import cn from "classnames";

export function Tooltip({ text, className, children, ...props }: TooltipProps) {

  return (
    <div className={cn("tooltip", className)} {...props}>
      {children}
      <div className="tooltip__content">
        <span className="tooltip__text">{text}</span>
      </div>
    </div>
  );
}