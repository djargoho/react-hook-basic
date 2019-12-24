import React from "react";
import ReactDOM from "react-dom";
import StartApp from "./StartApp";
import ContextApp from "./ContextApp";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<ContextApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA ok


serviceWorker.unregister();
