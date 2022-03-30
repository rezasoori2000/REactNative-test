import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridTitle = (props) => {
  let TouchComp =
    Platform.OS === "android" && Platform.Version > 21
      ? TouchableNativeFeedback
      : TouchableOpacity;
  return (
    <View style={styles.gridItem}>
      <TouchComp
        onPress={() => {
          props.navigation.navigate("CategoryMealScreen", {
            id: props.itemData.item.id,
            title: props.itemData.item.title,
          });
        }}
      >
        <View
          style={{
            ...styles.container,
            ...{ backgroundColor: props.itemData.item.color },
          }}
        >
          <Text style={styles.title}>{props.itemData.item.title}</Text>
        </View>
      </TouchComp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 1,

    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
  },
  gridItem: {
    flex: 1,
    elevation: 20,
    overflow: "hidden",
    borderRadius: 10,
    height: 150,
    margin: 15,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
});
export default CategoryGridTitle;
