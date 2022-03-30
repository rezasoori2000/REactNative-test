import React, { useState, useEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const CategoryMealScreen = ({ route, navigation }) => {
  const { id, title } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: title });
  });

  //setCategory(CATEGORIES.find((x) => x.id === id));
  const meals = MEALS.filter((x) => x.categoryIds.indexOf(id) >= 0);
  return <MealsList list={meals} navigation={navigation} />;
};

export default CategoryMealScreen;
