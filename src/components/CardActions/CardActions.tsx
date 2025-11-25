import { Icon } from "../Icon/Icon";
import { Tooltip } from "../Tooltip/Tooltip";
import type { CardActionsProps } from "./CardActions.props";
import "./CardActions.scss";
import cn from "classnames";

export function CardActions({ className, setIsOpenModal, ...props }: CardActionsProps) {

  return (
    <div className={cn("actions", className)} {...props}>
      <Tooltip text="Открыть галерею" className="actions__item actions__tooltip-gallery" onClick={() => setIsOpenModal({ isOpen: true, type: "gallery" })}>
        <Icon id="media-gallery" width="25" height="21" viewBox="0 0 25 21" className="actions__item-icon" />
      </Tooltip>
      <Tooltip text="Открыть обзор" className="actions__item actions__tooltip-view" onClick={() => setIsOpenModal({ isOpen: true, type: "view" })}>
        <Icon id="media-view" width="32" height="28" viewBox="0 0 32 28" className="actions__item-icon" />
      </Tooltip>
      <Tooltip text="Посмотреть видео" className="actions__item actions__tooltip-video" onClick={() => setIsOpenModal({ isOpen: true, type: "video" })}>
        <Icon id="media-video" width="24" height="16" viewBox="0 0 24 16" className="actions__item-icon" />
      </Tooltip>
    </div>
  );
}