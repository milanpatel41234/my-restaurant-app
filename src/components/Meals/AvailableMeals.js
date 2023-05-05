import React from "react";
import style from './AvailableMeals.module.css'

const DUMMY_MEALS = [
  {
    id: "a1",
    name: "Chole",
    discription: "Fresh and Hot veggies",
    price: 99.0,
  },
  {
    id: "a2",
    name: "Idli Shambhar",
    discription: "Hot veggies",
    price: 199.0,
  },
  {
    id: "a3",
    name: "Chizzi Nudles",
    discription: "Hot nudles with chiz",
    price: 149.0,
  },
  {
    id: "a4",
    name: "Cury",
    discription: "Famous cury of malwa",
    price: 89.0,
  },
];

function AvailableMeals() {
  const mealslist = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={style.meals}>
      <ul>{mealslist}</ul>
    </section>
  );
}

export default AvailableMeals;
