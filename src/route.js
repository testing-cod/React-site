import React from  'react';
import { IndexRoute,Router, Route, hashHistory } from 'react-router';
import App from './App';
import Home from './components/Home/Home';
export default (
    <Router history="{hashHistory}">
         <Route path="/" components={App}>
             <IndexRoute component={Home}/>
         </Route>
    </Router>
);