import React from "react";
import ReactDOM from "react-dom";
import App from './client/app.jsx';

ReactDOM.render(<App url={'http://localhost:3000/events/'} perPage={10} />, document.getElementById("root"));