import Header from "./components/Layouts/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Meals from "./components/Meals/Meal";
import Summary from "./components/UI/Summary";

function App() {
  return (
    <div>
      <Header />
      <Meals />
    </div>
  );
}

export default App;
