import {combineReducers} from 'redux';
import { ActionConst } from 'react-native-router-flux';

import todoReducer from './todo.reducer';

const sceneReducer = (state = {}, {type, scene}) => {
    switch(type){
        case ActionConst.FOCUS:
            return { ...state, scene };
        default:
            return state;
    }    
}

const rootReducer = combineReducers({
    sceneReducer,
    todoReducer
});

export default rootReducer;
