import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {

  const cartValue = useContext(CartContext);


  const cartItemAddHandler = (item) => {
    cartValue.addItem({ ...item, amount: 1 });
  }

  const cartItemRemoveHandler = (id, price) => {
    cartValue.removeItem(id, price)
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartValue.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={() => cartItemRemoveHandler(item.id, item.price)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ))}
    </ul>
  );

  let price = cartValue.totalAmount ? cartValue.totalAmount.toFixed(2) : '0.00';

  return (
    <>
      <Modal>
        {cartItems}
        <div className={classes.total}>
          <span>Total</span>
          <span> ${price}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {cartValue.items.length > 0 && <button className={classes.button}>Order</button>}
        </div>
      </Modal>
    </>
  );
};

export default Cart;
