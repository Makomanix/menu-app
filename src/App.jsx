import MealsContextProvider from "./Store/MealsContextProvider";
import Header from "./components/Header";
import Menu from "./components/Menu";


function App() {

  return (
    <MealsContextProvider>
      <Header />
      <Menu />
    </MealsContextProvider>
  );
}

export default App;
