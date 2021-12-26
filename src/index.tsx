import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";
import { store } from "./redux";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	root
);
