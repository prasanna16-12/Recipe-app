
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RecipeDetail from './RecipeDetail';
import Home from './Home';

const App = () => {

  return (
    <React.Fragment>
      <Router>
        <Route path='/' exact component={Home}></Route>
        <Route path='/RecipeDetails/:obj' component={RecipeDetail}></Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
