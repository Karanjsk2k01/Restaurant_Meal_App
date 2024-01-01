import React, { useState } from 'react'
import CartIcon from '../Cart/CartIcon.js'
import classes from './HeaderCartButton.module.css';
import Cart from '../Cart/Cart.js';

const HeaderCartButton = () => {
  const [overlay, setoverlay] = useState(false);

  const clickHandler = () => {
    setoverlay(true);
  }

  const closeHandler = () => {
    setoverlay(false);
  }
  return (
    <>
      {overlay && <Cart onClose={closeHandler} />}
      <button className={classes.button} onClick={clickHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </>

  )
}

export default HeaderCartButton