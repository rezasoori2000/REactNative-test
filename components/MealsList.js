import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";
const MealsList = (props) => {
  const MealItemTemplate = (itemData) => {
    return (
      <MealItem
        duration={itemData.item.duration}
        title={itemData.item.title}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        fav={props.fav}
        onSelectMeal={() => {
          props.navigation.navigate(
            props.fav ? "favMealDtail" : "MealDetailScreen",
            {
              mealId: itemData.item.id,
              fav: props.fav,
            }
          );
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.list}
        renderItem={MealItemTemplate}
        style={{ width: "100%", margin: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealsList;
