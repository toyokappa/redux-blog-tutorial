import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Blog from "./containers/Blog";
import BlogItem from "./containers/BlogItem";

const Router = props => {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route exact path="/:id" component={BlogItem} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Router;
