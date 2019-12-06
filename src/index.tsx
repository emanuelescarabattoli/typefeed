import * as React from "react";
import * as ReactDOM from "react-dom";

import Application from "./containers/Application/index";
import "./assets/base.scss";

// It renders the root component in the DOM
ReactDOM.render(<Application />, document.getElementById("index"));
