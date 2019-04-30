const initialState = {
	data: []
}

const items = (state = initialState, action) => {
	switch(action.type) {
		case 'RECEIVE_ITEMS':
		return {
			...state,
			data: action.items	
		}

		case 'DELETE_ITEM':
		console.log(action)
		const items = state.data.filter(item => item.id !== action.id)
			return {
				...state,
				data: items
			}

		default:
		return state
	}
}

export default items