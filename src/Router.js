import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Blog from "./containers/Blog";
import Post from "./containers/Post";

const Router = props => {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route exact path="/:id" component={Post} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Router;
