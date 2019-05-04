import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SearchItem from './search-item';
import {fetchProtectedData} from '../actions/protected-data';
import {getAllItems} from '../actions/index';
import ItemList from './item-list';


export class LandingPage extends React.Component {
    constructor(props) {
        super();
    }
    
    componentDidMount() {
        this.props.dispatch(getAllItems());
    }

    render() {
            if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }

    return (
        <div className="home">
        <div>
        <SearchItem />
        <ItemList items={this.props.publicItems} />
        </div>
        </div>
    
        );
    
    }

}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    items: state.protectedData.data,
    publicItems: state.items.data
});

export default connect(mapStateToProps)(LandingPage);