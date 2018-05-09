import { DATA_ADD, DATA_GET, DATA_CLEAR } from '../actions/todo.action';

import data from '../mix/data';

const initialData = {
    data: []
};

const todoReducer = (state = initialData, action) => {
    switch(action.type){
        case DATA_ADD:
            state = Object.assign({}, state, {data: action.data})
            return state;
        case DATA_GET:
            state = Object.assign({}, state, {data: action.data})
            return state;
        case DATA_CLEAR:
            return state;
        default:
            return state;
    }
};

export default todoReducer;