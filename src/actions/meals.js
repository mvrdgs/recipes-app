import { fetchMealsCategories } from '../services/fetchCategories';
import fetchMeals, { fetchMealSearched, fetchSpecificMeal,
  fetchMealsByIngredient } from '../services/fetchMeals';

export const API_MEAL_FETCH = 'API_MEAL_FETCH';
export const STORE_CATEGORIES = 'STORE_CATEGORIES';
export const STORE_MEALS = 'STORE_MEALS';
export const SET_MEALS_FILTER = 'SET_MEALS_FILTER';
export const SPECIFIC_MEAL = 'SPECIFIC_MEAL';
export const SET_MEAL_INGREDIENT = 'SET_MEAL_INGREDIENT';

export const apiFetch = () => ({ type: API_MEAL_FETCH });

export const storeCategories = (payload) => ({ type: STORE_CATEGORIES, payload });

export const storeMeals = (payload) => ({ type: STORE_MEALS, payload });

export const setMealsFilter = (payload) => ({ type: SET_MEALS_FILTER, payload });

export const storeSpecificMeal = (payload) => ({ type: SPECIFIC_MEAL, payload });

export const setMealIngredient = (payload) => ({ type: SET_MEAL_INGREDIENT, payload });

export function getMealsCategories() {
  return async (dispatch) => {
    dispatch(apiFetch());
    const categories = await fetchMealsCategories();
    dispatch(storeCategories(categories));
  };
}

export function getMeals(filter) {
  return async (dispatch) => {
    dispatch(apiFetch());
    const meals = await fetchMeals(filter);
    dispatch(storeMeals(meals));
  };
}

export function searchMeal(text, option) {
  return async (dispatch) => {
    dispatch(apiFetch());
    const meals = await fetchMealSearched(text, option);
    dispatch(storeMeals(meals));
  };
}

export function getSpecificMeal(id) {
  return async (dispatch) => {
    dispatch(apiFetch());
    const meal = await fetchSpecificMeal(id);
    dispatch(storeSpecificMeal(meal));
  };
}

export function getMealsByIgredient(filter) {
  return async (dispatch) => {
    dispatch(apiFetch());
    const meals = await fetchMealsByIngredient(filter);
    dispatch(storeMeals(meals));
  };
}
