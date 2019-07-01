import *as ActionTypes from './type';

export function REGISTER() {
  return function (dispatch) {
    dispatch({ type: "REGISTER" });
  }
}