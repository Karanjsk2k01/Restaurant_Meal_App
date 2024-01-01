import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Meals from "./components/Meals/Meal";
import Summary from "./components/UI/Summary";

function App() {
  return (
    <div>
      {/* <Cart /> */}
      <Header />
      <Meals />
    </div>
  );
}

export default App;
