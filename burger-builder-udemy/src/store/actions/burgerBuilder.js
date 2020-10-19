import * as types from "./types";
import axios from "../../axios";

export const addIngredient = (ingName) => {
  return {
    type: types.ADD_INGREDIENT,
    ingredientName: ingName,
  };
};

export const removeIngredient = (ingName) => {
  return {
    type: types.REMOVE_INGREDIENT,
    ingredientName: ingName,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: types.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const initIngredientsFailed = () => {
  return {
    type: types.INIT_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get("https://udemy-burger-61040.firebaseio.com/ingredients.json")
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(initIngredientsFailed());
      });
  };
};
