import { Icon } from "../Icon/Icon";
import type { RatingProps } from "./Rating.props";
import "./Rating.scss";
import cn from "classnames";

export function Rating({value, className, ...props}: RatingProps) {
  
  return (
    <div className={cn("rating", className)} {...props}>
      <div className="rating__stars">
        <Icon id="rating-star" width="15" height="14" viewBox="0 0 15 14"/>
        <Icon id="rating-star" width="15" height="14" viewBox="0 0 15 14"/>
        <Icon id="rating-star" width="15" height="14" viewBox="0 0 15 14"/>
        <Icon id="rating-star" width="15" height="14" viewBox="0 0 15 14"/>
        <div className="rating__star-half-wrapper">
          <Icon id="rating-star-empty" width="15" height="14" viewBox="0 0 15 14" className="rating__star-empty-icon"/>
          <Icon id="rating-star-half" width="15" height="14" viewBox="0 0 15 14" className="rating__star-half-icon"/>
        </div>
      </div>
      <span className="rating__value">{value}</span>
    </div>
  );
}