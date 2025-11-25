import type { HTMLAttributes } from "react";
import type { ModalType } from "../../interfaces/modal.interface";

export interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  setIsOpenModal: (modalState: ModalType) => void
}