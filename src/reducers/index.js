import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import blogList from "./blogList";

export default history => combineReducers({ router: connectRouter(history), blogList });
