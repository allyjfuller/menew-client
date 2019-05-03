import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import TopNav from './components/top-nav';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './store'
import './index.css';
import FeedList from './components/item-feed/feed-list';

ReactDOM.render(

	
	<Provider store={store}>
		
		<Router>
			<TopNav />
			<App />
			<FeedList />
		</Router>
	
	</Provider>, 


document.getElementById('root'));


serviceWorker.unregister();
