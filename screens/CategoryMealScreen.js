import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList";

const CategoryMealScreen = ({ route, navigation }) => {
  const { id, title } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: title });
  });

  const availableMeals = useSelector((x) => x.rootMeals.filterMeals);
  const meals = availableMeals.filter((x) => x.categoryIds.indexOf(id) >= 0);
  return <MealsList list={meals} navigation={navigation} fav={false} />;
};

export default CategoryMealScreen;
