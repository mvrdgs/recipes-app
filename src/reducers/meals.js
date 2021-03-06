import { API_MEAL_FETCH, SET_MEALS_FILTER,
  SET_MEAL_INGREDIENT,
  SPECIFIC_MEAL, STORE_CATEGORIES, STORE_MEALS } from '../actions/meals';

const INITIAL_STATE = {
  categories: [],
  specificMeal: [],
  meals: [],
  loading: false,
  search: false,
  filter: '',
  ingredient: '',
};

const recipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_MEAL_FETCH:
    return { ...state, loading: true };
  case SET_MEAL_INGREDIENT:
    return { ...state, search: true, ingredient: action.payload };
  case STORE_CATEGORIES:
    return { ...state, categories: action.payload, loading: false };
  case STORE_MEALS:
    return { ...state, meals: action.payload, loading: false };
  case SET_MEALS_FILTER:
    return { ...state, filter: action.payload };
  case SPECIFIC_MEAL:
    return { ...state, specificMeal: action.payload, loading: false };
  default:
    return state;
  }
};

export default recipes;
