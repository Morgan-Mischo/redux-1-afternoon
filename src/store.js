import { createStore } from "redux";

const initialState = {
  name: "",
  category: "", 
  authorFirst: "", 
  authorLast: "", 
  ingredients: [], 
  instructions: [], 
  recipes: []
};

export const NAME_UPDATE = "NAME_UPDATE";
export const CATEGORY_UPDATE = "CATEGORY_UPDATE";
export const FIRST_NAME = "FIRST_NAME"; 
export const LAST_NAME = "LAST_NAME"; 
export const INGREDIENT_UPDATE = "INGREDIENT_UPDATE"; 
export const INSTRUCTION_UPDATE = "INSTRUCTION_UPDATE"; 
export const RECIPE_UPDATE = "RECIPE_UPDATE"; 

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case NAME_UPDATE:
      return {
        ...state,
        name: payload
      };
    case CATEGORY_UPDATE:
      return {
        ...state,
        category: payload
      };
      case FIRST_NAME: 
      return {
          ...state, 
          authorFirst: payload
      }; 
      case LAST_NAME: 
      return {
          ...state, 
          authorLast: payload
      }
      case INGREDIENT_UPDATE: 
      //Making a copy of the list first
      const newIngredients = [...state.ingredients, payload]
      return {
          ...state, 
          ingredients: newIngredients
      }
      case INSTRUCTION_UPDATE: 
      const newInstructions = [...state.instructions, payload]
      return {
          ...state,
          instructions: newInstructions
      }
      case RECIPE_UPDATE: 
      const {
          name, 
          category, 
          authorFirst, 
          authorLast, 
          ingredients, 
          instructions
      } = state; 
      const recipe = {
          name, 
          category, 
          authorFirst, 
          authorLast, 
          ingredients, 
          instructions
      }; 
      const newRecipes = [...state.recipes, recipe]; 
      return {
          ...state, 
          recipes: newRecipes
      }; 

    default:
      return state;
  }
}

export default createStore(reducer);
