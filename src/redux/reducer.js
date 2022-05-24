import { brandsAPI, productsAPI } from "../api";
import { getBrandsUrl, getNameAndCategory, getNameandUrl, getNameandUrlBread } from "../utiles";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_BREAD = "SET_BREAD";
const SET_BREADANDCAKES = 'SET_BREADANDCAKES';
const SET_BRANDS = 'SET_BRANDS';

const initialState = {
  categories: [],
  bread: [],
  breadandcakes: [],
  brands: []
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_CATEGORIES:

      return {
        ...state,

        categories: action.payload,
      };

    case SET_BREAD:
      
      return {
        ...state,

        bread: action.payload,
      };

       case SET_BREADANDCAKES:

      return {
        ...state,

        breadandcakes: action.payload,
       
      };
      case SET_BRANDS:

     return {

        ...state,

        brands: action.payload,
       
      };


      default:
      return state;
  }
};

export const setCategories = (payload) => ({ type: SET_CATEGORIES, payload });
export const setBreadandCakes = (payload) => ({ type: SET_BREADANDCAKES, payload });
export const setBread = (payload) => ({ type: SET_BREAD, payload });
export const setBrands = (payload) => ({ type: SET_BRANDS, payload });




export const getCategories = () => async (dispatch) => {
  const response = await productsAPI.getCategories();
  const arr = getNameAndCategory(response);
  dispatch(setCategories(arr));

};

export const getBread = () => async (dispatch) => {
  const response = await productsAPI.getBread();
  const arr = getNameandUrlBread(response);
  dispatch(setBread(arr));

};

export const getBreadandCakesAll = () => async (dispatch) => {

  const response = await productsAPI.getBreadandCakesAll();
  const arr = getNameandUrl(response);
  dispatch(setBreadandCakes(arr));

};



export const getBrands = () => async (dispatch) => {

  const response = await brandsAPI.getBrands();
  const arr = getBrandsUrl(response);
  dispatch(setBrands(arr));

};

export default categoryReducer;
