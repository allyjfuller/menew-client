import {API_BASE_URL} from '../config';

/*const ADD_ITEM = 'ADD_ITEM'
export const addItem = (input) => ({
	type: ADD_ITEM,
	id: Math.random(),
	input
})*/

const DELETE_ITEM = 'DELETE_ITEM'
export const deleteAnItem = (id) => ({
	type: DELETE_ITEM,
	id
})


const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
const receiveItems = (items) => ({
	type: RECEIVE_ITEMS,
	items
})

export const saveItem = (item) => {
	console.log(item);
	return dispatch => {
		fetch(`${API_BASE_URL}/item/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item)
		})
		.then(response => response.json())
		.then(json => dispatch(receiveItems(json)))
		.catch(err => console.log(err))
	}
}

export const getItems = (email) => {
	return dispatch => {
		fetch(`${API_BASE_URL}/item/${email}`, {
			method: 'GET'
		})
		.then(response => response.json())
		.then(json => dispatch(receiveItems(json)))
		.catch(err => console.log(err))
	}
}

export const deleteItem = (_id) => {
	return dispatch => {
		fetch(`${API_BASE_URL}/item/${_id}`, {
			method: 'DELETE'
		})
		.then(response => response.json())
		.then(json => dispatch(deleteAnItem(json._id)))
		.catch(err => console.log(err))
	}
}