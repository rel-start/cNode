import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import HomePage from '../views/home/home-page';
import BookPage from '../views/book/book-page';
// import Page404 from '../views/404/page404';

export default () => {
  return (
    <Switch>
      <Route key="home" path={["/", "/home"]} exact render={() => (<Redirect to="/index" />)} />
      <Route key="index" path="/index" component={HomePage} />
      <Route key="book" path="/book" component={BookPage} />
      <Route key="404" path="*" component={HomePage} />
    </Switch>
  );
};