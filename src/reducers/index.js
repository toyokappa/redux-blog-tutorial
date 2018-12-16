import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import blogList from "./blogList";
import blogItem from "./blogItem";

export default history => combineReducers({ router: connectRouter(history), blogList, blogItem });
