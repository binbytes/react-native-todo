import { AsyncStorage } from 'react-native'
import constant from '../mix/constants'

export const DATA_ADD = 'DATA_SAVE'
export const DATA_GET = 'DATA_GET'
export const DATA_CLEAR = 'DATA_CLEAR'
export const DATA_ERROR = 'DATA_ERROR'

export function add(data) {
    return async (dispatch) => {
        await AsyncStorage.setItem(constant.KEY, data)
        dispatch({type: DATA_ADD, data: JSON.parse(data)})
    }
}

export function get() {
    return async (dispatch) => {
        AsyncStorage.getItem(constant.KEY, (err, result) => {
            if(err)
                dispatch({type: DATA_ERROR, err: err})
            else if(result)
                dispatch({type: DATA_GET, data: JSON.parse(result)})
        })
    }
}

export function clear() {
    return async (dispatch) => {
        await AsyncStorage.clear()
        dispatch({type: DATA_CLEAR})
    }
}
