import *as ActionTypes from './type';

    export function handleClick(){
        return function(dispatch){
            dispatch({type:"CLICK"});
      }
}