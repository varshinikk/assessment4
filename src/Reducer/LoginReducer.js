import * as ActionTypes from '../Actions/type';

const intialState = {
    name:'',
    password:''
};

export default(state=intialState,action)=>{
    switch(action.type){
        case ActionTypes.CLICK:{
            return{...state}
    }

        default:
            return state;
    }
}