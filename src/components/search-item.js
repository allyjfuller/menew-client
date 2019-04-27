import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import { searchItems } from './actions/index';

export class SearchItem extends React.Component {
	renderResults() {
		if (this.props.loading) {
			return <Spinner spinnerName="circle" noFadeIn />
		}

		if (this.props.error) {
			return <strong>{this.props.error}</strong>;
		}

		const items = this.props.items.map((item, index) =>
			<li key={index}>{item}</li>
		);
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
					<input type="search" ref={input => this.input = input} />
					<button>Search</button>
				</form>
			</div>
		);
	}

}

const mapStateToProps = state => ({
	items: state.items,
	loading: state.loading,
	error: state.error
});

export default connect(mapStateToProps)(SearchItems);