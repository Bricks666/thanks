import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootState } from "./reducers";

export const store = createStore(
	rootState,
	composeWithDevTools(applyMiddleware(thunk))
);
