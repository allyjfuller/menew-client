import React from 'react'
import { deleteItem } from '../actions/index'
import { connect } from 'react-redux'
import './item-list.css'

const ItemList = (props) => {
	

return (
		<div className="item-list-container">
			<ul className="item-list">
		{props.items && props.items.map((item, index) => (
			<li key={index} className="items">
			<span className="item-details">
			<p className="establishmentName" id="public">{item.establishmentName}</p>
			<br />
			<p className="itemName" id="public">{item.name}</p>
			<br />
			<p className="price" id="public">{item.price}</p>
			<br />
			<p className="description" id="public">{item.description}</p>
			</span>
			<br />
			{props.showDeleteButton ? <button onClick={() => props.dispatch(deleteItem(item._id))} className="delete">Delete</button> : null}
			</li>
			))}
			</ul>
		</div>
	)
}



export default connect()(ItemList)