import { Platform } from "react-native";
import Colors from "../constants/Colors";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import FiltersScreen from "../screens/FiltersScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HeaderButton from "../components/HeaderButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="CategoriesScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        // headerTintColor:
        headerTitleStyle: {
          fontWeight: "bold",
          color: Platform.OS === "android" ? "white" : Colors.primary,
        },
      }}
    >
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories",
        }}
      />
      <Stack.Screen name="CategoryMealScreen" component={CategoryMealScreen} />
      <Stack.Screen name="FiltersScreen" component={FiltersScreen} />
      <Stack.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
        options={{
          title: "Meal Categories",
        }}
      />
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Stack.Navigator>
  );
}

function MyFavStack() {
  return (
    <Tab.Navigator
      initialRouteName="favorite"
      screenOptions={{
        tabBarActiveTintColor: Colors.accentColor,
        // headerShown: false,
        tabBarStyle: { display: "none" },

        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      }}
    >
      <Tab.Screen name="favorite" component={FavoriteScreen} />
      <Tab.Screen
        name="favMealDtail"
        component={MealDetailScreen}
        screenOptions={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="meals"
        screenOptions={{
          tabBarActiveTintColor: Colors.accentColor,
          headerShown: false,
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        }}
      >
        <Tab.Screen
          name="meals"
          component={MyStack}
          options={{
            tabBarLabel: "Meals",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="food" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="filters"
          component={FiltersScreen}
          options={{
            tabBarLabel: "Filters",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="filter" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="favoriteCon"
          component={MyFavStack}
          options={{
            tabBarLabel: "Favorite",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="star" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
