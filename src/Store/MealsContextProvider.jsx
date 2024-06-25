import { createContext, useState, useEffect } from "react";

export const MealsContext = createContext({
  items: [],
});

export default function MealsContextProvider({children}) {

  const [ meals, setMeals ] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const response = await fetch('http://localhost:3000/meals');
      const resData = await response.json();
      setMeals(resData);
    }

    getMeals();
  }, [])

  console.log(meals);

  const ctxValue = meals;

  return (
    <MealsContext.Provider value={ctxValue}>
      {children}
    </MealsContext.Provider>
  )
}