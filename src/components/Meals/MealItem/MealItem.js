import classes from './MealItem.module.css';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

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
          <input type='text' />
        </div>
        <div className={classes.button}>
          <button>+ Add</button>
        </div>
      </div>

    </li>
  );
};

export default MealItem;