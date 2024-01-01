import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {

  const cartItems = [{ id: 'm1', name: 'Sushi', amount: 2, price: 65.5 }];

  const CartItems = (
    <ul className={classes['cart-items']}>
      {cartItems.map((item) => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Modal>
        {CartItems}
        <div className={classes.total}>
          <span>Total</span>
          <span>35.5</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
