import React, { useContext, useState } from 'react'
import CartIcon from '../Cart/CartIcon.js'
import classes from './HeaderCartButton.module.css';
import Cart from '../Cart/Cart.js';
import CartContext from '../store/cart-context.js';

const HeaderCartButton = () => {
  const [overlay, setoverlay] = useState(false);
  const ctxValue = useContext(CartContext)

  const totalNumber = ctxValue.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0)


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
        <span className={classes.badge}>{totalNumber}</span>
      </button>
    </>

  )
}

export default HeaderCartButton