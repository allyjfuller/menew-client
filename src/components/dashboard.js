import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { BrowserRouter as Router } from "react-router-dom"
import {fetchProtectedData} from '../actions/protected-data';
import ItemList from './item-list';
import SearchItem from './search-item';

import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
    console.log(this.props)
        return (
            <Router>
                <div className="dashboard">
                <SearchItem />
                {
                    //<ItemList items={this.props.items}/>
                }
                <FeedList />
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => { 
    console.log(state)
    return {
    items: state.protectedData.data
    }
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));