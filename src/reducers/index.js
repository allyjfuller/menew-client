import { combineReducers } from 'redux'
import { reducer as modal } from 'react-redux-modal-flex'
import items from './items'


const rootReducer = combineReducers({
	
	items
})

export default rootReducer