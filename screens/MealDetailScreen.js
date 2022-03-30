import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import HeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/actions/meals";

var selectedMeal = {};

const MealDetailScreen = (props) => {
  const dispatch = useDispatch();
  const { mealId, fav } = props.route.params;
  const meals = useSelector((x) => x.rootMeals.meals);

  selectedMeal = meals.find((x) => x.id === mealId);
  const isFav = useSelector((x) =>
    x.rootMeals.favMeals.some((m) => m.id === mealId)
  );
  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      title: selectedMeal.title,
      headerRight: () => (
        <HeaderButton
          click={() => dispatch(toggleFavorite(mealId))}
          iconName={isFav ? "star" : "star-half"}
        />
      ),
    });
  }, [isFav]);

  return (
    <View style={styles.screen}>
      <Text> {mealId}</Text>
      <Text>{selectedMeal.title}</Text>
      <Button
        title={fav ? "To Fav. List" : "Back To Category"}
        onPress={() =>
          fav
            ? props.navigation.navigate("favorite")
            : props.navigation.navigate("CategoriesScreen")
        }
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealDetailScreen;
