import type { HTMLAttributes } from "react";
import type { ModalType } from "../../interfaces/modal.interface";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  typeModal: Pick<ModalType, "type">
}