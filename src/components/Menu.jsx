import { useContext } from "react"

import { MealsContext } from "../Store/MealsContextProvider"
import MenuItem from "./MenuItem"

export default function Menu() {

  const items = useContext(MealsContext)


  return (
    <section >
      <ul className="meals">{items.map(item => (
        <li key={item.id} className="meal-item">
          <MenuItem {...item} />
        </li>
      ))}</ul>
    </section>
  )
}