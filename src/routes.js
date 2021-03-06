import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/rocketshoes-web/" exact component={Home} />
      <Route path="/rocketshoes-web/cart" exact component={Cart} />
    </Switch>
  );
}
