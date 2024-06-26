import { useContext } from "react"

import { MealContext } from "../Store/MealsContextProvider"
import MenuItem from "./MenuItem"

export default function Menu() {

  const mealItems = useContext(MealContext)


  return (
    <section >
      <ul className="meals">{mealItems.map(mealItem => (
        <li key={mealItem.id} className="meal-item">
          <MenuItem meal={mealItem} />
        </li>
      ))}</ul>
    </section>
  )
}