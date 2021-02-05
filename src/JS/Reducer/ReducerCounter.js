import {INCREMENT,DECREMENT} from "../Constants/ActionsTypes"

const initialState={
    count:0,
};

const ReducerCounter =(state=initialState,action)=>{
// if (action.type===INCREMENT)
// {return{...state,count :state.count +1}
// }
// else return state;
switch(action.type) {
    case INCREMENT:
        return {...state,count :state.count +1};
        case DECREMENT:
            return  {...state,count :state.count-1};
     default:
         return state;       
}
}


export default ReducerCounter;

