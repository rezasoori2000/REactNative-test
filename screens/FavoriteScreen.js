import React from "react";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = ({ route, navigation }) => {
  const favMeals = MEALS.filter((x) => x.id === "m1" || x.id === "m2");
  return <MealsList list={favMeals} navigation={navigation} />;
};

export default FavoriteScreen;
