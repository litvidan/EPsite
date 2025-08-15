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
          <a>Главная</a>
          <a>Портфолио</a>
          <a>Материалы</a>
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
        <div className="main_description">
          <img src="images\photo.jpg" alt="Фото"></img> 
          <div>
          
            <p><h1>Меня зовут Елена Поломошнова</h1>Стать учителем математики я мечтала со школьной скамьи. Окончила Бурятский Государственный университет им. Д.Банзарова. Работаю учителем математики в МБОУ "Нижнесаянтуйская СОШ". Самое прекрасное в моей работе - это дети. Я получаю огромное удовольствие от общения с ними.
Мой девиз учителя математики: " Учить пониманию, а не запоминанию".</p>

          </div>

        </div>
        
      </div>

      <footer>
        <div>That's gonna be a footer</div>
      </footer>
    </div>
  );
}

export default App;
