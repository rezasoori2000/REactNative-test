import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import MealsList from "../components/MealsList";
import { useSelector } from "react-redux";

const FavoriteScreen = ({ navigation }) => {
  const favMeals = useSelector((x) => x.rootMeals.favMeals);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  });
  if (!favMeals || favMeals.length === 0)
    return (
      <View style={{ ...styles.container, ...styles.center }}>
        <Text>Hey there is no Favorite. Do you want add some?</Text>
      </View>
    );
  else
    return (
      <SafeAreaView style={styles.container}>
        <MealsList list={favMeals} navigation={navigation} fav={true} />
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FavoriteScreen;
