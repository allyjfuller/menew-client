//import { search } from '../menu-items' 

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

/*
ASYNC ACTIONS - Save Items

const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
const receiveItems = (items) => ({
	type: RECEIVE_ITEMS,
	items
})


export const saveItem = (text) => {
	return dispatch => {
		fetch('http://localhost:8080/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				text,
			})
		})
		.then(response => response.json())
		.then(json => dispatch(receiveItems(json)))
		.catch(err => console.log(err))
	}
}

ASYNC ACTION - Search Items

export const SEARCH_ITEMS_REQUEST = 'SEARCH_ITEMS_REQUEST';
export const searchItemsRequest = () => ({
	type: SEARCH_ITEMS_REQUEST
});

export const SEARCH_ITEMS_SUCCESS = 'SEARCH_ITEMS_SUCCESS';
export const searchItemsSuccess = items => ({
    type: SEARCH_ITEMS_SUCCESS,
    items
});

export const SEARCH_ITEMS_ERROR = 'SEARCH_ITEMS_ERROR';
export const searchItemsError = error => ({
    type: SEARCH_ITEMS_ERROR,
    error
});

export const searchItems = name => dispatch => {
    dispatch(searchItemsRequest());
    search(name)
        .then(items => dispatch(searchItemsSuccess(items)))
        .catch(error => dispatch(searchItemsError(error)));
};
*/
