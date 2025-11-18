import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import App from "./App";
import "./Styles/index.css";
import AuthInitializer from "./components/AuthInitializer";

ReactDOM.createRoot(document.getElementById("root")!).render(

  <Provider store={store}>
    <BrowserRouter>
      <AuthInitializer>
        <App />
      </AuthInitializer>
    </BrowserRouter>
  </Provider>

);
