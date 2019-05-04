import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import { searchItems } from '../actions/index';
import './search-item.css';

export class SearchItem extends React.Component {
	renderResults() {
		if (this.props.loading) {
			return <Spinner spinnerName="circle" noFadeIn />
		}

		if (this.props.error) {
			return <strong>{this.props.error}</strong>;
		}

		if (this.props.data) {
		const items = this.props.items.map((item, index) =>
			<li key={index}>
			<span>
			{item.name}
			<br />
			{item.price}
			<br />
			{item.description}
			</span>
			</li>
		)

		return (
			<ul className="item-search-results">
                {items}
            </ul>
		)};
	}

	search(e) {
		e.preventDefault();
		if (this.input.value.trim() === '') {
			return;
		}

		this.props.dispatch(searchItems(this.input.value));
	}

	render() {
		return (
			<div className="item-search">
				<form onSubmit={(e) => this.search(e)}>
					<input type="search" className="search" ref={input => this.input = input} />
					<button className="search">Search</button>
				</form>
				<ul className="item-search-results">
                    {this.renderResults()}
                </ul>
			</div>
		);
	}

}

const mapStateToProps = state => ({
	items: state.items,
	loading: state.loading,
	error: state.error
});

export default connect(mapStateToProps)(SearchItem);
