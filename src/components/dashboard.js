import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { BrowserRouter as Router } from "react-router-dom"
import {fetchProtectedData} from '../actions/protected-data';
import ItemList from './item-list';

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
                <ItemList items={this.props.items}/>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    items: state.protectedData.data
        
});

export default requiresLogin()(connect(mapStateToProps)(Dashboard));