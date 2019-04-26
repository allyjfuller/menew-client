const ADD_ITEM = 'ADD_ITEM'
export const addItem = (text) => ({
	type: ADD_ITEM,
	text,
	id: Math.random()

})

const DELETE_ITEM = 'DELETE_ITEM'
export const deleteItem = (id) => ({
	type: DELETE_ITEM,
	id
})