import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { BrowserRouter as Router } from "react-router-dom"
import {fetchProtectedData} from '../actions/protected-data';
import {getAllItems} from '../actions/index';
import ItemList from './item-list';

import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(getAllItems());
    }

    render() {
    console.log(this.props)
        return (
            <Router>
                <div className="dashboard">
                <ItemList items={this.props.items} showDeleteButton={true}/>
                
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

export default requiresLogin()(connect(mapStateToProps)(Dashboard));