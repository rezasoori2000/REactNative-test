import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
var selectedMeal = {};
const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  selectedMeal = MEALS.find((x) => x.id == mealId);
  useEffect(() => {
    navigation.setOptions({ title: selectedMeal.title });
  });

  return (
    <View style={styles.screen}>
      <Text> {mealId}</Text>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Back To Category"
        onPress={() => navigation.popToTop()}
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
