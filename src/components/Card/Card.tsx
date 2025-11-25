import type { CardProps } from "./Card.props";
import cn from "classnames";
import "./Card.scss";
import { Icon } from "../Icon/Icon";
import { CardActions } from "../CardActions/CardActions";
import { Rating } from "../Rating/Rating";
import { Button } from "../Button/Button";
import { useState } from "react";
import { Tooltip } from "../Tooltip/Tooltip";

export function Card({ name, description, image, address, distance, underground, rating, button, setIsOpenModal, className }: CardProps) {

  const [isFavorites, setIsFavorites] = useState<boolean>(false);

  return (
    <li className={cn("card", className)}>
      <div className="card__top">
        <Icon id="building" width="58" height="58" viewBox="0 0 58 58" className="card__building-badge" />
        <img src={image} alt={name} className="card__image" />
        <CardActions className="card__actions" setIsOpenModal={setIsOpenModal}/>
        <div className="card__description">
          {description}
        </div>
      </div>
      <div className="card__bottom">
        <header className="card__header">
          <h3 className={cn("card__name", {
            "isFavorites": isFavorites
          })}>{name}</h3>
          <Tooltip text={!isFavorites ? "Добавить в избранное" : "Убрать из избарнного"} className="card__tooltip">
            <Icon id="favorites" width="26" height="24" viewBox="0 0 26 24" className={cn("card__favorites-icon", {
              "isFavorites": isFavorites
            })} onClick={() => setIsFavorites(!isFavorites)} />
          </Tooltip>
        </header>
        {button && <Button className="card__button">Перейти</Button>}
        <ul className="card__info info">
          <li className="info__item">
            <Icon id="location" width="17" height="21" viewBox="0 0 17 21" />
            <span>{address}</span>
          </li>
          <li className="info__item">
            <Icon id="distance" width="16" height="17" viewBox="0 0 16 17" />
            <span>{distance}</span>
          </li>
          <li className="info__item">
            <Icon id="underground" width="22" height="14" viewBox="0 0 22 14" />
            <span>{underground}</span>
          </li>
        </ul>
        <footer className="card__footer">
          <Rating value={rating} />
        </footer>
      </div>
    </li>
  );
}