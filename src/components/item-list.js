import React from 'react'
import { deleteItem } from '../actions/index'
import { connect } from 'react-redux'
import './item-list.css'

const ItemList = (props) => {
	console.log(props) 

return (
		<div className="item-list-container">
			<ul className="item-list">
		{props.items && props.items.map((item, index) => (
			<li key={index}>
			<span className="item-details">
			{props.showEstablishmentName ? item.establishmentName : null}
			<br />
			{item.name}
			<br />
			{item.price}
			<br />
			{item.description}
			</span>
			<br />
			<button onClick={() => props.dispatch(deleteItem(item._id))}>Delete</button>
			</li>
			))}
			</ul>
		</div>
	)
}



export default connect()(ItemList)