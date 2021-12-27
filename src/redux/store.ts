import { applyMiddleware, combineReducers, createStore } from "redux";
import { Store } from "../types/redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import profileReducer from "./profileReducer";
import postsReducer from "./postsReducer";
import loadingsReducer from "./loadingsReducer";
import navigationReducer from "./navigationReducer";
import loginReducer from "./loginReducer";
import registrationReducer from "./registrationReducer";

const rootReducer = combineReducers<Store>({
	profile: profileReducer,
	posts: postsReducer,
	loadings: loadingsReducer,
	navigation: navigationReducer,
	login: loginReducer,
	registration: registrationReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
