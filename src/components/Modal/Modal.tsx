import { createPortal } from "react-dom";
import type { ModalProps } from "./Modal.props";
import "./Modal.scss";
import { useEffect } from "react";

export function Modal({ children, onClose, typeModal, ...props }: ModalProps) {

  useEffect(() => {
    const handleEsc = (e: Event) => {
      if((e instanceof KeyboardEvent && e.key) === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const title = typeModal.type === "gallery" ? "Галерея"
                : typeModal.type === "view" ? "Обзор"
                : typeModal.type === "video" ? "Видео"
                : "";

  return createPortal(
    <div className="modal" {...props}>
      <div className="modal__body">
        <header className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <button className="modal__close" onClick={onClose}>&#10006;</button>
        </header>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}