import React from 'react'
import { connect } from 'react-redux'
import { deleteItem } from '../actions/index'

const ItemList = (props) => (
		<div>
			<ul>
		{props.items.map((item, index) => (
			<li key={index}>
			<span>
			{item.input.name}
			<br />
			{item.input.price}
			<br />
			{item.input.description}
			</span>
			<br />
			<button onClick={() => props.dispatch(deleteItem(item.id))}>Delete</button>
			</li>
			))}
			</ul>
		</div>
)

const mapStateToProps = (state) => ({
	items: state.items.data
})

export default connect(mapStateToProps)(ItemList)