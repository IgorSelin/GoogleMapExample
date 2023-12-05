import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const apiKey = "AIzaSyAw7A7ks0U9LBf8-zNvliAg4LaXYss4JkE";

root.render(
  <React.StrictMode>
    <Wrapper apiKey={apiKey} render={render}>
      <App />
    </Wrapper>
  </React.StrictMode>
);
