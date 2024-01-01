import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Meals from "./components/Meals/Meal";
import Summary from "./components/UI/Summary";
import CartProvider from "./components/store/cart-provider";

function App() {
  return (
    <CartProvider>
      <Header />
      <Meals />
    </CartProvider>
  );
}

export default App;
