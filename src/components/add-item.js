import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/index';

const AddItem = (props) => (
	<form onSubmit={(event) => {
		event.preventDefault()

		let input = event.target.userInput.value
		props.dispatch(addItem(input))
		event.target.userInput.value = ''
	}}>
				<label>
					Item Name:
					<br />
					<input type="text" name="userInput" />
				</label>
				<br />
				<label>
					Price:
					<br />
					<input type="price" />
				</label>
				<br />
				<input type="file"/>
				<br />
				<label>
				Description:
					<br />
					<textarea type="text"/>
				</label>
				<br />
				<button>Submit</button>
			</form>

	)
	
	export default connect()(AddItem)