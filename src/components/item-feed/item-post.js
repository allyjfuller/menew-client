import React from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../actions/index';

class ItemPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
	this.props.dispatch(getItems())
	}


render() {
	return(
		<ul>
		{this.props.items && this.props.items.map((item,index) =>(
			<li key={index}>
			<span>
			{item.name}
			<br />
			{item.price}
			<br />
			{item.description}
			</span>
			</li>
		))}
			</ul>
		)
	}
}

export default connect()(ItemPost)