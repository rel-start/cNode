import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from '../views/home/home'
import Book from '../views/book/book'
// import Page404 from '../views/404/page404'

export default () => {
  return (
    <Switch>
      <Route key="home" path="/" exact render={() => (<Redirect to="/index" />)} />
      <Route key="index" path="/index" component={Home} />
      <Route key="book" path="/book" component={Book} />
      <Route key="404" path="*" component={Home} />
    </Switch>
  );
};