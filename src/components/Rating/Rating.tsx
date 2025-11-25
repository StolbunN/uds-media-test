import { Icon } from "../Icon/Icon";
import type { RatingProps } from "./Rating.props";
import "./Rating.scss";
import cn from "classnames";

export function Rating({ value, className, ...props }: RatingProps) {

  const filledStars = Math.floor(value);
  let halfStar = value - filledStars !== 0 ? true : false;


  return (
    <div className={cn("rating", className)} {...props}>
      <div className="rating__stars">
        {[...Array(5)].map((_, i) => {
          if (i < filledStars) {
            return (
              <div className="rating__star-filled-wrap" key={i}>
                <Icon id="rating-star" width="15" height="14" viewBox="0 0 15 14"/>
              </div>
            );
          }
          if (halfStar) {
            halfStar = !halfStar;
            return (
              <div className="rating__star-half-wrap" key={i}>
                <Icon id="rating-star-empty" width="15" height="14" viewBox="0 0 15 14" className="rating__star-empty-icon"/>
                <Icon id="rating-star-half" width="15" height="14" viewBox="0 0 15 14" className="rating__star-half-icon"/>
              </div>
            );
          }
          return (
            <div className="rating__star-empty-wrap" key={i}>
              <Icon id="rating-star-empty" width="15" height="14" viewBox="0 0 15 14" />
            </div>
          );
        })}
      </div>
      <span className="rating__value">{value}</span>
    </div>
  );
}