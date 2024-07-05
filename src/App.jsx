import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./assets/store/CartContext";
import { UserProgressContextProvider } from "./assets/store/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
