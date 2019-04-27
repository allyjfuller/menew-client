import {API_BASE_URL} from '../config';
//import search from './items.js';

const DELETE_ITEM = 'DELETE_ITEM'
export const deleteItem = (id) => ({
	type: DELETE_ITEM,
	id
})


/*const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
const receiveItems = (items) => ({
	type: RECEIVE_ITEMS,
	items
})
*/

export const saveItem = (text) => {
	return dispatch => {
		fetch(`${API_BASE_URL}/item/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				text,
			})
		})
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(err => console.log(err))
	}
}
/*
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

/*
export const SEARCH_USERS_REQUEST = 'SEARCH_USERS_REQUEST';
export const searchUsersRequest = () => ({
	type: SEARCH_USERS_REQUEST
});

export const SEARCH_USERS_SUCCESS = 'SEARCH_USERS_SUCCESS';
export const searchUsersSuccess = items => ({
    type: SEARCH_USERS_SUCCESS,
    items
});

export const SEARCH_USERS_ERROR = 'SEARCH_USERS_ERROR';
export const searchUsersError = error => ({
    type: SEARCH_USERS_ERROR,
    error
});

export const searchUsers = establishmentName => dispatch => {
    dispatch(searchUsersRequest());
    search(establishmentName)
        .then(items => dispatch(searchUsersSuccess(Users)))
        .catch(error => dispatch(searchUsersError(error)));
};
*/