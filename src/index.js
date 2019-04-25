import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import TopNav from './components/top-nav';
import App from './components/App';
import MenuItemPage from './components/menu-item-page'
import * as serviceWorker from './serviceWorker';
import store from './store'
import './index.css';

ReactDOM.render(

	
	<Provider store={store}>
		
		<Router>
			<TopNav />
			<App />
			<button><Link to="/menu-item-page" className="menu-item-page"> + </Link></button>
			<Route exact path="/menu-item-page" component={ MenuItemPage } />

		</Router>
	
	</Provider>, 


document.getElementById('root'));


serviceWorker.unregister();
