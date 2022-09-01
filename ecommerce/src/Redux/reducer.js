import { ADDTOCART } from "./action";
import { saveData } from "../localStorage";

const init = {
    cartData:[]
}

export const reducer = (state=init,action)=>{
    switch(action.type){
        case ADDTOCART:{
            saveData(action.payload)
            return{
                ...state,
              cartData:[...state.cartData,action.payload]
            }
        }
        default: return state
    }
}