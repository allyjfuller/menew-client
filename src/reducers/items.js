const initialState = {
	data: []
}

const items = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_ITEM':

		return {
			...state,
			data: [...state.data, {
				id: action.id,
				input: action.input
			}]	
		}

		case 'DELETE_ITEM':
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