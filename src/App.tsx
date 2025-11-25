import { useState } from "react";
import "./App.scss";
import { Card } from "./components/Card/Card";
import { CardList } from "./components/CardList/CardList";
import placesData from "./data/places.json";
import type { ModalType } from "./interfaces/modal.interface";
import { Modal } from "./components/Modal/Modal";

function App() {

  const [isOpenModal, setIsOpenModal] = useState<ModalType>({ isOpen: false, type: "none" });

  return (
    <div className="content">
      <CardList>
        {placesData.map((place, i) => {
          return (
            <Card {...place} key={i} setIsOpenModal={setIsOpenModal}/>
          );
        })}
      </CardList>

      {isOpenModal.isOpen && (
        <Modal typeModal={{ type: isOpenModal.type }} onClose={() => setIsOpenModal({ isOpen: false, type: "none" })}>
          <div>Модальное окно (можно подставить под каждую модалку свой контент)</div>
        </Modal>
      )}
    </div>
  );
}

export default App;
