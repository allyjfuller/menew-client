import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/index';
//import { saveItem } from '../actions/index';
import { withRouter } from 'react-router-dom';

class AddItem extends React.Component {
	render() {
		console.log(this.props);
		return(

	<form onSubmit={(event) => {
		event.preventDefault()

		const input = {
			name: event.target.itemName.value,
			price: event.target.itemPrice.value,
			description: event.target.itemDescription.value, 
			userEmail: this.props.currentUser.email
		}

		this.props.dispatch(addItem(input))
		
		event.target.itemName.value = ''
		event.target.itemPrice.value = ''
		event.target.itemDescription.value = ''
	}}>
				<label>
					Item Name:
					<br />
					<input type="text" name="itemName" />
				</label>
				<br />
				<label>
					Price:
					<br />
					<input type="text" name="itemPrice" />
				</label>
				<br />
				
				<br />
				<label>
				Description:
					<br />
					<textarea type="text" name="itemDescription"/>
				</label>
				<br />
				<button>Submit</button>
			</form>
		)
	}
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
});
	
	export default withRouter(connect(mapStateToProps)(AddItem));