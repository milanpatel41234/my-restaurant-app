import React from "react";
import style from "./AvailableMeals.module.css";
import Card from "../store/Card";
import MealItem from "./MealItem/MealItem";

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
  const mealslist = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      discription={meal.discription}
    />
  ));
  return (
    <section className={style.meals}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
