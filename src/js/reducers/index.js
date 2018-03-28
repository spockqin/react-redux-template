import { combineReducers } from 'redux';

import toDos from './toDoReducer';
import counter from './counterReducer';
import friends from './friendReducer';

export default combineReducers({
	toDos,
	counter,
	friends
})