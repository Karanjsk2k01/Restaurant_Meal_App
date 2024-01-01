import { Fragment } from 'react';
import AvailableMeals from './AvailableMeals';
import Summary from '../UI/Summary';

const Meals = () => {
  return (
    <Fragment>
      <Summary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;