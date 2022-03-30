import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";

var selectedMeal = {};
const MealDetailScreen = (props) => {
  const { mealId, fav } = props.route.params;
  selectedMeal = MEALS.find((x) => x.id == mealId);
  useEffect(() => {
    props.navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => (
        <HeaderButton click={() => alert("hello")} iconName="star" />
      ),
    });
  });

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
