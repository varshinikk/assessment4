import * as ActionTypes from '../Actions/type';

const intialState = {
    fname:'',
    lname:'',
    name:'',
    password:''
};

export default(state=intialState,action)=>{
    switch(action.type){
        case ActionTypes.PRESS:{
            return{...state}
    }

        default:
            return state;
    }
}