import React from 'react';
import classes from './Summary.module.css';

const Summary = () => {
  return (
    <div className={classes.summary}>
      <div className={classes.wrapper}>
        <h1>Delicious Food , Delivered To You</h1>
        <span>Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</span>
        <span>All our meals are cooked with high-quality ingredients,just-in-time and of course by experienced chefs!</span>
      </div>

    </div>
  )
}

export default Summary;