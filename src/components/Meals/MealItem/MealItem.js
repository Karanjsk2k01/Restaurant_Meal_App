import React, { useContext, useState } from 'react';
import classes from './MealItem.module.css';
import CartContext from './cart-context';

const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const [amount, setAmount] = useState(1);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = () => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: +amount,
    };

    cartContext.addItem(item);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div className={classes.amount}>
        <div className={classes.input}>
          <h4>Amount</h4>
          <input
            type='number'
            min={1}
            max={5}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className={classes.button}>
          <button onClick={addToCartHandler}>+ Add</button>
        </div>
      </div>
    </li>
  );
};

export default MealItem;
