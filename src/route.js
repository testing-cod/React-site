import React from  'react';
import { IndexRoute,Router, Route, hashHistory } from 'react-router';

export default (
    <Router history="{hashHistory}">
         <Route path="/" components={App}>
             <IndexRoute component={Home}/>
         </Route>
    </Router>
);