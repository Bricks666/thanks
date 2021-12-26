import { applyMiddleware, combineReducers, createStore } from "redux";
import { Store } from "../types/redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { default as profile } from "./profileReducer";
import { default as posts } from "./postsReducer";
import { default as loadings } from "./loadingsReducer";
import { default as navigation } from "./navigationReducer";

const rootReducer = combineReducers<Store>({
	profile: profile,
	posts: posts,
	loadings: loadings,
	navigation: navigation,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
