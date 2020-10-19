import * as actionTypes from "../actions/types";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
};

const INGREDIENT_PRICES = {
  salad: 0.3,
  cheese: 0.5,
  meat: 1.8,
  bacon: 1.0,
};

const addIngredient = (state, action) => {
  const updatedIngr = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const ingredients = updateObject(state.ingredients, updatedIngr);
  const newState = {
    ingredients: ingredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updateObject(state, newState);
};

const removeIngredient = (state, action) => {
  const updatedIngr2 = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const ingredients2 = updateObject(state.ingredients, updatedIngr2);
  const newState2 = {
    ingredients: ingredients2,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updateObject(state, newState2);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: action.ingredients,
    totalPrice: 4,
    error: false,
    building: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.INIT_INGREDIENTS_FAILED:
      return updateObject(state, { error: true });
    default:
      return state;
  }
};

export default reducer;
