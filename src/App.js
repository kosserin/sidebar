import React, {useContext} from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Modal from './components/Modal/Modal';
import {AppContext} from './context/context';
import {FaBars} from '../node_modules/react-icons/fa';

const App = () => {

  const ctx = useContext(AppContext);

  const openModalHandler = () => {
    ctx.onOpenModal();
  }

  return (
    <React.Fragment>
      <Sidebar />
      <span onClick={() => ctx.onShowSidebar()} className="show-sidebar__btn"><FaBars /></span>
      <button onClick={openModalHandler} className="open-modal__btn">Open Modal</button>
      {ctx.modalState && <Modal />}
    </React.Fragment>
  )
}

export default App