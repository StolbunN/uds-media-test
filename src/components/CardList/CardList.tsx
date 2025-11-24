import type { CardListProps } from "./CardList.props";
import cn from "classnames";
import "./CardList.scss";

export function CardList({children, className}: CardListProps) {
  return (
    <ul className={cn("card-list", className)}>
      {children}
    </ul>
  );
}