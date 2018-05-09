import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import reducers from '../reducers/index.reducer';
 
export default createStore(reducers, applyMiddleware(thunk, logger));