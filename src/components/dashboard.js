import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { BrowserRouter as Router } from "react-router-dom"
import {fetchProtectedData} from '../actions/protected-data';
import {getAllItems} from '../actions/index';
import ItemList from './item-list';
import SearchItem from './search-item';
import AddItem from './add-item';

import './dashboard.css';

export class Dash extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(getAllItems());
    }

    render() {
    console.log(this.props)
        return (
            <Router>
                <div className="dashboard">
                <ItemList items={this.props.items} />
                
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => { 
    console.log(state)
    return {
    items: state.protectedData.data,
    publicItems: state.items.data
    }
};

export default requiresLogin()(connect(mapStateToProps)(Dash));