import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { BrowserRouter as Router } from "react-router-dom"
import {fetchProtectedData} from '../actions/protected-data';
import AddItem from './add-item';
import ItemList from './item-list';

import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <Router>
                <div className="dashboard">
                <AddItem />
                <ItemList />
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));