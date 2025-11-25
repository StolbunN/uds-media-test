import type { LiHTMLAttributes } from "react";
import type { ModalType } from "../../interfaces/modal.interface";

export interface CardProps extends LiHTMLAttributes<HTMLLIElement> {
  name: string,
  description: string,
  image: string,
  address: string,
  distance: string,
  underground: string,
  rating: number,
  button: boolean
  setIsOpenModal: (modalState: ModalType) => void
}