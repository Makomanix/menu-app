import { createContext, useState, useEffect } from "react";

export const MealContext = createContext({
  mealItems: [],
});

export default function MealContextProvider({children}) {

  const [ mealItems, setMeals ] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const response = await fetch('http://localhost:3000/meals');
      const resData = await response.json();
      setMeals(resData);
    }

    getMeals();
  }, [])

  const ctxValue = mealItems;

  return (
    <MealContext.Provider value={ctxValue}>
      {children}
    </MealContext.Provider>
  )
}