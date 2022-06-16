import React, {useContext} from 'react';
import {FaTimes} from '../../../node_modules/react-icons/fa';
import { AppContext } from '../../context/context';

import styles from './Modal.module.css';

const Outer = (props) => {
  
  const ctx = useContext(AppContext);
  
  return (
    <div onClick={() => {ctx.onCloseModal()}} className={styles.outer}>{props.children}</div>
  )
}

const Inner = () => {

  const ctx = useContext(AppContext);

  return (
    <div className={styles.inner}>
      <span onClick={() => {ctx.onCloseModal()}}><FaTimes /></span>
      <p>This is just demonstration of displaying modal with usage of context api.</p>
    </div>
  )
}

const Modal = () => {
  return (
    <React.Fragment>
      <Outer>
        <Inner />
      </Outer>
    </React.Fragment>
  )
}

export default Modal;