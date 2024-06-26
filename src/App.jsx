import MealContextProvider from "./Store/MealsContextProvider";
import CartContextProvider from "./Store/CartContextProvider";
import Header from "./components/Header";
import Menu from "./components/Menu";


function App() {

  return (
    <MealContextProvider>
    <CartContextProvider>
      <Header />
      <Menu />
    </CartContextProvider>
    </MealContextProvider>
  );
}

export default App;
