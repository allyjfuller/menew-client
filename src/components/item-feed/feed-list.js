import React from 'react'
import { connect } from 'react-redux'

class FeedList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: ''
		}
	}

	getData(){
		setTimeout(() => {
			console.log('Data is fetched');
			this.setState({
				data: 'Hello'
			})
		})
	}

	componentDidMount(){
		this.getData();
	}

	render() {
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
			</li>
			))}
			</ul>
		</div>
		)
	}
}

export default connect()(FeedList);