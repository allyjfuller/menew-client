import React from 'react';
import { connect } from 'react-redux';
//import { addItem } from '../actions/index';
import { saveItem } from '../actions/index';
import { withRouter } from 'react-router-dom';
import ReactModal from 'react-modal';
import './add-item.css';
import {required, nonEmpty} from '../validators.js';


class AddItem extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		};

		this.handleOpenModal = this.handleOpenModal.bind(this);
    	this.handleCloseModal = this.handleCloseModal.bind(this);
  	}
  
  		handleOpenModal () {
    	this.setState({ showModal: true });
  	}
  
  		handleCloseModal () {
    	this.setState({ showModal: false });
  	}


	render() {
		return(
		<div>
		<button onClick={this.handleOpenModal}>Add Item</button>
		<ReactModal isOpen={this.state.showModal}>
		<form 
			onSubmit={(event) => {
				event.preventDefault()

				const input = {
					name: event.target.itemName.value,
					price: event.target.itemPrice.value,
					description: event.target.itemDescription.value, 
					userEmail: this.props.currentUser.email
			}

				this.props.dispatch(saveItem(input))
		
				event.target.itemName.value = ''
				event.target.itemPrice.value = ''
				event.target.itemDescription.value = ''

				this.handleCloseModal()
		
			}}>
				<label>
					Item Name:
				</label>
					<br />
					<input type="text" name="itemName" validate={[required, nonEmpty]} />
				<br />
				<label>
					Price:
				</label>
					<br />
					<input type="text" name="itemPrice" validate={[required, nonEmpty]} />
				<br />
				<br />
				<label>
				Description:
				</label>
				<br />
				<textarea type="text" name="itemDescription" validate={[required, nonEmpty]} />
				<br />
				<button className="form">Submit</button>
				<button onClick={this.handleCloseModal} className="form">Cancel</button>
			</form>
			</ReactModal>
			</div>
		)
	}
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
});
	
	export default withRouter(connect(mapStateToProps)(AddItem));