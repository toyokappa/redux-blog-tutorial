import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import BlogIndex from "../containers/BlogIndex";

const Router = props => {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={BlogIndex} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Router;
