import { createStore, combineReducers } from 'redux'
import counter from '../components/Login/reducer'


const rootReducer = combineReducers({
	counter
});
const store =  createStore(rootReducer)
export default store;