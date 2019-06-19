import { handleActions } from 'redux-actions'; 
import { pender } from 'redux-pender/lib/utils'; 
import * as types from './actionTypes' 
import {signinAPI} from '../infra/firebase/api'; 
 
export const signin=createAction(types.Sign_IN,signinAPI); 
function api(){ 
 
} 
//앞에 인자가다루는것, 뒤에거가 initalState 
export default handleActions({ 
    //비동기적인거는 pender 
    ...pender({ 
        type: types.SIGN_IN, 
        onSuccess: (state, action) => { 
            return Object.assign({}, state, { 
                //변경된 데이터 내용 
            }) 
 
        }, 
        onFailure: (state, action) => { 
            return Object.assign({}, state, { 
                //변경된 데이터 내용 
            }) 
        } 
    }), 
    //일반적인 action(동기적인) 
    [types.DEFAULT_ACTION]:(state,action)=>{ 
        return Object.assign({},state,{ 
 
        }) 
    } 
}, { 
        user: null, 
 
    })