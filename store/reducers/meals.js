import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initState = {
  meals: MEALS,
  filterMeals: MEALS,
  favMeals: [],
};

const mealsReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const exisingIndex = state.favMeals.findIndex(
        (x) => x.id === action.mealId
      );
      if (exisingIndex >= 0) {
        const updateFavorite = [...state.favMeals];
        updateFavorite.splice(exisingIndex, 1);
        return { ...state, favMeals: updateFavorite };
      } else {
        var newFav = state.meals.find((x) => x.id === action.mealId);
        return {
          ...state,
          favMeals: state.favMeals.concat(newFav),
        };
      }
    case SET_FILTERS: {
      const alliedFilters = action.filters;
      const filterMeals = state.meals.filter((meal) => {
        if (alliedFilters.glutenFree && !meal.isGlutenFree) return false;
        if (alliedFilters.lactoreFree && !meal.isLactoreFree) return false;
        if (alliedFilters.vegeterian && !meal.isVegetarian) return false;
        if (alliedFilters.vegan && !meal.isVegan) return false;
        return true;
      });
      return { ...state, filterMeals: filterMeals };
    }
    default:
      return state;
  }
  return state;
};
export default mealsReducer;
