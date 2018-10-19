import React from "react";
import ReactDOM from "react-dom";
import DevTools from "mobx-react-devtools";
import store from "./Store";
import { Provider } from "mobx-react";
import DOB from "./components/dob";
const root = document.getElementById("root");
const Root = (
  <Provider store={store}>
    <DOB />
  </Provider>
);
ReactDOM.render(Root, root);
