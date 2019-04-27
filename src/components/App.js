import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderBar from './header-bar';
import AddItem from './add-item';
import ItemList from './item-list';
//import SearchItem from './search-item';
import { refreshAuthToken } from '../actions/auth';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            https://docs.google.com/presentation/d/1prIN89ipWozVVtmuTC_9-zlDwkoP8RLSuj5OdPOaJTs/edit?usp=sharing
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

// move this logic into dashboard
    render() {
            return (
                this.props.loggedIn ?
            <div className="app" >
                <HeaderBar />
                <AddItem />
                <ItemList />
            </div>

            : null
        )
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));