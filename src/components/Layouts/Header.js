import { Fragment } from "react";
import classes from './Header.module.css';
import meals from '../../Assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={meals} alt="A Delicious Food at the Right Place" />
      </div>
    </Fragment>
  );
}

export default Header;