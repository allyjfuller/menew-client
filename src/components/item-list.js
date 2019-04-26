import React from 'react'
import { connect } from 'react-redux'
import { deleteItem } from '../actions/index'

const ItemList = (props) => (
		<ul>
		{props.items.map((item, index) => (
			<li key={index}>
				<span>{item.text}</span>
				<button onClick={() => props.dispatch(deleteItem(item.id))}>Delete</button>
			</li>
			))}
		</ul>

	)

const mapStateToProps = (state) => ({
	items: state.items.data
})

export default connect(mapStateToProps)(ItemList)