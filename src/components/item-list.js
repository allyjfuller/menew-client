import React from 'react'
import { deleteItem } from '../actions/index'
import { connect } from 'react-redux'

const ItemList = (props) => {
	console.log(props)
return (
	<div>
			<ul>
		{props.items && props.items.map((item, index) => (
			<li key={index}>
			<span>
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