import { getNewsByCategory } from "../../api";
import { dispatch } from "../store";
import { SET_CATEGORY, SET_ERROR, SET_LOADING, SET_BOOKS } from "../types";

export const setLoading = (state) => {
  dispatch({ type: SET_LOADING, payload: state });
};

export const setError = (state) => {
  dispatch({ type: SET_ERROR, payload: state });
};

export const setNewsByCategory = async () => {
  
  const obj = await getNewsByCategory();
  console.log(obj);
  if  (obj.success) dispatch({ type: SET_BOOKS, payload:obj.data.books });
  else setError(true);

  setLoading(false);
};

export const setCategory = (category) => {
  dispatch({ type: SET_CATEGORY, payload: category });
};