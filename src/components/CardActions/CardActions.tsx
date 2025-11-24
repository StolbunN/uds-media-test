import { Icon } from "../Icon/Icon";
import type { CardActionsProps } from "./CardActions.props";
import "./CardActions.scss";
import cn from "classnames";

export function CardActions({className, ...props}: CardActionsProps) {
  return (
    <div className={cn("actions", className)} {...props}>
      <Icon id="media-gallery" width="25" height="21" viewBox="0 0 25 21" className="actions__item"/>
      <Icon id="media-view" width="32" height="28" viewBox="0 0 32 28" className="actions__item"/>
      <Icon id="media-video" width="24" height="16" viewBox="0 0 24 16" className="actions__item"/>
    </div>
  );
}