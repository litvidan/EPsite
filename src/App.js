import React, {useState} from "react";
import ModalWindow from './ModalWindow.js';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }



  return (
    <div className="App">
      <header>
        <div className="menu">
          <a>Обо мне</a>
          <a>Портфолио</a>
        </div>

        <button onClick={handleOpenModal} className="btn">Связаться</button>
        <ModalWindow show={showModal} onClose={handleCloseModal}>
          <h2 style={{color:"#4824ff", fontSize:"40px"}}> Контакты</h2>
          <p style={{fontSize: "22px"}}>Вы можете написать мне на почту</p>
        </ModalWindow>


        <a href="https://t.me/litvidan" target="_blank"
        className="icon telegram"/>
        <a href="https://vk.com/litvidan" target="_blank"
        className="icon vk"/>

        <div className="switch">
          <div className="theme light"></div>
        </div>

      </header>

      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, porro neque! Perferendis provident culpa, beatae omnis aliquam maiores voluptas doloribus deserunt aliquid dignissimos aspernatur non, nemo sequi accusamus vitae cumque!
        </p>       

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, porro neque! Perferendis provident culpa, beatae omnis aliquam maiores voluptas doloribus deserunt aliquid dignissimos aspernatur non, nemo sequi accusamus vitae cumque!
        </p>       

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, porro neque! Perferendis provident culpa, beatae omnis aliquam maiores voluptas doloribus deserunt aliquid dignissimos aspernatur non, nemo sequi accusamus vitae cumque!
        </p>       
      </div>
    </div>
  );
}

export default App;
