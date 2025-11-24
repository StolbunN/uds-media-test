import type { LiHTMLAttributes } from "react";

export interface CardProps extends LiHTMLAttributes<HTMLLIElement> {
  name: string,
  description: string,
  image: string,
  address: string,
  distance: string,
  underground: string,
  rating: number,
  button: boolean
}